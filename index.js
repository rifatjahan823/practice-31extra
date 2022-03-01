// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

const obj = {
    name:'likha',
    age:20,
    company:{
        name:'Shop BD',
        location:'Dhaka Bangladesh'
    },
    worker:['fullTime-100','partTime-55'],
    workDetails:function(){
        console.log("Company Name:"+this.company.name)
    }
}
obj.workDetails()

// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const country = {
    name:'bangledesh',
    details:{
        totalZilla:64,
        divition:7,
        devitionDetails:{
            firstDivision:'Dahaka',
            secondDivision:"chittagong"
         }
    },
    nameDivision:['dhaka','chitagong','mymonshinho']
}
const string = `
  Country Name:${country.name}
  Division Name:${country.details.devitionDetails.firstDivision}
  2nd Devision:${country.nameDivision[1]}

`
console.log(string)

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
const sum = ()=>{
  return 89
}
console.log(sum())

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
const exam32 = value=>value/7;
console.log(exam32 (77))

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const exam33 = (num1,num2)=>{
    return (num1+num2)/2
}
console.log(exam33 (8,10))


// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const exam34 = (num3,num4)=>{
    let add = num3+7 + num4+7;
    return add
}
console.log(exam34 (2,2))

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হব


//es6 use kore array loop a function use
const arr= [5,9,15,17]
 const output3 = arr.map(arrr=>arrr/7)
console.log(output3)

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
//map=============
// map array loop hisebe kaj kore
// const output3 = arr.map(arrr=>arrr/7)
//foraEch==============
// foraEch array loop hisebe kaj kore akhane direct console log usde kora hoy
// arr.foraEch(arrr=>console.log(arrr/7))
//filter==========
//filtar diye condition use kora hoy 
// const output3 = arr.filter(arrr=>arrr>9 || arrr==9)
//find==========
//find diye condition use kora hoy akhane sudhu 1st element dey
// const output3 = arr.filter(arrr=>arrr>9 || arrr==9)


// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const calc = {
    accounter:'likha',
    balance:[500,1000,300,500]
}
const [one,two,tree]=calc.balance
console.log(two)

//প্রাকটিস ৭-১০----practice-29-extra folder a