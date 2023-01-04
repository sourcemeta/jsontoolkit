#!/bin/sh

set -o errexit
set -o nounset

if [ $# -lt 1 ]
then
  echo "Usage: $0 <program> [args...]" 1>&2
  exit 1
fi

PROGRAM="$1"
shift 1
echo "Running: $PROGRAM $*" 1>&2
"$PROGRAM" "$@" && EXIT_CODE="$?" || EXIT_CODE="$?"
test "$EXIT_CODE" != "0" || (echo "Test expected to fail" 1>&2 && exit 1)
