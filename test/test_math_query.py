import unittest
from math_query import MathQuery


class Test(unittest.TestCase):
    """ Unit tests for math_query"""

    def test_implicit_multiplication(self):
        """ The query "(x^k)/k! exp(-x)" fails because the implicit
        multplication function in the preparser doesn't handle the "!"

        """
        math_query = MathQuery("(x^k)/k! exp(-x)")
        math_query.taylor_series()

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
