# run sh locales/scripts/upload.sh -i PROJECT_ID -t PROJECT_TOKEN -l pl
while getopts i:t:l: flag
do
    case "${flag}" in
        i) id=${OPTARG};;
        t) token=${OPTARG};;
        l) language=${OPTARG};;
    esac
done

curl -X POST https://api.poeditor.com/v2/projects/upload \
     -F api_token="$token" \
     -F id="$id" \
     -F language="$language" \
     -F updating="terms_translations" \
     -F file=@"`dirname "$0"`/../$language.json" \
     -F fuzzy_trigger="1" \
     -F sync_terms="1"
