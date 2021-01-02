
# Given an Array. Create a function that let's user know (true/false)
# whether any pair of elements in the array when added gives a particular sum.
# Input: Array(Integer) and Sum(Integer)

# Example 1:
# array = [1,2,4,9]; sum = 8; 
# return false

# Example 2:
# array = [1,2,4,4]; sum = 8;
# return true;

def compute(arr, s):
    myset = set()

    for item in arr:
        if myset.__contains__(item):
            return True
        else:
            myset.add(s - item)
    
    return False

array = [ 1,2,4,4]
print(compute(array,8))