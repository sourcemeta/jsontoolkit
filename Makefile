.DEFAULT_GOAL = all
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= Debug
BACKEND ?= rapidjson

.PHONY: all
all:
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET) -DJSONTOOLKIT_BACKEND=$(BACKEND)
	$(CMAKE) --build ./build --target clang_format
	$(CMAKE) --build ./build
	$(CTEST) --test-dir ./build --output-on-failure --progress

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build
