These are notes regarding what each program is supposed to do (unit test cases)


1. [Reverse a String](01-reverse-a-string.js)

*Reverse the provided string.
You may need to turn the string into an array before you can reverse it.*
```javascript
reverseString("hello") // should return a string.
reverseString("hello") // should become "olleh".
reverseString("Howdy") // should become "ydwoH".
reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".
```

2. [Factorialize a Number](02-factorialize-a-number.js)

*Return the factorial of the provided integer.*
```javascript
factorialize(5) // should return a number.
factorialize(5) // should return 120.
factorialize(10) // should return 3628800.
factorialize(20) // should return 2432902008176640000.
factorialize(0) // should return 1.
```

3. [Check for Palindromes](03-check-for-palindromes.js)

*Return true if the given string is a palindrome. Otherwise, return false.*
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

4. [Find the Longest Word in a String](04-find-the-longest-word-in-a-string.js)

*Return the length of the longest word in the provided sentence.
Your response should be a number.*
```javascript
findLongestWord("The quick brown fox jumped over the lazy dog") // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") // should return 6.
findLongestWord("May the force be with you") // should return 5.
findLongestWord("Google do a barrel roll") // should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") // should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") // should return 19.
```

5. [Title Case a Sentence](05-title-case-a-sentence.js)

*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
you should also capitalize connecting words like "the" and "of".*
```javascript
titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return "Here Is My Handle Here Is My Spout".
```

6. [Return Largest Numbers in Arrays](06-return-largest-number-in-arrays.js)

*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.*
```javascript
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // should return [9, 35, 97, 1000000].
```

7. [Confirm the Ending](07-confirm-the-ending.js)

*Check if a string (first argument, str) ends with the given target string (second argument, target).*
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

8. [Repeat a string repeat a string](08-repeat-a-string-repeat-a-string.js)

*Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.*
```javascript
repeatStringNumTimes("*", 3) // should return "***".
repeatStringNumTimes("abc", 3) // should return "abcabcabc".
repeatStringNumTimes("abc", 4) // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) // should return "abc".
repeatStringNumTimes("*", 8) // should return "********".
repeatStringNumTimes("abc", -2) // should return "".
```

9. [Truncate a string](09-truncate-a-string.js)

*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*
```javascript
truncateString("A-tisket a-tasket A green and yellow basket", 11) // should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) // should return "A...".
truncateString("Absolutely Longer", 2) // should return "Ab...".
```

10. [Chunky Monkey](10-chunky-monkey.js)

*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*
```javascript
chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
```

11. [Slasher Flick](11-slasher-flick.js)

*Return the remaining elements of an array after chopping off n elements from the head.*
*The head means the beginning of the array, or the zeroth index.*
```javascript
slasher([1, 2, 3], 2) // should return [3].
slasher([1, 2, 3], 0) // should return [1, 2, 3].
slasher([1, 2, 3], 9) // should return [].
slasher([1, 2, 3], 4) // should return [].
slasher(["burgers", "fries", "shake"], 1) // should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) // should return ["cheese", 4].
```

12. [Mutations](12-mutations.js)

*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien"*
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

13. [Falsy Bouncer](13-falsy-bouncer.js)

*Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*
```javascript
bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].
bouncer(["a", "b", "c"]) // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) // should return [].
bouncer([1, null, NaN, 2, undefined]) // should return [1, 2].
```

14. [Seek and Destroy](14-seek-and-destroy.js)

*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*
```javascript
destroyer([1, 2, 3, 1, 2, 3], 2, 3) // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // should return [1].
destroyer([2, 3, 2, 3], 2, 3) // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) // should return ["hamburger"].
```

15. [Where do I belong](15-where-do-i-belong.js)

*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*
```javascript
getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2.
getIndexToIns([40, 60], 50) // should return 1.
getIndexToIns([3, 10, 5], 3) // should return 0.
getIndexToIns([5, 3, 20, 3], 5) // should return 2.
getIndexToIns([2, 20, 10], 19) // should return 2.
getIndexToIns([2, 5, 10], 15) // should return 3.
```

16. [Caesars Cipher](16-caesars-cipher.js)

*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a `shift cipher`. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*
```javascript
rot13("SERR PBQR PNZC") // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") // should decode to "FREE PIZZA!"
rot13("SERR YBIR?") // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
```
