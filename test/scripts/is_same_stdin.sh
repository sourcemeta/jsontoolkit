#!/bin/sh

set -o errexit
set -o nounset

if [ $# -lt 3 ]
then
  echo "Usage: $0 <program> <expected> <input> [args...]" 1>&2
  exit 1
fi

PROGRAM="$1"
EXPECTED="$2"
INPUT="$3"
shift 3

echo "Running: $PROGRAM $* < $INPUT" 1>&2
CURRENT_OUTPUT="$("$PROGRAM" "$@" < "$INPUT")"
EXPECTED_OUTPUT="$(cat "$EXPECTED")"

if [ "$CURRENT_OUTPUT" != "$EXPECTED_OUTPUT" ]
then
  echo "Got: $CURRENT_OUTPUT" 1>&2
  echo "Expected: $EXPECTED_OUTPUT" 1>&2
  exit 1
fi
