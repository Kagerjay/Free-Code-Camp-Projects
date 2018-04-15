[1] https://youtu.be/QzVVjboyb0s

[2] https://youtu.be/fxnsOiIGPXI → 12 y.o kids algorithm

## Glossary

- Tokens - these are sets of numbers
- Operators - +-%/ etc

## Infix notation [1]

`i = 9 + 42/(7-3)`

Infix notation is basic order of operations on how we calculate things. Look for parantehesis first, ,calculate, do division, then addition

However, its not easy for computers to process. Solution is to use reverse Polish

## Reverse Polish [1]

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

Example case for using shuntyard algorithm. Infix starting point:

`1+2x3+4`

becomes. Postfix Endpoint:

`123x+4+` 

How does this happen? Steps:

| 1       |    |
|---------|----|
| 1       | +  |
| 12      | +  |
| 12      | +x |
| 123     | +x |
| 123x+   | +  |
| 123x+4  | +  |
| 123x4+4 |    |
