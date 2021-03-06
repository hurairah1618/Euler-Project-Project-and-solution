//===========================================================================================
/**
 * 
 * Multiples of 3 and 5: Euler Problem 1: 
 * -------------------------------------
 * Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, 
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 * To-Do: Find the sum of all the multiples of 3 or 5 below 1000.
 */

 function onGetSumOfMultiplesOfThreeAndFive (lN: number): number {

    let sumOfMultiples: number = 0;
            
            if (lN < 3)
            {
                sumOfMultiples = 0;
            }

            else if(lN >= 3 && lN < 1000)
            {
                let multipleOf: number = 0;
                
                while (multipleOf < lN)
                {
                    if ( (multipleOf % 3 == 0) || (multipleOf % 5 == 0) )
                    {
                        sumOfMultiples += multipleOf;
                    }

                    multipleOf++;

                }

            }

            return sumOfMultiples;

}
        
//Uncomment the document selector in order to display the result of the problem.
//document.getElementById('problem1result').innerHTML = onGetSumOfMultiplesOfThreeAndFive(10);