//===========================================================================================
/** 
 * Even Fibonacci numbers: Euler's Project Problem 2:
 * -------------------------------------------------- 
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
 * By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
 * find the sum of the even-valued terms.
*/

function OnGetEvenFibonacciNumbersSum(number) {
    
    var sumOfMultiples = 0;
    
    if (number < 3)
        {
            sumOfMultiples = 0;
        }
        
        else if(number >= 3 && number < 1000) {
            
            var multipleOf = 0;
                
                while (multipleOf < number) {
            
                    if ( (multipleOf % 3 == 0) || (multipleOf % 5 == 0) ) {
                        
                        sumOfMultiples += multipleOf;
                    
                    }

                    multipleOf++;

                }

            }

            return sumOfMultiples;

        }
        console.log(OnGetEvenFibonacciNumbersSum(100));
        
// function fib(n) {
    
//     if (n <= 1) { 
//         return n;
//     }
//    return fib(n-1) + fib(n-2);
// }

// console.log(fib(2));