.DEFAULT_GOAL = all

# Programs
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= Debug
PANDOC ?= pandoc
SASSC ?= sassc

# Options
BACKEND ?= rapidjson

include vendor/vendorpull/targets.mk

.PHONY: all
all:
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET) -DJSONTOOLKIT_BACKEND=$(BACKEND)
	$(CMAKE) --build ./build --target clang_format
	$(CMAKE) --build ./build
	$(CTEST) --test-dir ./build --output-on-failure --progress
	$(CMAKE) --install ./build --prefix ./build/dist --config $(PRESET) --verbose

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build

build:
	mkdir $@
build/www: | build
	mkdir $@
build/www/index.html: www/template.html README.markdown | build/www
	$(PANDOC) --standalone --table-of-contents --toc-depth=4 --template $< --output $@ --metadata title="JSON Toolkit" < $(word 2,$^)
build/www/style.min.css: www/main.scss | build/www
	$(SASSC) --style compressed $< $@

.PHONY: www
www: build/www/index.html build/www/style.min.css
