from .connections import connect, disconnect
import datetime

class LineRecord():
    def __init__(self, line_name: str, last_time_worked: datetime):
        self.line_name = line_name
        """
        Name of the line.
        """
        self.last_time_worked = last_time_worked
        """
        Last time when the bus has worked on that line.
        """
    def to_dict(self) -> dict:
        return {
            "line_name": self.line_name,
            "last_time_worked": self.last_time_worked.isoformat() if self.last_time_worked else None,
        }

def get_record(bus_id: int) -> list[LineRecord]:
    """
    Obtain the lines where the bus has worked.

    :param bus_id: The bus id.
    :returns: A list with the lines.
    """
    record_list = []
    connection = connect()
    cursor = connection.cursor()

    sql = "SELECT num_linea, ult_fecha FROM bus_linea WHERE id = %s ORDER BY ult_fecha DESC;"

    cursor.execute(sql, (bus_id,))
    result = cursor.fetchall()
    
    disconnect(connection)

    if not result:
        return None
    
    for row in result:
        record_list.append(LineRecord(row[0], row[1]).to_dict())

    return record_list
