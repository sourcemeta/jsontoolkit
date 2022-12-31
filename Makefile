.DEFAULT_GOAL = all
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= Debug
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
