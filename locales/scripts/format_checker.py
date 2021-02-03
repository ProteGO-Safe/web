import json
import sys

from validators import SingleTag, SpaceAtTheBeginOrEnd, ClosingTag, SplitFormat, TagCounter


validators = [SpaceAtTheBeginOrEnd(), SingleTag(), ClosingTag(), SplitFormat(), TagCounter()]

lang = sys.argv[1]
pl_file = open(f"locales/pl.json", )
checking_file = open(f"locales/{lang}.json", )
pl_json = json.load(pl_file)
checking_json = json.load(checking_file)
validate_results = []
for pl_key in pl_json:
    pl_value = pl_json[pl_key]
    checking_value = checking_json[pl_key]
    for validator in validators:
        validate_result = validator.validate(pl_value, checking_value)
        validate_results.append(validate_result)

for validate_result in validate_results:
    if validate_result.valid is False:
        print(validate_result.message)
        print("\n")

pl_file.close()
checking_file.close()
for validate_result in validate_results:
    if validate_result.valid is False:
        sys.exit(1)
