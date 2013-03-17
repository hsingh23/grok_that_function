""" Server for grok that function

"""
from flask import Flask, request, render_template
from math_query import MathQuery

app = Flask(__name__)


@app.route("/")
def index():
    """ Serve up the backbone application

    """
    return render_template("index.html")


@app.route("/math_functions")
def math_functions():
    """ Returns a collection of math_functions

    """
    return """[{"inputs": ["x", "y"], "functionBody": "return Math.sin(params.x * params.y);"}]"""


@app.route("/series")
def series():
    """ Endpoint to get the taylor series expansion of a function

    """
    query = request.args.get('query')
    if query:
        # TODO later we're going to want to return some JSON to the frontend
        # TODO user input might not be something we can actually process, we
        # should handle that case (ideally help the user figure out what we
        # don't understand)
        math_query = MathQuery(query)
        return math_query.taylor_series()
    else:
        return ""

if __name__ == "__main__":
    app.run(debug=True)
