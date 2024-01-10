function fibonacci(n) {
   if(n <= 2) return n-1; 
    let a = 0, b = 1 ; 

    // n = 3
    while(n > 2) {
        let curr = a + b; 
        a = b; 
        b = curr;
        n--;
    }

    return b;
}

module.exports = fibonacci;
