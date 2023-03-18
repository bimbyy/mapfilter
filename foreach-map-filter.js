/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){

    let nArray = []; //setting up new array empty

    arr.forEach(function(val){ //take each value in array

        nArray.push(val*2); //times it by 2 and push it 

    });

    return nArray; //return result of new array
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){ 

    let nArray = []; //new blank array

    arr.forEach(function(val){

        if (val % 2 === 0){ //same as above but divide by 2

            nArray.push(val) //push new val

        }

    });

    return nArray; //return new array

}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){

    let nArray = []; //new array that takes input

    arr.forEach(function(val){

        nArray.push(val[0] + val[val.length - 1]); //take value 0 plus value of length minus 1 push to new array

    });

    return nArray; //return new array
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){ //setting up params of function

    arr.forEach(function(val){ //new array input values

        val[key] = value; //set key to value 

    });

    return arr; //return the arr
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){

   let sArr = str.split(""); //set up new array with split in it

   let obj = {}; //set up obj

   const vowels = "aeiou"; //set up vowels to be counted


   sArr.forEach(function(letter){ //Starting function

    let lowerCaseLetter = letter.tolowercase() // making lowercase letter = letter.tolowercase

 //Im getting a error because tolowercase() expects a string but I dont know where its changing not to a string to cause the error


    if (vowelCount.indexOf(lowerCaseLetter)!==-1){ //setting up if for letters that dont match those defined

        if(obj[lowerCaseLetter]){

            obj[lowerCaseLetter]++;//iterate through

        } else {

            obj[lowerCaseLetter] ==1;//else it is equal to 1

        }
    }
   });
   return obj; //return obj results to see vowels counted
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {

    return arr.map(function(val) { //map function

        return val * 2; //using value in map times 2 so same as above but just using map

      });
    }

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){

    return arr.map(function(val, index) { //setting up value and index in map array

        return val * index; //multiplying value and index into map

      });
    }
    

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){

    return arr.map(function(val) { //setting up map function

        return val[key]; //using val and the appropriate key within the map 

      });
    }

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){

    return arr.map(function(val) {

        return val.first + " " + val.last; //value first of array with space inbetween for value last for a full name

      });
    }

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {

    return arr.filter(function(val) {

        return val[key] !== undefined; //if no key show undefined

      });
    }

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {

    return arr.filter(function(val) {

        return val === searchValue; //if value is not equal

      })[0]; //then it will return undefined
    }

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {

    return arr.filter(function(val) {

        return val[key] === searchValue; //find in obj 

      })[0]; //if not return undefined
    }
    

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {

    const vowels = "aeiou"; //listing vowels to be noted later

  return str

    .toLowerCase()

    .split("")

    .filter(function(val) {

      return vowels.indexOf(val) === -1; //identify the vowels and turn to -1

    })

    .join(""); //then join a "" where they would be

}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    return arr

    .filter(function(val) {

      return val % 2 !== 0; //basic formula to find odd numbers

    })

    .map(function(val) {

      return val * 2; //take those values and multiply by 2

    });
  }
