.DEFAULT_GOAL = all
CMAKE ?= cmake
CTEST ?= ctest
PRESET ?= debug

.PHONY: all
all:
	$(CMAKE) --preset $(PRESET) --log-context
	$(CMAKE) --build --preset $(PRESET) --target clang_format
	$(CMAKE) --build --preset $(PRESET)
	$(CTEST) --preset $(PRESET)

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build
