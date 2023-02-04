.DEFAULT_GOAL = all

# Programs
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= Debug
PANDOC ?= pandoc
SASSC ?= sassc
INSTALL ?= install
CONVERT ?= convert
MKDIR ?= mkdir
TAIL ?= tail

# Options
BACKEND ?= rapidjson

# Not every CTest version supports the --test-dir option
.PHONY: all
all: configure compile
	cd ./build && $(CTEST) --build-config $(PRESET) --output-on-failure --progress
	$(CMAKE) --install ./build --prefix ./build/dist --config $(PRESET) --verbose

.PHONY: configure
configure:
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET) \
		-DJSONTOOLKIT_BACKEND=$(BACKEND) -DJSONTOOLKIT_CONTRIB=ON -DJSONTOOLKIT_TESTS=ON

.PHONY: compile
compile:
	$(CMAKE) --build ./build --config $(PRESET) --target clang_format
	$(CMAKE) --build ./build --config $(PRESET)

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build

# Website
.PHONY: www
www: build/www/index.html \
	build/www/style.min.css \
	build/www/icon.svg \
	build/www/favicon.ico \
	build/www/manifest.webmanifest \
	build/www/icon-192x192.png \
 	build/www/icon-512x512.png \
	build/www/apple-touch-icon.png
build:
	$(MKDIR) $@
build/www: | build
	$(MKDIR) $@
build/index.markdown: README.markdown | build/www
	$(TAIL) -n +4 $< < $< > $@
build/www/icon-%.png: www/icon.svg | build/www
	$(CONVERT) -resize $(basename $(notdir $(subst icon-,,$@))) $< $@
build/www/apple-touch-icon.png: build/www/icon-180x180.png | build/www
	$(INSTALL) -m 0664 $< $@
build/www/manifest.webmanifest: www/manifest.webmanifest | build/www
	$(INSTALL) -m 0664 $< $@
build/www/favicon.ico: build/www/icon-32x32.png | build/www
	$(CONVERT) $^ $@
build/www/icon.svg: www/icon.svg | build/www
	$(INSTALL) -m 0644 $< $@
build/www/index.html: www/template.html build/index.markdown | build/www
	$(PANDOC) --standalone --table-of-contents --toc-depth=5 --template $< --output $@ --metadata title="JSON Toolkit" $(word 2,$^)
build/www/style.min.css: www/main.scss | build/www
	$(SASSC) --style compressed $< $@
