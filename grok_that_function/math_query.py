""" This module contains the MathQuery class

"""

import sympy
from sympy.parsing import sympy_parser
from sage.misc import preparser


class MathQuery(object):
    """ MathQuery is takes a user input and allows transformations on that
    input.

    """

    __query = None

    def __init__(self, query=""):
        self.__query = query

        # handle spaces as multiplication
        preparser.implicit_multiplication(5)

    def taylor_series(self):
        """ Produces the taylor series expansion of the query with respect to
        the first free symbol it find (i.e. arbitrarily)

            >>> math_query = MathQuery("((x^k)/k!) exp(-x)")
            >>> math_query.taylor_series()
            'exp(-x) + k*(exp(-x)*log(x) + 0.577215664901533*exp(-x)) + k**2*(0.5*exp(-x)*log(x)**2 + 0.577215664901533*exp(-x)*log(x) - 0.655878071520254*exp(-x)) + O(k**3)'

        """
        expression = sympy_parser.parse_expr(preparser.preparse(self.__query))
        symbols = list(expression.free_symbols)
        if len(symbols) == 0:
            # no variables, so it's just a constant
            return sympy.N(expression)
        else:
            # arbitrarily pick the first variable to vary against

            # TODO at some point we are going to want the taylor series
            # expansion against each variable

            # TODO order is also aribtrary right now, later we're going to want
            # to vary it based upon required accuracy
            symbol = symbols[0]
            order = 5
            series_expansion = expression.series(symbol, 0, order)
            return str(sympy.N(series_expansion))
