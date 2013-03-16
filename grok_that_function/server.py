import sympy
from flask import Flask
from flask import request
from sympy.parsing import sympy_parser
from sage.misc import preparser

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
        return taylor_series(query)
    else:
        return ""

def taylor_series(query):
    """ Produces the taylor series expansion of the query with respect to the
    first free symbol it find (i.e. arbitrarily)

    """
    expression = sympy_parser.parse_expr(preparser.preparse(query))
    symbols = list(expression.free_symbols)
    if len(symbols) == 0:
        # no variables, so it's just a constant
        return sympy.N(expression)
    else:
        # arbitrarily pick the first variable to vary against 

        # TODO at some point we are going to want the taylor series expansion
        # against each variable

        # TODO order is also aribtrary right now, later we're going to want to
        # vary it based upon required accuracy
        symbol = symbols[0]
        order = 9
        series = expression.series(symbol, 0, order)
        return str(sympy.N(series))

if __name__ == "__main__":
    app.run(debug=True)

