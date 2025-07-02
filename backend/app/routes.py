from flask import Blueprint, jsonify, request
from .services import get_buses, get_bus_details, get_bus_position

bp = Blueprint("main", __name__)

@bp.route("/buses")
def buses():
    buses = get_buses()
    return jsonify({"total_buses": len(buses), "buses": buses})

@bp.route("/buses/<id>")
def bus_details(id):
    return jsonify(get_bus_details(id))

@bp.route("/buses/position")
def bus_position():
    bus_id = request.args.get("id")
    line = request.args.get("line")
    return jsonify(get_bus_position(bus_id, line))
    