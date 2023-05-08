import flask
from flask import render_template, flash, redirect, url_for, request, session
from app import app



@app.route('/')
def index():
    
    return render_template('index.html')