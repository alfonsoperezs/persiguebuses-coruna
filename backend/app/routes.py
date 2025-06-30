from flask import Blueprint, jsonify
from .services import get_buses, get_bus_details

bp = Blueprint("main", __name__)

@bp.route("/buses")
def buses():
    buses = get_buses()
    return jsonify({"total_buses": len(buses), "buses": buses})

@bp.route("/buses/<id>")
def bus_details(id):
    return jsonify(get_bus_details(id))
    