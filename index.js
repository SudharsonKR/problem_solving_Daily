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
    console.log(newArr)
}
duplicateElem([1, 2, 5, 3, 4,5, 6, 6])

// Easy Method
function duplicateEle(val){
    console.log("Easy Method:",[...new Set(val)])
}
duplicateEle([1, 2, 5, 3, 4,5, 6, 6])




