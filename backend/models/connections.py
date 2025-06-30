import psycopg2
from dotenv import load_dotenv
import os

def connect():
    load_dotenv()

    USER = os.getenv("user")
    PASSWORD = os.getenv("password")
    HOST = os.getenv("host")
    PORT = os.getenv("port")
    DBNAME = os.getenv("dbname")

    try:
        connection = psycopg2.connect(
            user=USER,
            password=PASSWORD,
            host=HOST,
            port=PORT,
            dbname=DBNAME
        )
        return connection
    except Exception as e:
        return e
    
def disconnect(connection):
    try:
        connection.cursor.close()
        connection.close()
    except Exception as e:
        return e
