.DEFAULT_GOAL = all

# Programs
CMAKE ?= cmake
CTEST ?= ctest

# Options
PRESET ?= Debug
BACKEND ?= rapidjson

# Not every CTest version supports the --test-dir option
.PHONY: all
all: configure compile
	cd ./build && $(CTEST) --build-config $(PRESET) --output-on-failure --progress

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

.PHONY: www
www:
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET) -DJSONTOOLKIT_WEBSITE=ON
	$(CMAKE) --build ./build --config $(PRESET) --target www
