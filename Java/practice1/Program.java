// Given an Array. Create a function that let's user know (true/false)
// whether any pair of elements in the array when added gives a particular sum.
// Input: Array(Integer) and Sum(Integer)

// Example 1:
// array = [1,2,4,9]; sum = 8; 
// return false

// Example 2:
// array = [1,2,4,4]; sum = 8;
// return true;

import java.util.*; 

public class Program{

    public static void main(String[] args){
        int[] array = { 1,2,4,4 };
        System.out.println(compute(array, 8));
    }

    private static Boolean compute(int[] array, int sum) {

        Set<Integer> set = new HashSet<Integer>();

        for(int i = 0; i < array.length; i++){
            if(set.contains(array[i]))
                return true;
            else
                set.add(sum-array[i]);
        }

        return false;
    }
}