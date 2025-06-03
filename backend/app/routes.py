from flask import Blueprint, jsonify
from .services import get_buses

bp = Blueprint("main", __name__)

@bp.route("/buses")
def buses():
    """
    data = {
            "buses": {
                "340": {
                "line": "1A"
                },
                "342": {
                "line": "6"
                },
                "343": {
                "line": "14"
                },
                "344": {
                "line": "14"
                },
                "346": {
                "line": "6"
                },
                "347": {
                "line": "21"
                },
                "349": {
                "line": "12"
                },
                "358": {
                "line": "4"
                },
                "360": {
                "line": "12"
                },
                "361": {
                "line": "11"
                },
                "363": {
                "line": "4"
                },
                "364": {
                "line": "7"
                },
                "367": {
                "line": "2"
                },
                "369": {
                "line": "3"
                },
                "373": {
                "line": "7"
                },
                "377": {
                "line": "3A"
                },
                "380": {
                "line": "2A"
                },
                "384": {
                "line": "4"
                },
                "385": {
                "line": "5"
                },
                "392": {
                "line": "20"
                },
                "393": {
                "line": "11"
                },
                "395": {
                "line": "1"
                },
                "396": {
                "line": "20"
                },
                "398": {
                "line": "5"
                },
                "403": {
                "line": "22"
                },
                "405": {
                "line": "6A"
                },
                "408": {
                "line": "24"
                },
                "409": {
                "line": "12A"
                },
                "411": {
                "line": "7"
                },
                "412": {
                "line": "14"
                },
                "413": {
                "line": "1"
                },
                "414": {
                "line": "14"
                },
                "415": {
                "line": "23A"
                },
                "418": {
                "line": "22"
                },
                "419": {
                "line": "7"
                },
                "427": {
                "line": "17"
                },
                "428": {
                "line": "2A"
                },
                "429": {
                "line": "1A"
                }
            },
            "total_buses": 38
            }
    return jsonify(data)
    """
    buses = get_buses()
    return jsonify({"total_buses": len(buses), "buses": buses})