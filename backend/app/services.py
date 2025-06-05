import threading
from .itranvias import get_query_itranvias

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
