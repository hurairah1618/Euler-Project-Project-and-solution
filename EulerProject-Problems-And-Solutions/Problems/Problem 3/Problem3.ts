//===========================================================================================
/** 
 * Largest prime factor: Euler's Project Problem 3:
 * -------------------------------------------------- 
 * What is the largest prime factor of the number 600851475143?\
 * Note: Brute force solution would be slow, please attack this problem with prime number generation algorithms
 * such like the Atkin Algorithm for problem solving or the greek guy.
*/
    
    function sieveOfAtkin(limit: number): any[] {
        
        var limitSqrt = Math.sqrt(limit);
        var sieve = [];
        var n;
        
        //prime start from 2, and 3
        sieve[2] = true;
        sieve[3] = true;
        
        for (var x = 1; x <= limitSqrt; x++) {
            
            var xx = x*x;
            
            for (var y = 1; y <= limitSqrt; y++) {
                
                var yy = y*y;
                
                if (xx + yy >= limit) {
                    break;
                }
                
                // first quadratic using m = 12 and r in R1 = {r : 1, 5}
                n = (4 * xx) + (yy);
                
                if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
                    sieve[n] = !sieve[n];
                }
                
                // second quadratic using m = 12 and r in R2 = {r : 7}
                n = (3 * xx) + (yy);
                
                if (n <= limit && (n % 12 == 7)) {
                    sieve[n] = !sieve[n];
                }
                
                // third quadratic using m = 12 and r in R3 = {r : 11}
                
                n = (3 * xx) - (yy);
                
                if (x > y && n <= limit && (n % 12 == 11)) {
                    sieve[n] = !sieve[n];
                }
            }
        }
        
        // false each primes multiples
        for (n = 5; n <= limitSqrt; n++) {
            if (sieve[n]) {
                
                x = n * n;
                
                for (var i = x; i <= limit; i += x) {
                    sieve[i] = false;
                }
            }
        }
        
        //primes values are the one which sieve[x] = true
        return sieve;
    }
    
    let primes = sieveOfAtkin(5000);
    
    console.log(primes);
