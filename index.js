// 1. function return the reverse of strings

//Easy method
function reverseStr(str){
let rv = str.split("").reverse().join("");
console.log(rv)
}
reverseStr("happy")

//for loop method
function reverseStrlp(str){
    let rverseStr=''
    
    for(var i=str.length-1; i>=0;i--){
        rverseStr = rverseStr + str[i]
    }
    console.log(rverseStr)
}

reverseStrlp("happy birth")

// 2. function return the longest word in sentence
function longestWord(str){
    let words=str.split(" ")
    let longestword='';

    for(var i=0; i<words.length; i++){    
    if(longestword.length<words[i].length){
        longestword = words[i]
    }    
    }
    console.log(longestword)
}

longestWord("i am sudharson from kovai")



const arr = [11, 55, 66, 22]

let res = Math.max(...arr)
console.log(res)

// 3. function check whether given strings are palindrome or not
function palindromelp(str){
    let val = str.split("")
    let newArr = ""
    for(var i=0; i<val.length; i++){
        newArr=newArr+ val[val.length-i-1]
    }
    if(newArr === str){
        console.log("Given string "+str+" is Palindrom")
    }else{
        console.log("Given string ("+str+") is not Palindrom")
    }
}
palindromelp("malayyalam")


// Easy method
function palindrome(str){
    let val = str.split("").reverse().join("")
    if(val === str){
        console.log("Given string "+str+" is Palindrom")
    }else{
        console.log("Given string ("+str+") is not Palindrom")
    }
}
palindrome("malayalam")

// 4. remove duplicate elements from array
function duplicateElem(val){
   let newArr=[]
    for(var i=0; i<val.length; i++){
        if(newArr.indexOf(val[i])===-1){
            
            newArr.push(val[i]);
        }
    }
    console.log("check", newArr)
}
duplicateElem([1, 2, 5, 3, 4,5, 6, 6])

// Easy Method
function duplicateEle(val){
    console.log("Easy Method:",[...new Set(val)])
}
duplicateEle([1, 2, 5, 3, 4,5, 6, 6])

//5. Anagram method
//Anagram is a word formed by rearranging the letters of another word.

function anagram(a, b){
    if(a.split("").sort().join("") === a.split("").sort().join("")){
        console.log("Given words are anagram", "1st Word:", a, "- 2nd Word:", b)
    }else{
        console.log("Given words are not anagram", "1st Word:", a, "- 2nd Word:", b)
    }
}
anagram("sent", "nets")


//6. find number of vowels
function countVowels(str){
    const vowels= ["a", "e", "i", "o", "u"]
    let count = 0

    for(let char of str.toLowerCase()){

        if(vowels.includes(char)){
            count++
        }
    }
 console.log(count)
}
countVowels("Am Sudharson")

//7. largest number of array

function largestValue(arr){
    var large = arr[0]
    for(var i=1; i<arr.length; i++){
        if(arr[i]>large){
            large = arr[i]
        }

    }
    console.log("Largest Value is:", large)
}

largestValue([2, 6, -55, 9, 8, 11])

//8. Given number Prime or not
//A prime is only divisbile by 1 and itself
function isPrime(n){
 let count = 0

 //Numbers less than 2 are not prime
    for(i=2; i<=n; i++){
        if(n%i === 0){
            count++
        }
    }
    if(count>2 || n === 1){
        console.log(`Method 1: Given number ${n} is not prime number`)
    }else{
        console.log(`Method 1: Given number ${n} is prime number`)
    }
}
isPrime(2)

//another method
function isPrimeOthermtd(n){
//Numbers less than 2 are not 
if(n<2)
return `Method 2: Given number ${n} is not prime number`
    for(var i=2; i<n/2; i++){
        if(n%i === 0 ){
            return `Method 2: Given number ${n} is not prime number`
        }
    }
    return `Method 2: Given number ${n} is prime number`
}
console.log(isPrimeOthermtd(1))

//9. calculate the factorial number
function factorial(n){
    let val=1;
    for(var i=1; i<=n;i++){
        val = i*val
    }
    return val
}
console.log(factorial(0))

//10. remove all white space characters from a string
function removeWhSpc(str){
    return str.split(" ").join("")
}
console.log(removeWhSpc("i am    ram"))

//another method
function removeWhSpcmtd(str){
    return `Another method: ${str.replace(/\s/g, "")}`
}
console.log(removeWhSpcmtd("i am    ram"))