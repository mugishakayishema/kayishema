from flask import Flask, redirect, render_template, url_for

app = Flask(__name__, static_folder='../static', template_folder='../templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about-me')
def about():    
    return render_template('about.html')
@app.route('/contact')
def contact():
    return render_template('contact.html')  
@app.route('/projects')
def projects():
    return render_template('projects.html')

if __name__ == '__main__':
    app.run(debug=True)