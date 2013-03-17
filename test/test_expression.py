import unittest
from expression import Expression


class Test(unittest.TestCase):
    """ Unit tests for expression"""

    def test_implicit_multiplication(self):
        """ The query "(x^k)/k! exp(-x)" fails because the implicit
        multplication function in the preparser doesn't handle the "!"

        """
        expression = Expression("(x^k)/k! exp(-x)")
        expression.taylor_series()

    def test_sine_to_javascript(self):
        """ Trigonmetric functions that javascript can represent should be
        represented as such

        """
        pass

    def test_exponential_to_javascript(self):
        """ Exponentials in python are represented as 3**2, but in javascript it
        should be Math.pow(3, 2)

        """
        pass
