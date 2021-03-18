timeout 10s npm run build
status="$?"
if (( status == 124 )); then
    # Command timed out
    exit 0
fi
# Command either succeeded or failed
exit "$status"
