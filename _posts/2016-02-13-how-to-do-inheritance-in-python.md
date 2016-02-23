---
layout: post
title:  "How to do inheritance objects in python"
date:   2016-02-14 00:12:25
categories: python
tags: python inheritance objects
image: /assets/article_images/2016-02-13-how-to-do-inheritance-in-python/python-programming.jpg
---

Few days ago, my friend [Sergio Trujillo][4] told me how are the objects in python. All this began in this [issue in github][1], I made two questions:

- Could you show me a simple inheritance code in python?

- How can I do a utility class in python?

**he answered this:**

Hello [@tonilopezmr][3], first I'll give you a brief explanation of inheritance in Python, doing a little comparison with the Java language.

As in the Java language, all objects inherit from the Object class. However there are some minor differences. In the Python language there is multiple inheritance and interfaces not exists as such. To achieve the same effect as Java interfaces, you can create classes that inherit from other abstract classes. You can find more information in [Python 2.7 doc][2]

This is a sample for simple inheritance:

```python
class InterfaceClass(object):

    def do_something_1(self):
        raise NotImplementedError("Should have implemented this")

    def do_something_2(self):
        raise NotImplementedError("Should have implemented this")


class AbstractClass(InterfaceClass):

    def do_something_1(self):
        """
            Implementation
        """
        return 1

    def do_something_2(self):
        """
            Implementation
        """
        return 2

    def do_something_3(self):
        raise NotImplementedError("Should have implemented this")


class ConcreteClass(AbstractClass):

    def do_something_3(self):
        """
            Implementation
        """
        return 3
```

In response to your question,

- How can I do a utility class in python?

what is usually done in Python is to create a module, which is not a class, it is a simple Python file containing all utility functions. Then you can import the module into any other implementation and use these functions. For example:
I have the package *utility\_module* with 2 files; *math\_functions.py* and *\__init\__.py*:

*\__init\__.py*:

```python
from . import math_functions
math_functions.py:

def factorial(n):
    if not isinstance(n, int) or n < 0:
        raise ValueError("n is not integral or is negative")
    return n == 0 and 1 or n * factorial(n - 1)

def fibonacci(n):
    if not isinstance(n, int) or n < 0:
        raise ValueError("n is not integral or is negative")
    return 0 if n == 0 else 1 if n == 1 else fibonacci(n-1) + fibonacci(n-2)
```

Any implementation can import the module and use its functions. For example:

```python

from utility_module import math_functions
from utility_module.math_functions import fibonacci

if __name__ == '__main__':
    print "7! = ", math_functions.factorial(7)
    print "fibonacci(8) = ", fibonacci(8)
```

You can find more information about Python modules and packages in [Python tutorials][5]

-----------------------

Don't forget that you can see the [issue here][1]

[1]: https://github.com/srgtrujillo/python-poo/issues/1
[2]: https://docs.python.org/2.7/tutorial/classes.html#inheritance
[3]: https://github.com/tonilopezmr
[4]: https://twitter.com/srgtrujillo
[5]: https://docs.python.org/2/tutorial/modules.html
