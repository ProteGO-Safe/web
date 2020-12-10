#!/usr/bin/env bash
set -e
# run sh locales/scripts/download_all.sh -i PROJECT_ID -t PROJECT_TOKEN -p COVER_PERCENTAGE -o OUTPUT_DIR
output_dir=$(dirname "$0")

while getopts i:t:p:o: flag
do
    case "${flag}" in
        i) id=${OPTARG};;
        t) token=${OPTARG};;
        p) percentage=${OPTARG};;
        o) output_dir=${OPTARG};;
    esac
done

[ ! -d "$output_dir" ] && echo "Dir $output_dir not exist..., creating" && mkdir -p $output_dir

languages=$(curl -s --show-error --fail -X POST https://api.poeditor.com/v2/languages/list \
     -d api_token="$token" \
     -d id="$id" | jq -r '.result[][] | select(.percentage>='"$percentage"') |.code')

echo "Language $(echo $languages | xargs | sed 's/ /,/g') cover >= $percentage percentage"

for i in $languages;
do
	result=$(curl -s --show-error --fail -X POST https://api.poeditor.com/v2/projects/export \
	     -d api_token="$token" \
	     -d id="$id" \
	     -d language="$i" \
	     -d type="key_value_json" \
	     -d order="terms" | awk 'match($0,/\"url\":\"(.+)\"/,a){print a[1]}')
	url=$(echo $result | tr -d '\\')
        echo "Downloading: $i"
	curl -s --show-error --fail $url --output "$output_dir/$i.json"
done
