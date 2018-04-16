[1] https://youtu.be/QzVVjboyb0s - "Shunting Yard Algorithm - Intro and Reverse Polish Notation" 

[2] https://youtu.be/fxnsOiIGPXI → 12 y.o kids algorithm (Best video to understand)

[3] https://www.geeksforgeeks.org/expression-evaluation/

[4] http://faculty.cs.niu.edu/~hutchins/csci241/eval.htm


## Glossary

- Tokens - these are sets of numbers
- Operators - +-%/ etc

## Infix notation [1]

`i = 9 + 42/(7-3)`

Infix notation is basic order of operations on how we calculate things. Look for parantehesis first, ,calculate, do division, then addition

However, its not easy for computers to process. Solution is to use reverse Polish

## Reverse Polish Postfix [1]

Expressions are parsed left to right.

`9 , 24 , 7 , 3, -, /, +`

Push each number on the stack. Then go back and do the operation, and pop it off the stack. When you go backward, the following 
operation order is done

- 7-3 = 4
- 24 / 4 = 6
- 9 + 6 = 15

Another Example [2]

- Infix: 5+2x3
- Postfix: 523x+

## Basic version of the algorithm [1]

- Stack of operations - LIFO
- Queue for the output - FIFO
- Array (or other list) of tokens)

```
While tokens to read:
  Read a token
  If its a number, add to queue
  if its an operator
    while there's an operator on top of stack with greater precedence
      Pop operators from stack into output queue
    Push the current operator onto stack
  If its a left bracket "(" push it onto the stack
  If its a right bracket ")"
    While there's not a left bracket at top of stack
      Pop operators from stack onto output queue
    Pop left bracket from stack but discard it!
While there's operators on the stack, pop them to the queue
```

## Postfixing in More Detail [2]

X and / have precedence of 1.  + and - has precedence of 2.

Example case for using shuntyard algorithm. This is simple example. Infix starting point:

`1+2x3+4`

becomes. Postfix Endpoint:

`123x+4+` 

How does this happen? Steps:

*the notation used here is the first value in the stack/array is on left side.*

| Array       | Stack (LIFO)  |
|---------|----|
| 1       |    |
| 1       | +  |
| 12      | +  |
| 12      | +x |
| 123     | +x |
| 123x+   | +  |
| 123x+4  | +  |
| 123x4+4 |    |

Essentially what happens is, 1 numeric token is added and the an operator. When an operator of higher precedence is found, it goes backward and shoves everything its found thus far. Then it continues on its way again

## What to do with new value? [2]

`123x+4+` we have the postfix. What now?

| Queue | Array |
|-------|-------|
| 1     | 1     |
| 1,2   | 2     |
| 1,2,3 | 3     |
| 1,6   | x     |
| 7     | +     |
| 7,4   | 4     |
| 11    | +     |

The array here is transposed from previous example. The queue is dependent on arrays values. When an array is a number, queue pushes value. When its an operator, the last two numbers are immediately performed. The queue is then updated

### Calculating a postfix expression [4]

None of the above examples [1], [2], or [3] source summarized the pseudocode to calculate the postfix calculation.

[4] covers this. Note the above examples I have used are just for a simple-use-case (only multiply, division, subtraction, addition) and does not consider (%, ^, `(`, or `)`). The above sources all cover these.

To calculate a postfix expression from left to right, this is pseudocode

```
 Start with an empty stack.  We scan P from left to right.

 While (we have not reached the end of P)
    If an operand is found
       push it onto the stack
    End-If
    If an operator is found
       Pop the stack and call the value A
       Pop the stack and call the value B
       Evaluate B op A using the operator just found.
       Push the resulting value onto the stack
    End-If
End-While
Pop the stack (this is the final value)
```

## TL-DR

### infix to postfix - how calculations syntax differs for calculations

Basically... Djisnka's shuntyard algorithm first involves understanding infix to postfix conversion. Its just an easier way to parse math logic. 

`Infix: 5+2x3`
`Postfix: 523x+`

Infix follows order of operations. We multiply the 2x3 then add 5. Its not always left-to-right operation wise

Postfix is stored as a left-to-right operation. When an operator is seen, it takes the two previous values and does calculation, storing the new result. Repeat for subsequential operators. 

The important note here is that later operations **do not know what the previous operators are**. The preceding 2 values of an operator are **always numbers**. This is what makes Postfix so easy for computers to parse

### infix to sorted postfix with Djisnaks Algorithm

Djinska's Algorithm does the sorting from infix to postfix.

Say for instance we had this number

`1+2x3+4`

Djinska's Shuntyard algorithm processes it from infix to postfix as such:

`123x+4+`

How does it do this exactly? It takes the infix number, and segregates them into two memory allocations.

- Array - This is where we store the ordered results
- Stack - This is a placeholder (LIFO)

You push numbers into the array. You push the operators into the stack. When an operator of higher precedence (x) than previous value (+) is found, push everything LIFO to the stack. 

That's pretty much it

## TL-DR 2.0

Djinskas Algorithm converts an infix value to postfix sorted Left-To-Right based on PEMDAS (order of operations)

----------------------------------


