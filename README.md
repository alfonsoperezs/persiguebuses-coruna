# Persiguebuses

Persiguebuses is a web aplication made in React and Flask to track the buses of [Tranvías Coruña](https://tranviascoruna.com/). 

https://github.com/user-attachments/assets/98c0e877-ef28-4043-86bd-758961f83fe3

## Installation

### Backend

First of all, install dependencies.

```
pip install -r requirements
```

After it, you need to create your database. There is a SQL script on `backend/sql` with the tables and attributes. For using it, you need to create a `.env` file.

```
cd backend/
touch .env
```

The `.env` file must contain the following parameters with yours credentials.

```
user=
password=
host=
port=
dbname=
```

### Frontend

First of all, install dependencies.

```
npm install
```

You need to create a `.env` file.

```
cd frontend/
touch .env
```

The `.env` file must contain the following parameters with the backend url.

```
VITE_API_URL=
```

## Contributing

Contributing are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name. Ex: feat/my-feature.
3. Commit your changes. Please, use [conventional commits](https://www.conventionalcommits.org).
4. Push to your repository and open a pull request.


## Disclaimer
This project is not endorsed by, directly affiliated with, maintained by, sponsored by or in any way officially related with la Tranvías Coruña, Concello de Coruña or any of the companies involved in the [Tranvías Coruña](tranviascoruna.com) website and the app.

This software is provided 'as is' without any warranty of any kind. The user of this software assumes all responsibility and risk for its use. I shall not be liable for any damages or misuse of this software. Please use the code and information in this repo responsibly.
