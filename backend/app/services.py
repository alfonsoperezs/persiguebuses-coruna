from .itranvias import get_query_itranvias
from models.bus import get_bus_by_id

def get_lines():
    response = get_query_itranvias(func=1, dato=None)
    if response.ok:
        data = response.json()
        lines = {}
        for line in data["lineas"]:
            line_id = int(line["id"])
            lines[line_id] = line["nom_comer"]
        return lines
    else:
        return {}

def get_buses():
    lines = get_lines()
    buses = {}
    bus_stop_list = [25, 87, 181, 115, 286, 424, 434]

    for bus_stop in bus_stop_list:
        data = get_query_itranvias(func=0, dato=bus_stop).json()
        for line in data["buses"].get("lineas", {}):
            line_name = lines.get(line["linea"], "Uknown")
            for bus in line.get("buses", []):
                if bus["bus"] not in buses:
                    buses[bus["bus"]] = {"line" : line_name}
    return dict(sorted(buses.items()))

def get_bus_details(id):
    bus_details = get_bus_by_id(id)
    return bus_details.to_dict()

def get_bus_position(bus_id, line):
    lines = get_lines()

    for key, value in lines.items():
        if value == line:
            line_id = key

    response = get_query_itranvias(func=99, dato=line_id)

    if response.ok:
        data = response.json()
        for map in data['mapas']:
            for buses in map['buses']:
                for bus in buses['buses']:
                    id = bus['bus']
                    print(id)
                    if int(id) == int(bus_id):
                        posx = bus['posx']
                        posy = bus['posy']
                        return {"bus": id, "position": {"pos_x": posx, "pos_y": posy}}
                   