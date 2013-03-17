""" Server for grok that function

"""
from flask import Flask, request, render_template
from expression import Expression

app = Flask(__name__)


@app.route("/")
def index():
    """ Serve up the backbone application

    """
    return render_template("index.html")


@app.route("/expressions")
def expressions():
    """ Returns a collection of expressions

    """
    return """[{"params": ["x", "y", "z"], "functionBody": "return params.z * Math.sin(params.x * params.y);"}]"""


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
        expression = Expression(query)
        return expression.taylor_series()
    else:
        return ""

if __name__ == "__main__":
    app.run(debug=True)
