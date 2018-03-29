# General Pseudocode

Its a javascript calculator. Everyone has seen or used one at one point or another
Pseudocode:

1. Read inputs and capture
2. Create a array ['1', '+', '2'] into a variable
3. Use PEMDAS\* and process calculation.
4. Repeat steps 2 and 3 as needed.

\*PEMDAS stands for Please Excuse My Dear Aunt Sally, or
Paranthesis, Exponent, Math, Division, Addition, Subtraction

# How this program was programmed.

Work on one CRUD element at any given time.

1. Build the general architecture MV*
2. CRUD, work on the create portion
3. CRUD, work on the delete portion

## CREATE
// It should have a way to store a stream of numbers temporarily until pushed as a string.
// It should only have 1 "." at most like decimal numbers, e.g. check if string has "." character
// It should push cache into storage when operator is pressed.
// It should push operator into storage

## DELETE
// It should delete stuff on CE and AC

... etc (got lazy didn't feel this part of notes relevant. Really this should be TDD)


# NOTES LEARNED DURING THIS PROGRAM

### PROBLEM & SOLUTION 1

When checking if the lastest storage value was an operator, I tried using a regex.test function to evaluate things to true or false. This part of the program
is the logic that handles when a "+%x-" operator key is pressed, it would append the cache to storage, and flush the cache after.

What happened was that it disallowed all future operators being added.

The code was:

```javascript
doOperations: function(buttonValue){
  let lastArrayValue = this.storage[this.storage.length - 1];
  let re = /^(\+|x|÷|-)$/;
if(!lastArrayValue.match(/^(\+|x|÷|-)$/)){
  this.storage.push(this.cache);
  this.storage.push(buttonValue); // push operator
  this.cache="";
}
```

It was rewritten as

```javascript
doOperations: function(buttonValue){
  if(this.cache.length !== 0){
    this.storage.push(this.cache);
    this.storage.push(buttonValue); // push operator
    this.cache="";
  }
},
```

result

![](https://i.imgur.com/ynJhyWQ.gif)

### PROBLEM 2

![](https://i.imgur.com/nRGhzRb.png)

Getting some readout errors on code, not sure why

![](https://i.imgur.com/AF2XXfO.png)

I get why now

On This

```
while(indexOfX > 0 && numberOfTimesRunned < 5){
  // debugger;
  let number1 = this.storage.splice(indexOfX-1,1);
  let number2 = this.storage.splice(indexOfX+1,1);
```

I am splicing the array, so the index changes on the next splice.
Use slice instead and splice and remove after.

Figured out what's wrong again. My lack of knowledge on SPLICE vs SLICE.

[1,2,3].slice(2,3) // [3]
[1,2,3].splice(2,1) // [3]

resulting demo code
```
let number1 = this.storage.slice(indexOfX-1, indexOfX);
let number2 = this.storage.slice(indexOfX+1, indexOfX+2);
```

results preliminary

![](https://i.imgur.com/T3Nk8Qn.png)

I'm getting more errors.

This has something to do with IndexOf working on a blank array.

IndexOfX it looks like is always staying at a value of 1, hence infinite loop, must have been set to a primitive, not an object.

```javascript
let indexOfX = this.storage.indexOf('x'); // POINTER TO PRIMITIVE VALUE NOT OBJECT
let numberOfTimesRunned = 0;
// infinite loop issues
while(indexOfX > 0 && numberOfTimesRunned < 5){
  // code
}
```

  ```

  ```

![](https://i.imgur.com/vaz75ia.png)


## PROBLEM 3 - Sloppy code hard to read
3/28/18

I see that I need to have a library of definitions, code is getting utterly sloppy, its just as bad as writing eventListeners natively or using PUG / preprocessor and having to extrapolate what I wrote by looking at code elsewhere.

![](https://i.imgur.com/Psu71jp.png)

Stackoverflow is giving poor solutions on searches, going to have to use NPM libraries for ideas (such as is-number) and start writing my own variants of "micro-code" function libraries, similar to sindreahus or https://www.npmjs.com/~jonschlinkert.

## PROBLEM 4 - Calculate method, making string input to something useful

I have this set of values

"99999x999+99/999" in string format. Originally, I had it processed via an array... but displaying it was too much work, strings were easier.

Now I need to go to something like ['99999', 'x', '999', '+', '99', '/', '999']. Can't think of anyway to do this except another sloppy implementation / horribly optimized loop through every value in string, and make the array.
