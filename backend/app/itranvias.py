import requests
import random

BASE_URL = "https://itranvias.com/queryitr_v3.php?"

def get_query_itranvias(func, dato) -> requests.Response:
    """Make a HTTP request to itranvias.com."""
    headers = {"X-Forwarded-For": random_private_ip()}

    if dato == None:
        response = requests.get(url=f"{BASE_URL}func={func}", headers=headers)
    else:
        response = requests.get(url=f"{BASE_URL}func={func}&dato={dato}&mostrar=B", headers=headers)
    return response


def random_private_ip() -> str:
    """
    Generates a random IPv4 address in one of these ranges: 
    
    10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16
    """
    
    range_choice = random.choice(['10', '172', '192'])

    if range_choice == 10:
        return f"10.{random.randint(0,255)}.{random.randint(0,255)}.{random.randint(0,255)}"
    elif range_choice == 172:
        return f"172.{random.randint(16,31)}.{random.randint(0,255)}.{random.randint(0,255)}"
    else:
        return f"192.168.{random.randint(0,255)}.{random.randint(0,255)}"