#!/usr/bin/env bash
# run sh locales/scripts/sync_terms.sh -i PROJECT_ID -t PROJECT_TOKEN -o WORKING_DIR

set -e
output_dir=$(dirname "$0")

while getopts i:t:o: flag
do
    case "${flag}" in
        i) id=${OPTARG};;
        t) token=${OPTARG};;
        o) output_dir=${OPTARG};;
    esac
done

curl -s --show-error --fail -X POST https://api.poeditor.com/v2/projects/upload \
     -F api_token="$token" \
     -F id="$id" \
     -F updating="terms" \
     -F file=@"$output_dir/pl.json" \
     -F sync_terms=1
