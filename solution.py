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
    while True:
        tern_list = to_tern(x)
        if cur_posn >= len(tern_list):
            break
        while cur_posn < len(tern_list):
            if tern_list[cur_posn] == 2:
                result.append("L")
                x += math.pow(3, cur_posn)
                cur_posn += 1
                break
            elif tern_list[cur_posn] == 1:
                result.append("R")
            else:
                result.append("-")
            cur_posn += 1
    return result
