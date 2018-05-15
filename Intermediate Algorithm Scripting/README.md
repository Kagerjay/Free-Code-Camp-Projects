Intermediate Algorithm Solutions

## [01-sum-all-numbers-in-a-range](01-sum-all-numbers-in-a-range.js)

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.*

The lowest number will not always come first.

```JavaScript
sumAll([1, 4]) // should return a number.
sumAll([1, 4]) // should return 10.
sumAll([4, 1]) // should return 10.
sumAll([5, 10]) // should return 45.
sumAll([10, 5]) // should return 45.
```
## [02-diff-two-arrays](02-diff-two-arrays.js)

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```JavaScript
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) // should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] // should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] // should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] // should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] // should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] // should return [1, "calf", 3, "piglet", 7, "filly"].
```

## [03-roman-numeral-converter](03-roman-numeral-converter.js)

Convert the given number into a roman numeral.

All roman numerals answers // should be provided in upper-case.

```JavaScript
convertToRoman(2) // should return "II".
convertToRoman(3) // should return "III".
convertToRoman(4) // should return "IV".
convertToRoman(5) // should return "V".
convertToRoman(9) // should return "IX".
convertToRoman(12) // should return "XII".
convertToRoman(16) // should return "XVI".
convertToRoman(29) // should return "XXIX".
convertToRoman(44) // should return "XLIV".
convertToRoman(45) // should return "XLV"
convertToRoman(68) // should return "LXVIII"
convertToRoman(83) // should return "LXXXIII"
convertToRoman(97) // should return "XCVII"
convertToRoman(99) // should return "XCIX"
convertToRoman(500) // should return "D"
convertToRoman(501) // should return "DI"
convertToRoman(649) // should return "DCXLIX"
convertToRoman(798) // should return "DCCXCVIII"
convertToRoman(891) // should return "DCCCXCI"
convertToRoman(1000) // should return "M"
convertToRoman(1004) // should return "MIV"
convertToRoman(1006) // should return "MVI"
convertToRoman(1023) // should return "MXXIII"
convertToRoman(2014) // should return "MMXIV"
convertToRoman(3999) // should return "MMMCMXCIX"
```

## [04-wherefore-art-thou](04-wherefore-art-thou.js)

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.*

```JavaScript
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) // should return [{ "a": 1, "b": 2, "c": 2 }]
```

## [05-search-and-replace](05-search-and-replace.js)

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it // should be replaced as "Dog"

```JavaScript
myReplace("Let us go to the store", "store", "mall") // should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") // should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") // should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") // should return "Let us get back to more Algorithms".
```

## [06-pig-latin](06-pig-latin.js)

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

```JavaScript
translatePigLatin("california") // should return "aliforniacay".
translatePigLatin("paragraphs") // should return "aragraphspay".
translatePigLatin("glove") // should return "oveglay".
translatePigLatin("algorithm") // should return "algorithmway".
translatePigLatin("eight") // should return "eightway".
```

## [07-dna-pairing](07-dna-pairing.js)

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

**Base pairs** are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```JavaScript
pairElement("ATCGA") // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
```

## [08-missing-letters](08-missing-letters.js)

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

```JavaScript
fearNotLetter("abce") // should return "d".
fearNotLetter("abcdefghjklmno") // should return "i".
fearNotLetter("bcd") // should return undefined.
fearNotLetter("yz") // should return undefined.
```

## [09-boowho](09-boowho.js)

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

```JavaScript
booWho(true) // should return true.
booWho(false) // should return true.
booWho([1, 2, 3]) // should return false.
booWho([].slice) // should return false.
booWho({ "a": 1 }) // should return false.
booWho(1) // should return false.
booWho(NaN) // should return false.
booWho("a") // should return false.
booWho("true") // should return false.
booWho("false") // should return false.
```

## [10-sorted-union](10-sorted-union.js)

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays // should be included in their original order, but with no duplicates in the final array.

The unique numbers // should be sorted by their original order, but the final array // should not be sorted in numerical order.

```JavaScript
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) // should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // should return [1, 2, 3, 5, 4, 6, 7, 8].
```

## [11-convert-html-entities](11-convert-html-entities.js)

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```JavaScript
convertHTML("Dolce & Gabbana") // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") // should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") // should return Shindler&​apos;s List.
convertHTML("<>") // should return &​lt;&​gt;.
convertHTML("abc") // should return abc.
```

## [12-spinal-tap-case](12-spinal-tap-case.js)

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```JavaScript
spinalCase("This Is Spinal Tap") // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") // should return "all-the-small-things".
```

## [13-sum-all-odd-fibonacci-numbers](13-sum-all-odd-fibonacci-numbers.js)

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` // should return `10` because all odd Fibonacci numbers less than `10` are 1, 1, 3, and 5.

```JavaScript
sumFibs(1) // should return a number.
sumFibs(1000) // should return 1785.
sumFibs(4000000) // should return 4613732.
sumFibs(4) // should return 5.
sumFibs(75024) // should return 60696.
sumFibs(75025) // should return 135721.
```

## [14-sum-all-primes](14-sum-all-primes.js)

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

```JavaScript
sumPrimes(10) // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977) // should return 73156.
```

## [15-smallest-common-multiple](15-smallest-common-multiple.js)

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

```JavaScript
smallestCommons([1, 5]) // should return a number.
smallestCommons([1, 5]) // should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.
```

## [16-finders-keepers](16-finders-keepers.js)

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

```JavaScript
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) // should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) // should return undefined.
```

## [17-drop-it](17-drop-it.js)

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns `true`.

The second argument, `func`, is a function you'll use to test the first elements of the array to decide if you // should drop it or not.

Return the rest of the array, otherwise return an empty array

```JavaScript
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) // should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // should return [3, 9, 2].
```

## [18-steamroller](18-steamroller.js)

Flatten a nested array. You must account for varying levels of nesting.

```JavaScript
steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
```

## [19-binary-agents](19-binary-agents.js)

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

```JavaScript
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // should return "I love FreeCodeCamp!"
```


## [20-everything-be-true](20-everything-be-true.js)

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

```JavaScript
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") // should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") // should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") // should return true
truthCheck([{"single": "yes"}], "single") // should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") // should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") // should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") // should return false
```

## [21-arguments-optional](21-arguments-optional.js)

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

```Javascript
addTogether(2, 3) // should return 5.
addTogether(2)(3) // should return 5.
addTogether("http://bit.ly/IqT6zt") // should return undefined.
addTogether(2, "3") // should return undefined.
addTogether(2)([3]) // should return undefined.
```
