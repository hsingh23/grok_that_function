""" Server for grok that function

"""
from flask import Flask
from flask import request
from math_query import MathQuery

app = Flask(__name__)


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
