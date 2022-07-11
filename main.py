from flask import Flask
import sys

# Parameters
if len(sys.argv) > 2:
    HOST = sys.argv[1]
    PORT = sys.argv[2]
else:
    HOST = "0.0.0.0"
    PORT = 3000

index_add_counter = 0
 
# App itself
app = Flask(__name__)

@app.route('/')
def index():
    return f"This works!"

app.run(host=HOST, port=PORT)