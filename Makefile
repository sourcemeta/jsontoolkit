.DEFAULT_GOAL = all
CMAKE ?= cmake
PRESET ?= debug

.PHONY: all
all:
	$(CMAKE) --preset $(PRESET) --log-context
	$(CMAKE) --build --preset $(PRESET)

.PHONY: clean
clean:
	$(CMAKE) -E rm -R -f build
