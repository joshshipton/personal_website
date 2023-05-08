from flask import Flask
from flask_sqlalchemy import SQLAlchemy






# sets app configs defeined in the config.py file
app = Flask(__name__)

from app import routes

if __name__ == '__main__':
    app.run()

