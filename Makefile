# Programs
CMAKE = cmake
CTEST = ctest

# Options
PRESET = Debug
BACKEND = rapidjson

# Not every CTest version supports the --test-dir option
all: configure compile
	cd ./build && $(CTEST) --build-config $(PRESET) --output-on-failure --progress

configure: .always
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET) \
		-DJSONTOOLKIT_BACKEND=$(BACKEND) -DJSONTOOLKIT_CONTRIB=ON -DJSONTOOLKIT_TESTS=ON

compile: .always
	$(CMAKE) --build ./build --config $(PRESET) --target clang_format
	$(CMAKE) --build ./build --config $(PRESET)

clean: .always
	$(CMAKE) -E rm -R -f build

www: .always
	$(CMAKE) -S . -B ./build -DCMAKE_BUILD_TYPE=$(PRESET) -DJSONTOOLKIT_WEBSITE=ON
	$(CMAKE) --build ./build --config $(PRESET) --target www

# For NMake, which doesn't support .PHONY
.always:
