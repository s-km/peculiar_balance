def to_tern(x):
    result = []
    while x > 0:
        if x%3 == 0:
            result.append(0)
        elif x%3 == 1:
            result.append(1)
        else:
            result.append(2)
        x = x/3
    return result
