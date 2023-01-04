#!/bin/sh

set -o errexit
set -o nounset

if [ $# -lt 2 ]
then
  echo "Usage: $0 <program> <expected> [args...]" 1>&2
  exit 1
fi

PROGRAM="$1"
EXPECTED="$2"
shift 2

echo "Running: $PROGRAM $*" 1>&2
CURRENT_OUTPUT="$("$PROGRAM" "$@" 2>&1)"
EXPECTED_OUTPUT="$(cat "$EXPECTED")"

if [ "$CURRENT_OUTPUT" != "$EXPECTED_OUTPUT" ]
then
  echo "Got: $CURRENT_OUTPUT" 1>&2
  echo "Expected: $EXPECTED_OUTPUT" 1>&2
  exit 1
fi
