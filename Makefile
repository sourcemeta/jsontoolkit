.DEFAULT_GOAL = all
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= debug
BACKEND ?= rapidjson

.PHONY: all
all:
	$(CMAKE) --preset $(PRESET) --log-context -DJSONTOOLKIT_BACKEND=$(BACKEND)
	$(CMAKE) --build --preset $(PRESET) --target clang_format
	$(CMAKE) --build --preset $(PRESET)
	$(CTEST) --preset $(PRESET)

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build
