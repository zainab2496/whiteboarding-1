function logBetween(lowNum, highNum) {
    let array = [];
    
    let high = Math.max(highNum);
    let low = Math.min(lowNum);

    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
/*test1 - passed
console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]*/

function logBetweenStepper(min, max, step) {
    let array = [];

    let high = Math.max(max);
    let low = Math.min(min);

    for (let i = low; i <= high; i += step) {
        array.push(i);
    }
    return array;
}
/*test2 - passed
console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]*/

function printReverse(min, max) {
    let array = [];

    let high = Math.max(max);
    let low = Math.min(min);

    for (let i = high; i > low; i--) {
        array.push(i);
    }
    return array;
}
/*test3 - passed
console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]*/

function fizzBuzz(max) {
    let array = [];
    for (let i = 1; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            array.push(i);
        }
    }
    return array;
}
/*test4 - passed
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
console.log(fizzBuzz(10)); // => [3, 5, 9]*/

function isPrime(number) {
    if (number <= 1) {
        return false;
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    } 
    return true;
}
/*test5 - passed
console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true*/

function maxValue(array) {
    if (array.length === 0) {
        return null;
    } else {
    return (Math.max(...array));
    }
}
/*test6 - passed
console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43*/

function myIndexOf(array, target) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            index = i;
        }
    }
    return index;
}
/*test7 - passed
console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1*/

function factorArray(array, number) {
    let arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
/*test8 - passed
console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2,4,5]
console.log(factorArray([2, 3, 4, 5, 6], 35));// => [5]
console.log(factorArray([10, 15, 20, 25], 5)); // => []*/

function oddRange(end) {
    let array = [];
    for (let i = 1; i <= end; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}
/*test9 - passed
console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]*/

function reverseHyphenString(string) {
    let splitStr = string.split('-');
    let reverseStr = splitStr.reverse();
    return reverseStr.join('-');
}
/*test10 - passed
console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"*/

function intersect(arr1, arr2) {
    let filteredArr = arr1.filter(value => arr2.includes(value));
    return filteredArr;
}
/*test11 - passed
console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []*/

function mirrorArray(array) {
    let x = [...array];
    let result = x.concat(array.reverse());
    return result;
}
/*test12 - passed
console.log(mirrorArray([1, 2, 3]));
// => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));
// => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]*/

function abbreviate(sentence) {
    let words = sentence.split(' ');
    let newSentence = [];

    for (let i = 0; i < words.length; i++) {
        let el = words[i];
        if (el.length < 4) {
            newSentence.push(el);
        } else if (el.length > 4) {
            let newEl = el.replace(/[aeiou]/gi, '');
            newSentence.push(newEl);
        }
    }
    return newSentence.join(' ');
}
/*test 13 - passed
console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'*/

function adults(people) {
    return people.filter(c => c.age >= 18).map(c => c.name);
}
/*test14 - passed
const ppl = [ //name of object
    { name: 'John', age: 20 }, //key:value
    { name: 'Jim', age: 13 },
    { name: 'Jane', age: 18 },
    { name: 'Bob', age: 7 }
];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]*/

function countScores(people) {
    let objects = {};

    people.forEach(function(ele) {
        let valOfKeys = Object.values(ele)[1];
        for (let key in ele) {
            let {name} = ele;

            if(objects[name] !== undefined) {
                objects[name].push(valOfKeys);
                break;
            } else {
                objects[name] = [];
            }
        }
    });

    getSum(objects);
    return objects;
}

function getSum(obj) {
    for (let key in obj) {
        let sum = obj[key].reduce(function(acc, num) {
            return acc + num;
        });
        obj[key] = sum;
    }
};

/*test15 - passed
const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score: 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
];
console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
];

console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }*/

function firstNPrimes(n) {
    let array = [];
    let X = 0;
    let i = 2;
    let flag;
    while (X < n) {
        flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            array.push(i);
            X++;
        }
        i++;
    }
    return array;
}
/*test16 - passed
console.log(firstNPrimes(0));  // => []
console.log(firstNPrimes(1));  // => [2]
console.log(firstNPrimes(4));  // => [2, 3, 5, 7]*/

function peakFinder(arr) {
        let positions = []
        let numbers = []
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] > arr[i - 1]) {
                if (arr[i] > arr[i + 1]) {
                    positions.push(i)
                    numbers.push(arr[i])
                } else if (arr[i] === arr[i + 1]) {
                    let temp = i
                    while (arr[i] === arr[temp]) i++
                    if (arr[temp] > arr[i]) {
                        positions.push(temp)
                        numbers.push(arr[temp])
                    }
                }
            }
        }
        return { numbers, positions };
};
/*test 17 - semi-passed
console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]
console.log(peakFinder([1, 3, 3, 5, 0])); // => [3]*/

function zipArray(arr1, arr2) {
    let pairs = arr1.map(function(el, index) {
        return [el, arr2[index]];
    });
    return pairs;
}
/*test18 - passed
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]*/

function twoDimensionalTotal(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i].reduce(function(acc, currentVal) {
            return acc + currentVal
        }, 0);
    }
    return sum;
}
/*test19 - passed
const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
];
console.log(twoDimensionalTotal(arr1));  // => 40

const arr2 = [
    [2],
    [1, 9],
    [1, 1, 1]
]
console.log(twoDimensionalTotal(arr2));  // => 15*/

function countInnerElement(arr) {
    let elementCount = {};
    for (let subArray of arr) {
        for (let el of subArray) {
            elementCount[el] = (elementCount[el] || 0) + 1;
        }
    }
    return elementCount;
}
/*test20 - passed
const arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
]
console.log(countInnerElement(arr1));  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
    ['a', 'b', 'c', 'd'],
    ['a', 'b'],
    ['a', 'c', 'd', 'a']
]
console.log(countInnerElement(arr2));  // => {a: 4, b: 2, c: 2, d: 2}*/

function twoDiff(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let diff = Math.abs(array[i] - array[j]);
            if (diff === 2) {
                result.push([i, j]);
            }
        }
    }
    return result;
}
/*test21 - passed
console.log(twoDiff([2, 3, 4, 6, 1, 7]));  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]));  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]));  // => []*/

function arrayDiff(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element));
}
/*test22 - passed
const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
console.log(arrayDiff(array1, array2));  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
console.log(arrayDiff(array3, array4));  // => ['a', 'ab', 'c', 'c']*/

function valueCounter(obj, val) {
    return Object.values(obj).filter(value => value === val).length;
}
/*test23 - passed
const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
console.log(valueCounter(obj1, 'Anne'));  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
console.log(valueCounter(obj2, 88));  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
console.log(valueCounter(pairs, 'Roman'));  // => 2*/

function elementCount(array) {
    let count = {};
    for (let el of array) {
        count[el] = (count[el] || 0) + 1;
    }
    return count;
}
/*test24 - passed
console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }*/

//function for finding if a number is prime
function isPrimeNum(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % 1 === 0) {
            return false;
        }
    }
    return true;
}
function nextTwoPrimes(num) {
    let result = [];
    let currentNum = num + 1;
    while (result.length < 2) {
        if (isPrimeNum(currentNum)) {
            result.push(currentNum);
        }
        currentNum++;
    }
    return result;
}
/*test25
console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
console.log(nextTwoPrimes(7));  // => [ 11, 13 ]*/

function pairProduct(arr, num) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] * arr[j] === num) {
                result.push([i, j]);
            }
            j++;
        }
        i++;
    }
    return result;
}
/*test26 - passed
console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]*/

function twoDimensionalSize(array) {
    let totalElements = 0;
    for (let subArray of array) {
        totalElements += subArray.length;
    }
    return totalElements;
}
/*test27 - passed
const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
console.log(twoDimensionalSize(arr1));  // => 9

const arr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
];
console.log(twoDimensionalSize(arr2));  // => 5*/

function longWordCount(string) {
    let words = string.split(' ');
    let count = 0;
    for(let i = 0; i < words.length; i++) {
      if (words[i].length > 7) {
        count++;
      }
    }
    return count;
}
/*test28 - passed
console.log(longWordCount(""));  // => 0
console.log(longWordCount("short words only"));  // => 0
console.log(longWordCount("one reallylong word"));  // => 1
console.log(longWordCount("two reallylong words inthisstring"));  // => 2
console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
console.log(longWordCount("seventy schfifty five"));  // => 1*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
/*test29 - passed
console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(10));  // => 3628800*/

function lcm(num1, num2) {
    let max = Math.max(num1, num2);
    let multiple = max;

    while (true) {
        if(multiple % num1 === 0 && multiple % num2 === 0) {
            return multiple;
        }
        multiple += max;
    }
}
/*test30 - passed
console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312*/

function hipsterfyWord(word) {
    const vowels = "aeiouAEIOU";
    let lastVowelIndex = -1;
    for (let i = word.length - 1; i >=0; i--) {
        if (vowels.includes(word[i])) {
           lastVowelIndex = i;
           break; 
        }
    }
    if (lastVowelIndex !== -1) {
        return word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
    } else {
        return word;
    }
}
/*test31 - passed
console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic')); // => 'tonc'
console.log(hipsterfyWord('PANTHER')); // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')); // => 'BACKWRDS'*/

function objectToString(count) {
    let result = '';
    for (let char in count) {
        result += char.repeat(count[char]);
    }
    return result;
}
/*test32 - passed
console.log(objectToString({ a: 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot'*/

function shortestWord(sentence) {
    let words = sentence.split(' ');
    let shortest = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}
/*test33 - passed
console.log(shortestWord('app academy is cool')); // => 'is'
console.log(shortestWord('programming bootcamp')); // => 'bootcamp'*/

function greatestCommonFactor(num1, num2) {
    let smallerNum = Math.min(num1, num2);
    for (let i = smallerNum; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
    return 1;
}
/*test34 - passed
console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1*/

function isPassing(assessments) {
    if (assessments.length === 0) {
        return false;
    }
    let totalScore = assessments.reduce((sum, assessment) => sum + assessment.score, 0);
    let averageScore = totalScore / assessments.length;
    return averageScore >= 70;
}
/*test35 - passed
const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
];
console.log(isPassing(assessments1)); // => true
const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
];
console.log(isPassing(assessments2)); // => false*/

function valueConcat(array, obj) {
    return array.map(element => (obj[element] !== undefined) ? element + obj[element] : element);
}
/*test36 - passed
const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr, obj)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ]*/

function threeInARow(arr) {
    for (let i = 0; i <= arr.length - 3; i++)  {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            return true;
        }
    }
    return false;
}
/*test37 - passed
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;*/

function variableNameify(words) {
    if (words.length === 0) {
        return '';
    }
    let variableName = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        variableName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return variableName;
}
/*test38 - passed
console.log(variableNameify(['is', 'prime'])); // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])); // => 'maxValue'*/

function threeIncreasing(arr) {
    for (let i = 0; i < arr.length - 3; i++) {
        if(arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
            return true;
        }
    }
    return false;
}
/*test39 - passed
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false*/

function reverse2D(array) {
    let flatArray = array.flat();
    let reverseArray = flatArray.reverse();
    return reverseArray.join('');
}
/*test40 - passed
const arr1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
];
console.log(reverse2D(arr1)); // => 'ihgfedcba'
const arr2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
];
console.log(reverse2D(arr2)); // => 'PatrickOscarMikeMattJulian'*/

function reverb(word) {
    const vowels = 'aeiouAEIOU';
    let lastVowel = -1;
    for(let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            lastVowel = i;
            break;
        }
    }
    if (lastVowel !== -1) {
        let prefix = word.slice(0, lastVowel + 1);
        let suffix = word.slice(lastVowel + 1).repeat(2);
        return prefix + suffix;
    } else {
        return word;
    }
}
/*test41 - passed
console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'*/

function countRepeats(string) {
    let charCount = {};
    let repeatCount = 0;
    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2) {
            repeatCount++;
        }
    }
    return repeatCount;
}
/*test42 - passed
console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4*/

function pairsToString(arr) {
    return arr.map(pair => pair[0].repeat(pair[1])).join('');
}
/*test43 - passed
const array1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
];
console.log(pairsToString(array1));  // => 'aaabcc'
const array2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
];
console.log(pairsToString(array2));  // => 'food!'*/

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}
/*test44 - passed
console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3*/

function signFlipCount(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if((nums[i] > 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] > 0)) {
            count++;
        }
    }
    return count;
}
/*test45 - passed
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3*/

function powerSequence(base, length) {
    let result = [base];
    for (let i = 1; i < length; i++) {
        result.push(result[i - 1] * base);
    }
    return result;
}
/*test46 - passed
console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]*/

function collapseString(str) {
    let collapseStr = ' ';
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        while (str[i + 1] === currentChar) {
            i++;
            continue;
        }
        collapseStr += currentChar;
    }
    return collapseStr;
}
/*test47 - passed
console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'*/

function oddWordsOut(sentence) {
    let words = sentence.split(' ');
    let filteredWords = words.filter(word => word.length % 2 === 0);
    return filteredWords.join(' ');
}
/*test48 - passed
console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'*/

function mindPsAndQs(str) {
    let currentStreak = 0;
    let longestStreak = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'P' || str[i] === 'Q') {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }
    return longestStreak;
}
/*test49 - passed
console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5*/

function splitHalfArray(array) {
    let middleIndex = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, middleIndex);
    let secondHalf = array.slice(middleIndex + (array.length % 2));
    
    return [firstHalf, secondHalf];
}
/*test50 - passed
console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]*/

function threeUniqueVowels(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    
    const uniqueVowels = new Set();
    for (let char of string.toLowerCase()) {
        if (VOWELS.includes(char)) {
            uniqueVowels.add(char);
        }
    }
    return uniqueVowels.size >= 3;
}
/*test51 - passed
console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false*/

function vowelShift(sentence) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    return sentence.replace(/[aeiou]/g, vowel => {
        let currentIndex = VOWELS.indexOf(vowel.toLowerCase());
        let nextIndex = (currentIndex + 1) % VOWELS.length;
        let nextVowel = VOWELS[nextIndex];
        return vowel === vowel.toLowerCase() ? nextVowel : nextVowel.toUpperCase();
    });
}
/*test52 - passed
console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'*/

function hasSymmetry(array) {
    let reversedArray = array.slice().reverse();
    return JSON.stringify(array) === JSON.stringify(reversedArray);
}
/*test53 - passed
console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false*/

function evenSumArray(array) {
    return array.map(num => {
        let sum = 0;
        for(let i = 0; i <= num; i+= 2) {
            sum += i;
        }
        return sum;
    });
}
/*test54 - passed
console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]*/

function numsToWords(numString) {
    const digitWords = {
        '0' : 'Zero',
        '1' : 'One',
        '2' : 'Two',
        '3' : 'Three',
        '4' : 'Four',
        '5' : 'Five',
        '6' : 'Six',
        '7' : 'Seven',
        '8' : 'Eight',
        '9' : 'Nine'
    };

    return numString.split('').map(digit => digitWords[digit]).join('');
}
/*test55 - passed
console.log(numsToWords('42')); // => 'FourTwo'
console.log(numsToWords('123')); // => 'OneTwoThree'
console.log(numsToWords('159598')); // => 'OneFiveNineFiveNineEight'*/

function moreDotLessDash(str) {
    let dotCount = (str.match(/\./g) || []).length;
    let dashCount = (str.match(/-/g) || []).length;

    return dotCount > dashCount;
}
/*test56 - passed
console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false*/


