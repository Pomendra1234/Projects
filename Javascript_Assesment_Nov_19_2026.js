// Name-Pomendra Murkute.
// date-November-19-2026

        // Section A

// Q1.
//   ==                                ===
// 1.equality operator.            Strict equality operator.equality
// 2.It checks value not           It checks value and datatype.
// the data type of value.
// 3.returns boolean.               returns boolean.

// Q2.      null                                undefined
// 1.null is the value of object            undefined is the default 
// when user doesn't make object then       value of variable when user
// it passes null means not referencing     doesn't give any value then
// any object.                              js automatically define this 
//                                          value.
// 2.null write by user in a                In undefined, if you make a 
// variable manually.                       variable and not initialize
//                                          then js automatically initialize 
//                                          with this value.


// Q3.      var          let          const
// 1.var is function    let is block    const is a block
// variable             variable.       variable.
// 2.var is leaked      let is not      const is not      
// outside the Block.   leaked outside   leaked outside
//                      the block.      the block.
// 3.var is also        let is not       const is not
// global variable       global variable.   global variable.


// Q4.          push()          pop()
// 1.   push() is used          pop() is used to 
// to add element in an array.      remove the last element of an array.
// 2.push() method changes the  pop() method changes the original array.
// original array
// 3.push() is a instance method.   pop() is a instance method.


// Q5.      slice()             substring()
// 1.if we pass start index      if we pass start index 
//  greater than end index then     greater than end index then
//result is nothing                 it will interchange the 2 parameter values
//                                  and gives the correct result.

// 2.if we pass negative value then     if we pass negative value then
// still it gives us the result         it changes the function argument to 0
//                                      and then it gives the result. 


//  Section B

// Q1.105,5,1
// Q2.2,4,6,8,10
// Q3.[10,20,30,40]
// Q4.undefined
// Q5.20,10

// Section C
// Q1.
// let a =Number("50");
// let b = Number("100");
// let c = Number("150");
// console.log(a+b+c);

// Q2.
// let i=1;
// while(i<=50){
//     if(i%2===0){
//         console.log(i);
//     }
//     i++;
// }

// Q3.
// let str = "JavaScript";
// let r=str.split("");
// let count=0;
// while(r.pop())(
// count++
// )
// console.log(count);

// Q4.
// let numbers = [10, 20, 30, 40, 50];
// numbers.push(60);
// let rm=numbers.shift();
// console.log(rm);
// console.log(numbers.includes(30,0));
// console.log(numbers.indexOf(40));

// Section D
// Q1
// let reverse=0,input=12345;
// while(input!==0){
//     reverse=reverse*10+input%10;
//     input=input/10-(input%10)/10;
// }
// console.log(reverse);

// Q2.
// let numbers = [10, 25, 30, 45, 50, 25, 60];
// let arr=numbers.filter((x)=>{
//    return x>30;
// });
// console.log(arr);
// let arr2=numbers.map((x)=>{
//    return x*2;
// });
// console.log(arr2);
// let arr3=numbers.reduce((acc,nex)=>{
//    return acc+nex;
// });
// console.log(arr3);

// Q3.
// let str = "bananaaa";
// let str2=str.split("");
// console.log(str2);
// let b=[];
// while(str2.includes('a')){
//    let val= str2.indexOf('a');
//    str2.splice(val,1,'c');
// //    console.log(val);
//    b.push(val);
// }
// console.log(b.at(-2));

// Q4
// let arr = [1, 2, 3, 2, 4, 1, 5];
// for (const element of arr) {
//        let idx= arr.indexOf(element);
//        let idx2=arr.indexOf(element,idx+1);
//        if(idx2!==-1){
//         arr.splice(idx2,1);
//        }
// }
// console.log(arr);

// Q5.
// let employee = {
// name: "Rahul",
// age: 25,
// salary: 45000,
// department: "IT"
// };
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log(Object.entries(employee));
// employee.city='jaipur';
// console.log(Object.hasOwn(employee,'salary'));

// Q6.
// sir first of all my answere is wrong as i think answere is 10,20,10 then i remember
// that you said if you see a hoisting then try to see its scope then i understand that
// function has its own local scope so if x is not defined then answere is 10,10,10.So here
// x is defined in local scope so the answere is undefined,20,10.

// var x = 10;
// function demo() {
// console.log(x);
// var x = 20;
// console.log(x);
// }
// demo();
// console.log(x);

// Section E

// Q1
// let students = [
// { name: "Amit", marks: 85 },
// { name: "Rahul", marks: 35 },
// { name: "Priya", marks: 92 },
// { name: "Rohit", marks: 45 },
// { name: "Neha", marks: 28 }
// ];
// 1.Find students who passed (marks greater than or equal to 40).
// let ans=students.filter((el)=>{
//         return el['marks']>=40;
// });
// console.log(ans);
// 2.Extract only student names.
// let ans2=students.map((el)=>{
//         return el['name'];
// });
// console.log(ans2);
// 3. Sort students by marks in descending order.
// let ans3=students.sort((a,b)=>{
//         return b.marks-a.marks;
// });
// console.log(ans3);

// 4. Find the student with the highest marks.
// let ans4=students.reduce((el,b)=>{
//     if(el.marks>b.marks){
//         return el;
//     }else{
//         return b;
//     }
// });
// console.log(ans4);
// 5. Add a result property containing "Pass" or "Fail".
// let ans5=students.map((el)=>{
//         if(el.marks>=40){
//                 el.property="PASS";
//                 return el;
//         }else{
//                 el.property="FAIL";
//                 return el;
//         }
// });
// console.log(ans5);

// Q2.
let str = "JavaScript Programming";
// 1. Count vowels.
let a=str.split(""),count=0;
let vowel=['a','e','i','o','u'];
for (const element of str) {
        if(vowel.includes(element)){
                count++;
        }
}
console.log(count);
// 2. Count consonants.
let a1=str.split(""),count1=0;
let vowel1=['a','e','i','o','u'];
for (const element of str) {
        if(vowel.includes(element)){
                count++;
        }
}
console.log(str.length-count);
// 3.Reverse the string.
console.log(str.split("").reverse().join(""));

// 4. Find the first occurrence of "a".
let val='a',i=0,idx=null;
while(i<str.length){
        if(val===str[i]){
                idx=i;
                break
        }
        i++;
}
console.log(idx);
// 5. Convert the string into uppercase.
console.log(str.toUpperCase());