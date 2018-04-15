https://youtu.be/QzVVjboyb0s

## Glossary

- Tokens - these are sets of numbers
- Operators - +-%/ etc

## Infix notation

`i = 9 + 42/(7-3)`

Infix notation is basic order of operations on how we calculate things. Look for parantehesis first, ,calculate, do division, then addition

However, its not easy for computers to process. Solution is to use reverse Polish

## Reverse Polish

Expressions are parsed left to right.

`9 , 24 , 7 , 3, -, /, +`

Push each number on the stack. Then go back and do the operation, and pop it off the stack. When you go backward, the following 
operation order is done

- 7-3 = 4
- 24 / 4 = 6
- 9 + 6 = 15

## Basic version of the algorithm

- Stack of operations
- Queue for the output
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

## Breaking it down

