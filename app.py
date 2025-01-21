from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    try:
        # Pegando a expressão matemática enviada via AJAX
        expressao = request.form['expressao']
        resultado = eval(expressao)  # Usando eval para calcular a expressão
        return jsonify(resultado=resultado)
    except Exception as e:
        return jsonify(erro=str(e))

if __name__ == '__main__':
    app.run(debug=True)
