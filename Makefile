.DEFAULT_GOAL = all
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= debug
BACKEND ?= rapidjson

.PHONY: all
all:
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET)
	$(CMAKE) --build ./build --target clang_format
	$(CMAKE) --build ./build
	$(CTEST) --preset $(PRESET)

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build
