// const a = "Nice"
// console.log(a)

// const b = 55
// console.log(b)

// let a = 22
// let nambo = "deep";

// how to declare datatype in typescript

// let a:string = "name Here";
// let nambo:number = 343;
// let check:boolean


// declaration syntax
// let nambo = <string>"deep"  // right syntax

// let strbo = <number>343  // right syntax

// console.log(nambo,strbo)


//  -----------  Array in Typrscript ------------ 
// type Username = string | number;

// let a:Username = 3434

// type Username = (n: number, m: string) => string;

// const func: Username = (n, m) => {
//     console.log(n, m)
//     return n + m;
// }


// ------------ Array ------------

// const arr = [12,23,44,65,45]
// const arr: number[] = [23, 34, 45, 56, 67, 78, 89, 90] // only number is allow to store in array

// const strr: string[] = ["hii", "me", "ok"]  // only string is allow in array

// --------- Array with Generics -----------

// const arr2:Array<string> = ["hii","me","ok"]

// const arr3:Array<number> = [23,34,45,56,67,78,89,90]

// Similar
// const arrtest: Array<string> = new Array(20)

// store data in two types of data
// const arr5: Array<string | number> = [23,23,"hii",34,true]

// const arr6:Array<string> = ["mahadave","jai","hii","ok,","buy"];
// arr6.forEach((item,index) => {
//     console.log(item,index)
// })


// Tuple -- fix type array
// const arr8:[number,number,number] = [23,34,45,44]
// console.log(arr8)



// ---------- Object in typescript --------------
// type keyword
// type obj = {
//     height: number,
//     weight: number,
//     gender?: boolean
// }


// -------------- interface
// interface obj {
//     height: number,
//     weight: number,
//     gender?: boolean
// }

// type FuncType = (n: number, m: number) => void

// interface newObj extends obj {
//     scoler: boolean,
//     func: FuncType;
// }

// const gigi: newObj = {
//     height: 342,
//     weight: 33,
//     scoler: true,
//     func: (n, m) => {
//         console.log("n*m =", n * m)
//     }
// }

// const kendle: newObj = {
//     height: 342,
//     weight: 33,
//     scoler: true,
//     func: (n, m) => {
//         console.log("n*m =", n * m)
//     }
// }

// kendle.func(10, 20)

// const obg: obj = {
//     height: 342,
//     weight: 33,
//     gender: true
// }

// const obj2: obj = {
//     height: 342,
//     weight: 33
// }


// ----------- function in typescript -----------------

// type Functype = (n: number, m: number) => number

// const func: Functype = (n, m) => {
//     return n * m
// }

// console.log(func(10, 20))


// ---- Optional parameter banana hai tho
// type Fnctype = (n:number,m:number,l?:number) => number;

// const func2:Fnctype = (n,m,l) => {
//     if(typeof l === "undefined"){
//         // return "l is a undefind hai"
//         return n*m
//     }
//     return n*m*l
// }
// console.log(func2(10,20,30))


// ---- default parameter banana hai tho
type Fnctype = (n: number, m: number, l?: number) => number;

const func3: Fnctype = (n, m, l = 10) => {

    return n * m * l
}
// console.log(func3(10,20))



// ------  Rest operator in typescript ------------------
// type FuncType4 = (...m:number[]) => number[]

// const func4:FuncType4 = (...m) => {
//     console.log(m)
//     return m
// }
// func4(10,20,30,40,50)


// --------------  Function with Object ---------------

// basic syntax
const getData = (product: { name: string, stock: number, price: number, photo: string }): void => {

}

// --------------- Interface synta ------------
interface product {
    name: string,
    stock: number,
    price: number,
    photo: string
}
type GetDataType = (product: product) => void

// with tpye keyword
// type GetDataType = (product:{name:string,stock:number,price:number,photo:string}) => void

const getData2: GetDataType = (product) => {
    console.log(product)
}

const productOne: product = {
    name: "macbook",
    stock: 46,
    price: 999,
    photo: "image.url"
}
getData2(productOne)


// -------------- Never type ------------------

// const err = new Error()


// const errorHandler = (): never => {
//     throw new Error()
// }
// errorHandler()

// ---------   auto detect in typescript ------------- 

type themeMode = "light" | "dark" | "auto"
const mode: themeMode = "dark"



// ----------------- classses in typescript ------------------

// ----- first syntac
// class Player {
//     private height = 34;  // default value 
//     weight = 20;          // default value 

//     constructor(height:number,weight:number){
//         this.height = height     
//         this.weight = weight
//     }
//     myHeight = () =>{
//         return this.height  
//     }
// }

// const deepak = new Player(120,33)
// console.log(deepak.myHeight())




// ----- Second  syntac ---------
// optional parameter banana hai tho  --- ?
// super keyword for access parent property --- super 

// class Player {

//     constructor(private height:number,public weight:number,protected power?:number){     // power is optional hoga
//         this.height = height     
//         this.weight = weight    
//     }
// }

// const deepak = new Player(120,33)
// console.log(deepak)

// class Player2 extends Player {
//     special:boolean
//     constructor(height:number,weight:number,power:number,special:boolean){
//         super(height,weight,power)
//         this.special = special
//     }
// }

// const deepak2 = new Player2(122,35,7,true)
// console.log(deepak2.weight)
// // console.log(deepak2.height)



// ------------  third syntax --------------

// class Player {
//     public readonly id:string
//     constructor(private height:number,public weight:number,protected power?:number){     // power is optional hoga
//         this.height = height     
//         this.weight = weight   
//         this.id = String(Math.random() * 100) 
//     }

//     getMyheight = () => this.height
// }

// const deepak = new Player(120,33)
// console.log(deepak)

// class Player2 extends Player {
//     special:boolean
//     constructor(height:number,weight:number,power:number,special:boolean){
//         super(height,weight,power)
//         this.special = special
//     }

//     getMyPower = () => this.power
// }

// const deepak2 = new Player2(122,35,7,true)
// console.log(deepak2.weight)
// console.log("Height -->",deepak2.getMyheight())
// console.log("Height -->",deepak2.getMyPower())
// console.log("ID -->",deepak2.id)
// deepak2.id = "2323"     /// error throw karega kyoke readonly hai



// --------- fourth syntax --------
//  seter and getter function
class Player {
    public readonly id: string
    constructor(private height: number, public weight: number, protected power: number) {     // power is optional hoga
        this.height = height
        this.weight = weight
        this.id = String(Math.random() * 100)
    }

    get getMyheight(): number {
        return this.height
    }

    set changeHeight(height: number) {
        this.height = height
    }

}

const deepak = new Player(120, 33, 7)
console.log(deepak)
console.log("height before chnage -", deepak.getMyheight)
deepak.changeHeight = 200
console.log("height after chnage -", deepak.getMyheight)




// ------- fivth  syntax --------------
//  interface with class

// interface productType {
//     name: string,
//     price: number,
//     stock: number,
//     // id: string,
//     getID: () => string;
//     offer?: boolean
// }

// --- syntax one
// class Product implements productType {

//     public id = String(Math.random() * 1000);

//     constructor(public name: string,public price: number,public stock: number) {
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }
// }


//  syntax two 
// ager new variable banana hai tho 

// interface productType {
//     name: string,
//     price: number,
//     stock: number,
//     getId: () => string;
//     offer?: boolean
// }
// class Product implements productType {
//     // id field fer productType sa remove karna hoge
//     private id:string = String(Math.random() * 1000);

//     constructor(public name: string,public price: number,public stock: number) {
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }

//     getId = () =>  this.id;
// }

// const Product1 = new Product("asus",2000,2)


// ----- sixth class syntax --------
// implement karna more than two interface ko aj class ma


interface productType {
    name: string,
    price: number,
    stock: number,
    offer?: boolean
}

interface productIdType {
    getId: () => string;
}
class Product implements productType, productIdType {
    // id field fer productType sa remove karna hoge
    private id: string = String(Math.random() * 1000);

    constructor(public name: string, public price: number, public stock: number) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    getId = () => this.id;
}
const Product2 = new Product("asus-one", 5000, 2)



// -------- Type Assertion 
// method - 1
const btn = document.getElementById("btn") as HTMLElement

// method - 2
const btn2 = <HTMLElement>document.getElementById("btn")

// method - 3
const btn3 = document.getElementById("btn")!

btn.onclick


//   specific type define karna
// method 4
// const img = document.getElementById("myimg")! /// work nahe karega 

//  specific type define karna
// method 5
const img = document.getElementById("myimg") as HTMLImageElement
img.src


// ------------ example for DOM manuculation --------------
// method 6
// specific query selector ma type assertion define karna nahe hotha hai
// const img2 = document.querySelector("img")!
// img2.src

// const form = document.getElementById("myfomr") as HTMLFormElement

// const myinput = document.querySelector("myform  > input") as HTMLInputElement

// const mybtn = document.querySelector("myform  > button") as HTMLButtonElement


// form.onsubmit = function (e: SubmitEvent) {
//     e.preventDefault();

//     let data = Number(myinput.value);
//     console.log(data);
//     console.log(typeof data);

//     const h2 = document.createElement("h2");
//     h2.textContent = String(data + 20);

//     document.body.append(h2);
// };




// -------------  Index Signature ---------------

// interface Person {
//     [key: string]: string | number
// }

// interface Person {
//     name:string,
//     email:string
// }

// const myObj: Person = {
//     name: "Jai",
//     email: "test@gmail.com"
// }

// const getName = ()=> {
//     return myObj["name"];
// }

// const getEmail = () => {
//     return myObj["email"];
// }

// upper ka both function ko merge kara hai 
// -------  1 -- dynamicaly define karna hai tho
// const getMyData = (key: string) => {
//     // myObj["name"]
//     // myObj["email"]
//     return myObj[key]
// }

// -------- 2 -- ager jo key object ma hai vo he lena hai tho
// const getSpeData = (key : "name" | "email") => {
//     return myObj[key]
// }
// getSpeData("name")


// ----- 3 -- keyof ka throw dynamically define karna 

// interface Person {
//     name : string;
//     email: string
// }

// const myObject:Person = {
//     name:"abhi",
//     email:"abhi@gmail.com"
// }

// // const key = "name"
// // let key:keyof Person = "name"
// let key = "name" 

// myObject[key as keyof Person]

// // ------ 4 -- ager person interface na hoth typeof ka throw 

// myObject[key as keyof typeof myObject]



// --------------  Type Utility ----------------

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<keys,type>
// Pick<Type,keys>
// Omit<Type,keys>
// Exclude<Type,ExcludeType>
// Extract<Type,ExtractType>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>
// ThisParameterType<Type>
// OmitThisParameter<Type>
// ThisType<Type>

// ------------------

// Partial<Type>
// type User = {
//     name: string,
//     email:string
// }

// type User2 = Partial<User>  /// user2 ke dono field optional hogai hai

// Required<Type>
// type User = {
//     name?: string,
//     email:string
// }

// type User3 = Required<User>  /// user3 ke dono field required hogai hai


// Readonly<Type>
// type User = {
//     name: string,
//     email:string
// }

// type User4 = Readonly<User>  /// user4 ke dono field read only hogai hai


// Record<keys,type>
// type user  = {
//       name: string,
//       email:string
// }
// type User2 = Record<"name" | "email" | "gerder",string>

// // Example
// interface UserInfo {
//     age:Number
// }

// type UserName = "john" | "levl" | "elon" | "jack"

// const users:Record<UserName,UserInfo> = {
//     john:{age:20},
//     levl:{age:30},
//     elon:{age:40},
//     jack:{age:50}
// }


// --------- Pick<Type,keys> -------------
// interface OrderInfo {
//     readonly id :string;
//     user:string;
//     city:string;
//     state:string;
//     country:string;
//     status:string;
// }

// type ShippingInfo   = Pick<OrderInfo,"city"|"state"|"country">



//------- Omit<Type,keys> -------------
// interface ShippingInfo {
//     city:string;
//     state:string;
//     country:string;
// }

// type random = Omit<ShippingInfo,"country">

// Exclude<Type,ExcludeType>
// type MyUnion = string | number | boolean
// type random = Exclude<MyUnion,boolean>


// Extract<Type,ExtractType>
// type MyUnion = string | number | boolean
// type random = Extract<MyUnion,boolean>


// ---------->>>> NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined
// type random = NonNullable<MyUnion>


// // ---------->>>> Parameters<Type>
// const myFunc = (a:number,b:number)=>{
//     console.log(a+b)
// }
// type random = Parameters<typeof myFunc>


// ConstructorParameters<Type>
// class SampleClass {
//     constructor(public s:string,public t:string){
//         this.s = s
//         this.t = t
//     }
// }
// type random = ConstructorParameters<typeof SampleClass>


// ReturnType<Type>
// const myFunc = (a:number,b:number):string =>{
//     return String(a+b)
// }
// type random = ReturnType<typeof myFunc>


// InstanceType<Type>
// class SampleClass {
//     constructor(public s:string,public t:string){
//         this.s = s
//         this.t = t
//     }
// }
// type Random = InstanceType<typeof SampleClass>

// //  user random ka throw bana hai tho saraparameter hona chahiya 
// // random / SampleClass ka
// const User:Random = {
//     s:"jai",
//     t:"jai"
// } 


// -------------------  Generics in TS -------------------- 
// Generics

///  typescript ma any ko avoid karna hai 
/// ager any ko use karega tho typescript ka kam he kya
// const func = (n:any):any =>{
//     return n
// }
// const ans =func(20)
// const ans2 =func("20")
// const ans3 =func(true)


// ----------- Generics Syntax -------------------
// const func = <CustomType>(n:CustomType):CustomType =>{
//     return n
// }
// const ans =func(20)
// const ans2 =func("20")
// const ans3 =func(true)


// ----------- code example
// const func = <T>(n:T):T =>{
//     return n
// }
// const ans =func(20)
// const ans2 =func("20")
// const ans3 =func(true)


// --------- Generic With custom datatype --------

// type Person = {
//     name :string,
//     age:number
// }
// const func = <T>(n:T):T =>{
//     return n
// }
// const Person1:Person = {
//     name:"abhi",
//     age:24
// }

// //  one syntax
// // const ans = func(Person1)

// // two syntax
// const ans = func<Person>(Person1)


// ------- Generic ka use array ma
// const arr:number[] = []
// const arr2:Array<number> = []



// -------- Generic ma return type Object ---------
// ------ method - 1
// const func = <T,U>(n:T,o:U) :object=>{
//     return {n,o}
// }
// const ans = func<number,string>(20,'hii')
// ans.   // dot sa ans ka n,o ko assecc nahe kar saktha hai


// // ------ method - 2
// const func = <T,U>(n:T,o:U) :{n:T,o:U}=>{
//     return {n,o}
// }
// const ans = func<number,string>(20,'hii')
// ans.n   // dot sa ans variable ko assecc kar saktha hai

// ------------ method 3 
// const func = <T,U extends T>(n:T,o:U) :{n:T,o:U}=>{
//     return {n,o}
// }
// const ans = func<number,number>(20,23)


///// ------------ method 4
// type Person = {
//     name:string,
//     age:number
// }
// type Person2 = {
//     name:string,
//     age:number,
//     email:string
// }
// const func = <T,U extends T>(n:T,o:U) :{n:T,o:U}=>{
//     return {n,o}
// }
// const user:Person = {
//     name:"jai",
//     age:23
// }
// const user2:Person2 = {
//     name:"jai",
//     age:23,
//     email:"jai@gmail.com"
// }
// const ans = func<Person,Person2>(user,user2)



//////  ------------ Method 5
// type Person = {
//     name:string,
//     age:number
// }

// const users:Person[] = [
//     {
//         name:"jai",
//         age:23
//     },
//     {
//         name:"Nahar",
//         age:23
//     },
//     {
//         name:"hai",
//         age:25
//     },
//     {
//         name:"new",
//         age:25
//     }
// ]

// const filterByPeople = <T,key extends keyof T>(arr:T[],property:key,value:T[key]):T[] =>{

//    return arr.filter( (item:any) => item[property] === value)
// }

// const filterPeopleByName = filterByPeople(users,"name","jai")
// console.log(filterPeopleByName)
// const filterPeopleByAge = filterByPeople(users,"age",25)
// console.log(filterPeopleByAge)