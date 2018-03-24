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

### Lesson 1

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
