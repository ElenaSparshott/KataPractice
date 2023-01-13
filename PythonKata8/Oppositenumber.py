# Opposite number

# Very simple, given an integer or a floating-point number, find its opposite.


def opposite(number):
    if(number >0):
        return -abs(number)
    else:
        return abs(number)