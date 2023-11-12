# Programs
CMAKE = cmake
CTEST = ctest
KRAFT = kraft

# Options
PRESET = Debug
SHARED = OFF

all: configure compile test

configure: .always
	$(CMAKE) -S . -B ./build \
		-DCMAKE_BUILD_TYPE:STRING=$(PRESET) \
		-DCMAKE_COMPILE_WARNING_AS_ERROR:BOOL=ON \
		-DJSONTOOLKIT_CONTRIB:BOOL=ON \
		-DJSONTOOLKIT_TESTS:BOOL=ON \
		-DJSONTOOLKIT_DOCS:BOOL=ON \
		-DBUILD_SHARED_LIBS:BOOL=$(SHARED)

compile: .always
	$(CMAKE) --build ./build --config $(PRESET) --target clang_format
	$(CMAKE) --build ./build --config $(PRESET) --parallel 4
	$(CMAKE) --install ./build --prefix ./build/dist --config $(PRESET) --verbose \
		--component sourcemeta_jsontoolkit
	$(CMAKE) --install ./build --prefix ./build/dist --config $(PRESET) --verbose \
		--component sourcemeta_jsontoolkit_dev
	$(CMAKE) --install ./build --prefix ./build/dist --config $(PRESET) --verbose \
		--component sourcemeta_jsontoolkit_contrib

lint: .always
	$(CMAKE) --build ./build --config $(PRESET) --target clang_tidy

test: .always
	$(CMAKE) -E env UBSAN_OPTIONS=print_stacktrace=1 \
		$(CTEST) --test-dir ./build --build-config $(PRESET) \
			--output-on-failure --progress --parallel

doxygen: .always
	$(CMAKE) --build ./build --config $(PRESET) --target doxygen

unikraft: .always
	$(KRAFT) build --target development --jobs 4 --log-type=basic unikraft
	$(KRAFT) run --target development unikraft

clean: .always
	$(CMAKE) -E rm -R -f build unikraft/.unikraft unikraft/.config*

# For NMake, which doesn't support .PHONY
.always:
