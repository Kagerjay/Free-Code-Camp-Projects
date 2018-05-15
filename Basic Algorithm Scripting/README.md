These are notes regarding what each program is supposed to do (unit test cases)


1. Reverse a String 
```javascript
reverseString("hello") // should return a string.
reverseString("hello") // should become "olleh".
reverseString("Howdy") // should become "ydwoH".
reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".
```

2. Factorialize a Number
```javascript
factorialize(5) // should return a number.
factorialize(5) // should return 120.
factorialize(10) // should return 3628800.
factorialize(20) // should return 2432902008176640000.
factorialize(0) // should return 1.
```

3. Check for Palindromes
```javascript
palindrome("eye") // should return a boolean.
palindrome("eye") // should return true.
palindrome("_eye") // should return true.
palindrome("race car") // should return true.
palindrome("not a palindrome") // should return false.
palindrome("A man, a plan, a canal. Panama") // should return true.
palindrome("never odd or even") // should return true.
palindrome("nope") // should return false.
palindrome("almostomla") // should return false.
palindrome("My age is 0, 0 si ega ym.") // should return true.
palindrome("1 eye for of 1 eye.") // should return false.
palindrome("0_0 (: /-\ :) 0-0") // should return true.
palindrome("five|\_/|four") // should return false.
```

4. Find the Longest Word in a String
```javascript
findLongestWord("The quick brown fox jumped over the lazy dog") // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") // should return 6.
findLongestWord("May the force be with you") // should return 5.
findLongestWord("Google do a barrel roll") // should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") // should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") // should return 19.
```

5. Title Case a Sentence
```javascript
titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return "Here Is My Handle Here Is My Spout".
```

6. Return Largest Numbers in Arrays
```javascript
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // should return [9, 35, 97, 1000000].
```

7. Confirm the Ending
```javascript
confirmEnding("Bastian", "n") // should return true.
confirmEnding("Connor", "n") // should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // should return false.
confirmEnding("He has to give me a new name", "name") // should return true.
confirmEnding("Open sesame", "same") // should return true.
confirmEnding("Open sesame", "pen") // should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") // should return false.
//Do not use the built-in method .endsWith() to solve the challenge.
```

8. Repeat a string repeat a string
```javascript
repeatStringNumTimes("*", 3) // should return "***".
repeatStringNumTimes("abc", 3) // should return "abcabcabc".
repeatStringNumTimes("abc", 4) // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) // should return "abc".
repeatStringNumTimes("*", 8) // should return "********".
repeatStringNumTimes("abc", -2) // should return "".
```

9. Truncate a string
```javascript
truncateString("A-tisket a-tasket A green and yellow basket", 11) // should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) // should return "A...".
truncateString("Absolutely Longer", 2) // should return "Ab...".
```

10. Chunky Monkey
```javascript
chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
```

11. Slasher Flick
```javascript
slasher([1, 2, 3], 2) // should return [3].
slasher([1, 2, 3], 0) // should return [1, 2, 3].
slasher([1, 2, 3], 9) // should return [].
slasher([1, 2, 3], 4) // should return [].
slasher(["burgers", "fries", "shake"], 1) // should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) // should return ["cheese", 4].
```

12. Mutations
```javascript
mutation(["hello", "hey"]) // should return false.
mutation(["hello", "Hello"]) // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
mutation(["Mary", "Army"]) // should return true.
mutation(["Mary", "Aarmy"]) // should return true.
mutation(["Alien", "line"]) // should return true.
mutation(["floor", "for"]) // should return true.
mutation(["hello", "neo"]) // should return false.
mutation(["voodoo", "no"]) // should return false.
```

13. Falsy Bouncer
```javascript
bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].
bouncer(["a", "b", "c"]) // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) // should return [].
bouncer([1, null, NaN, 2, undefined]) // should return [1, 2].
```

14. Seek and Destroy
```javascript
destroyer([1, 2, 3, 1, 2, 3], 2, 3) // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // should return [1].
destroyer([2, 3, 2, 3], 2, 3) // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) // should return ["hamburger"].
```

15. Where do I belong
```javascript
getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2.
getIndexToIns([40, 60], 50) // should return 1.
getIndexToIns([3, 10, 5], 3) // should return 0.
getIndexToIns([5, 3, 20, 3], 5) // should return 2.
getIndexToIns([2, 20, 10], 19) // should return 2.
getIndexToIns([2, 5, 10], 15) // should return 3.
```

16. Caesars Cipher
```javascript
rot13("SERR PBQR PNZC") // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") // should decode to "FREE PIZZA!"
rot13("SERR YBIR?") // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
```
