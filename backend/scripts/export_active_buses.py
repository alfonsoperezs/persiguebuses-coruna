from models.connections import connect, disconnect
import csv
from datetime import datetime

def export_month_to_csv(year: str, month: str):
    conn = connect()
    cursor = conn.cursor()

    start_date = f"{year}-{month}-01"
    end_date = f"{year}-{month}-31"

    sql_query = """
        SELECT time, working_buses FROM active_buses
        WHERE time >= %s AND time <= %s
    """

    cursor.execute(sql_query, (start_date, end_date))
    rows = cursor.fetchall()

    output_file = f"{month}-{year}.csv"
    with open(output_file, "w", newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['fecha', 'hora', 'working_buses']) 

        for row in rows:
            time_str, working_buses = row
            if isinstance(time_str, str):
                dt = datetime.strptime(time_str, '%Y-%m-%d %H:%M:%S')
            else:
                dt = time_str

            fecha = dt.date().isoformat()
            hora = dt.strftime('%H:%M')
            writer.writerow([fecha, hora, working_buses])

    disconnect(conn)
