// Given an Array. Create a function that let's user know (true/false)
// whether any pair of elements in the array when added gives a particular sum.
// Input: Array(Integer) and Sum(Integer)

// Example 1:
// array = [1,2,4,9]; sum = 8; 
// return false

// Example 2:
// array = [1,2,4,4]; sum = 8;
// return true;

using System;
using System.Collections.Generic;

namespace practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = { 1,2,4,4 };
            Console.WriteLine(Compute(array,8));
        }

        static bool Compute(int[] array, int sum){
            HashSet<int> set = new HashSet<int>();

            foreach(var item in array){
                if(set.Contains(item))
                    return true;
                else
                    set.Add(sum-item);
            }

            return false;
        }
    }
}
