from flask import Flask
from flask import render_template


app = Flask(__name__)
@app.route("/")
def sesion():
    return render_template('inicio_sesion.html')

@app.route("/registro")
def inicio():
    return render_template('registro.html')
    
@app.route("/contactos")
def index():
    message = "Hello, World"
    return render_template('index.html', message=message)

@app.route("/buscar")
def buscar():
    return render_template('buscar.html')

@app.route("/insertar")
def insertar():
    return render_template('insertar.html')

@app.route("/ver")
def ver():
    return render_template('ver.html')

@app.route("/editar")
def editar():
    return render_template('editar.html')

@app.route("/borrar")
def borrar():
    return render_template('borrar.html')
@app.route("/token")
def  token():
    return render_template('token.html')
    

    
        

if __name__ == '__main__':
    app.run(debug=True)