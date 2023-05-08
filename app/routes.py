import flask
from flask import render_template, flash, redirect, url_for, request, session
from app import app



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html') 

@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html') 


@app.route('/blog')
def blog():
    return render_template('blog.html') 

@app.route('/the-cognizant-grappler')
def grapplingblog():
    return render_template('grapplingblog,htnk')