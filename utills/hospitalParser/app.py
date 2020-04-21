import json

if __name__ == "__main__":
    voivodeships = []
    with open("hospitals") as hospitals_file:
        Lines = hospitals_file.readlines()
        for line in Lines:
            if line.startswith("Województwo "):
                voivodeship_name = line.split("Województwo ", 1)[1].rstrip("\n")
                voivodeship = {
                    'name': voivodeship_name,
                    'items': []
                }
                voivodeships.append(voivodeship)
            else:
                line_items = line.split(",", 3)
                city = line_items[0]
                address = line_items[1].strip().rstrip("\n") + ', ' + line_items[2].strip().rstrip("\n")
                phones = []
                if len(line_items) == 4:
                    phones = line_items[3]
                    phone_result = [x.strip().rstrip("\n") for x in phones.split(',')]
                item = {
                    'city': city,
                    'address': address,
                    'phones': phone_result
                }
                voivodeships[-1]['items'].append(item)

    file = open("hospitals.json", mode="w")
    file.write(json.dumps(voivodeships, ensure_ascii=False))
    file.close()
