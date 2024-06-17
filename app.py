from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/boy_scouts')
def boy_scouts():
    return render_template('boy_scouts.html')

@app.route('/extracurriculars')
def extracurriculars():
    return render_template('extracurriculars.html')

@app.route('/github')
def github():
    return render_template('github.html')

@app.route('/inventions')
def inventions():
    return render_template('inventions.html')

@app.route('/sysadmin')
def sysadmin():
    return render_template('sysadmin.html')

@app.route('/tae_kwon_do')
def tae_kwon_do():
    return render_template('tae_kwon_do.html')

@app.route('/w3_study')
def w3_study():
    return render_template('w3_study.html')

if __name__ == '__main__':
    app.run(debug = True)