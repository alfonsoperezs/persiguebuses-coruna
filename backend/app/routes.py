from flask import Blueprint, jsonify
from .services import get_buses

bp = Blueprint("main", __name__)

@bp.route("/buses")
def buses():
    buses = get_buses()
    return jsonify({"total_buses": len(buses), "buses": buses})