from .itranvias import get_query_itranvias
from models.bus import get_bus_by_id

def get_lines() -> dict:
    """
    Obtain all lines.

    :returns: A dict with the line's id and name.
    """
    try:
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
    except:
        return {}

def get_buses() -> dict:
    """
    Obtain all buses working at the moment.

    :returns: A dict with the buses and the line where they are working.
    """
    lines = get_lines()
    buses = {}
    bus_stop_list = [25, 87, 181, 115, 286, 424, 434] # Minimun stops to catch buses from all lines.

    try:
        for bus_stop in bus_stop_list:
            data = get_query_itranvias(func=0, dato=bus_stop).json()
            for line in data["buses"].get("lineas", {}):
                line_name = lines.get(line["linea"], "Uknown")
                for bus in line.get("buses", []):
                    if bus["bus"] not in buses:
                        buses[bus["bus"]] = {"line" : line_name}
        return dict(sorted(buses.items()))
    except:
        return {"error": "No available buses at the moment"}

def get_bus_details(id: int) -> dict:
    """
    Obtain details from a bus.

    :param id: The bus id.
    :returns: A dict with the bus details.
    """
    try:
        bus_details = get_bus_by_id(id)
        return bus_details.to_dict()
    except:
        return {"error": f"No available details for {id} bus."}

def get_bus_position(bus_id: int, line: str) -> dict:
    """
    Obtain de actual position of a bus.

    :param bus_id: The bus id.
    :param line: The line name. Ex: 1A, 12...
    :returns: A dict with the coordenates.
    """
    try:
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
                        if int(id) == int(bus_id):
                            posx = bus['posx']
                            posy = bus['posy']
                            return {"bus": id, "position": {"pos_x": posx, "pos_y": posy}}
        else:
            return {"error": f"No available position for {bus_id} bus."}

    except:
        return {"error": f"No available position for {bus_id} bus."}
                   