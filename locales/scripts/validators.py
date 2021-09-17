import re


def prepare_invalid_tags(tag):
    return [
        f"[ {tag}]",
        f"[  {tag}]",
        f"[{tag} ]",
        f"[{tag}  ]",
        f"[ {tag} ]",
        f"[  {tag} ]",
        f"[ {tag}  ]",
        f"[  {tag}  ]",
        f"[ /{tag}]",
        f"[/ {tag}]",
        f"[ / {tag}]",
        f"[/{tag} ]",
        f"[/ {tag} ]",
        f"[ /{tag} ]",
        f"[ / {tag} ]",
    ]


def prepare_valid_tag(tag):
    return f"[{tag}]"


def prepare_closing_tag(tag):
    return f"[/{tag}]"


class ValidateResult:
    def __init__(self, valid, message=''):
        self.valid = valid
        self.message = message


class SpaceAtTheBeginOrEnd:
    @staticmethod
    def validate(pl_value, checking_value):
        if pl_value[0] == ' ' and checking_value[0] != ' ':
            return ValidateResult(False, f"missing space in ${checking_value}")
        if pl_value[-1] == ' ' and checking_value[-1] != ' ':
            return ValidateResult(False, f"missing space in ${checking_value}")
        return ValidateResult(True)


class SingleTag:
    @staticmethod
    def validate(pl_value, checking_value):
        tags = ["WBR", "COVID-19", "BR", "PP", "REG", "PHONE", "B", "EMAIL", "URL", "ROUTE", "COLOR"]
        for tag in tags:
            for invalid_tag in prepare_invalid_tags(tag):
                if invalid_tag in checking_value:
                    return ValidateResult(False, f"illegal tag in ${checking_value}")
        return ValidateResult(True)


class ClosingTag:
    @staticmethod
    def validate(pl_value, checking_value):
        tags = ["PP", "REG", "PHONE", "B", "EMAIL", "URL", "ROUTE", "COLOR"]
        for tag in tags:
            open_occurrences = checking_value.count(prepare_valid_tag(tag))
            close_occurrences = checking_value.count(prepare_closing_tag(tag))
            if open_occurrences != close_occurrences:
                return ValidateResult(False, f"missing  closing tag in ${checking_value}")
        return ValidateResult(True)


class SplitFormat:
    @staticmethod
    def validate(pl_value, checking_value):
        tags = ["URL", "COLOR", "ROUTE"]
        for tag in tags:
            result = re.findall("\[" + tag + "\](.*?)\[/" + tag + "\]", checking_value)
            for item in result:
                split = item.split('|')
                if len(split) != 2:
                    return ValidateResult(False, f"illegal {tag} format in {checking_value}")
                if split[0][0] == ' ' or split[0][-1] == ' ':
                    return ValidateResult(False, f"illegal {tag} format in {checking_value}")
                if split[1][0] == ' ' or split[1][-1] == ' ':
                    return ValidateResult(False, f"illegal {tag} format in {checking_value}")
        return ValidateResult(True)


class TagCounter:
    @staticmethod
    def validate(pl_value, checking_value):
        if pl_value.count('[') != checking_value.count('[') or pl_value.count(']') != checking_value.count(']'):
            if pl_value.count('[') == pl_value.count('[WBR]'):
                return ValidateResult(True)
            return ValidateResult(False, f"wrong number of tags in {checking_value}")
        return ValidateResult(True)
