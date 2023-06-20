from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/execute-command', methods=['POST'])
def execute_command():
    command = request.json['command']
    
    # Execute the command using subprocess or any other method
    # Here's an example of executing a command using the `subprocess` module
    import subprocess
    result = subprocess.run(command, capture_output=True, text=True)
    
    response = result.stdout if result.returncode == 0 else result.stderr
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run()