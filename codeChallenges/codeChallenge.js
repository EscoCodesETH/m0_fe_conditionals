// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

let fb = [];


    for (let i = 1;i < 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            fb.push("FizzBuzz");
        }else if (i % 5 === 0){
            fb.push("Buzz");
        }else if (i % 3 ===0){
            fb.push("Fizz")
        }else{
            fb.push (i)
        }
    }
  


console.log(fb);