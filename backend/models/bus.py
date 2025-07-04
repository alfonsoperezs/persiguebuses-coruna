from .connections import connect, disconnect
import datetime

class Bus():
    """Bus details."""

    def __init__(self, id: int, number_plate: str, model: str, bus_type: str, number_of_doors: int, registration_date: datetime.date, fuel_type: str):
        self.id = id
        """
        Id of the bus.
        """

        self.number_plate = number_plate
        """
        The license plate of the bus.
        """

        self.model = model
        """
        The bus model.
        """

        self.bus_type = bus_type
        """
        The type of bus (rigid or articulated).
        """

        self.number_of_doors = number_of_doors
        """
        Number of doors of the bus.
        """

        self.registration_date = registration_date
        """
        Date of first registration of the bus.
        """

        self.fuel_type = fuel_type
        """
        Type of fuel of the bus.
        """
    
    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "number_plate": self.number_plate,
            "model": self.model,
            "bus_type": self.bus_type,
            "number_of_doors": self.number_of_doors,
            "registration_date": self.registration_date.isoformat() if self.registration_date else None,
            "fuel_type": self.fuel_type
        }



def get_bus_by_id(id: int) -> Bus:
    """
    Obtain bus details by id from database.

    :param id: The bus id.
    :returns: A `Bus` object with the details.
    """

    connection = connect()
    cursor = connection.cursor()

    sql = "SELECT * FROM bus WHERE id = %s;"
    
    cursor.execute(sql, (id,))
    result = cursor.fetchone()
    
    disconnect(connection)

    if result is None:
        return None
    
    id, number_plate, model, bus_type, number_of_doors, registration_date, fuel_type = result
    
    return Bus(id, number_plate, model, bus_type, number_of_doors, registration_date, fuel_type)