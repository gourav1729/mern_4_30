// A)Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}("
// Output: true.

// function validParenthis(s){

//     while(s.includes("()") || s.includes("[]") || s.includes(" {}")){
//         s = s.replace("()", "").replace("[]", "").replace(" {}" , "")  }

//     return s.length == 0;

// }

// console.log(validParenthis("()[]{}"))

// B)Given an integer array, the task is to find the maximum product of any subarray.

// Examples:

// Input: arr[] = {-2, 6, -3, -10, 0, 2}
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180

// Input: arr[] = {-1, -3, -10, 0, 60}
// Output: 60
// Explanation: The subarray with maximum product is {60}.

function maxProductBruteForce(nums) { 
    let maxProduct = Number.MIN_SAFE_INTEGER; // Step 1: Initialize maxProduct to the smallest possible safe integer
    console.log(maxProduct)

    for (let i = 0; i < nums.length; i++) { // Step 2: Iterate through each starting index of a subarray
        let product = 1; // Step 3: Initialize product for the current subarray

        for (let j = i; j < nums.length; j++) { // Step 4: Iterate through all possible ending indices
            product *= nums[j]; // Step 5: Multiply current product by the next element
            maxProduct = Math.max(maxProduct, product); // Step 6: Update maxProduct if the new product is larger
        }
    }

    return maxProduct; // Step 7: Return the maximum product found
}



console.log(maxProductBruteForce([2, 3, -2, 4])); // Output: 6


function maxProductBruteForce(nums) { 
    let maxProduct = -100; 
    console.log(maxProduct)

    for (let i = 0; i < nums.length; i++) { 
        let product = 1; 

        

        for (let j = i; j < nums.length; j++) { 
            product *= nums[j]; 
            maxProduct = Math.max(maxProduct, product); 
        }
    }

    return maxProduct; 
}



console.log(maxProductBruteForce([2, 3, -2, 4])); 



