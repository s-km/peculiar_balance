import math

def to_tern(x):
    result = []
    while x > 0:
        x = int(x)
        if x%3 == 0:
            result.append(0)
        elif x%3 == 1:
            result.append(1)
        else:
            result.append(2)
        x = x/3
    return result
    
def answer(x):
    result = []
    cur_posn = 0
    tern_list = to_tern(x)
    while cur_posn < len(tern_list):
        if tern_list[cur_posn] == 2:
            result.append("L")
            x += math.pow(3, cur_posn)
            tern_list = to_tern(x)
        elif tern_list[cur_posn] == 1:
            result.append("R")
        else:
            result.append("-")
        cur_posn += 1
    return result
