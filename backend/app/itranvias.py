import requests
import random

BASE_URL = "https://itranvias.com/queryitr_v3.php?"

def get_query_itranvias(func, dato):
    headers = {"X-Forwarded-For": random_private_ip()}

    if dato == None:
        response = requests.get(url=f"{BASE_URL}func={func}", headers=headers)
    else:
        response = requests.get(url=f"{BASE_URL}func={func}&dato={dato}&mostrar=B", headers=headers)

    return response


def random_private_ip() -> str:
        """
        Generates a random IPv4 address in one of these ranges: 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16
        """

        # First octet
        x1 = random.choice([10, 172, 192])

        if x1 == 172:
            # Second octet for 172.x.x.x
            x2 = random.randint(16, 31)
        else:
            # Second octet for 10.x.x.x and 192.x.x.x
            x2 = random.randint(0, 255)

        # Third octet
        x3 = random.randint(0, 255)
        # Fourth octet
        x4 = random.randint(0, 255)

        # Get all the octets into a string
        return ".".join(map(str, [x1, x2, x3, x4]))