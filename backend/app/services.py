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
    lock = threading.Lock()
    threads = []

    for line_id, line_name in lines.items():
        t = threading.Thread(target=process_line, args=(line_id, line_name, buses, lock))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()

    return dict(sorted(buses.items()))

def process_line(line_id, line_name, buses, lock):
    response = get_query_itranvias(func=99, dato=line_id)
    data = response.json()
    for route in data.get("mapas", []):
        for stop in route.get("buses", []):
            for bus in stop.get("buses", []):
                bus_id = bus["bus"]
                posx = bus["posx"]
                posy = bus["posy"]
                with lock:
                    if bus_id not in buses:
                        buses[bus_id] = {"line": line_name, "position": {"posx": posx, "posy": posy}}