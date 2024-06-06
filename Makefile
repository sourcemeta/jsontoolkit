CMAKE = cmake
CTEST = ctest
PRESET = Release

all: configure compile test

configure: .always
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE:STRING=$(PRESET)

compile: .always
	$(CMAKE) --build ./build --config $(PRESET) --parallel 4

test: .always
	$(CTEST) --test-dir ./build --build-config $(PRESET) --verbose

clean: .always
	$(CMAKE) -E rm -R -f build

# For NMake, which doesn't support .PHONY
.always:
