#!/usr/bin/env bash
# run sh locales/scripts/export.sh -i PROJECT_ID -t PROJECT_TOKEN -l LOCALE
while getopts i:t:l: flag
do
    case "${flag}" in
        i) id=${OPTARG};;
        t) token=${OPTARG};;
        l) language=${OPTARG};;
    esac
done

result=$(curl -s --show-error --fail -X POST https://api.poeditor.com/v2/projects/export \
     -d api_token="$token" \
     -d id="$id" \
     -d language="$language" \
     -d type="key_value_json" \
     -d order="terms" | awk 'match($0,/\"url\":\"(.+)\"/,a){print a[1]}')

url=$(echo $result | tr -d '\\')

curl -s --show-error --fail $url --output "`dirname "$0"`/../$language.json"
