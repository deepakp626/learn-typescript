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
const arr: number[] = [23, 34, 45, 56, 67, 78, 89, 90] // only number is allow to store in array

const strr: string[] = ["hii", "me", "ok"]  // only string is allow in array

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


// interface
interface obj {
    height: number,
    weight: number,
    gender?: boolean
}

type FuncType = (n: number, m: number) => void

interface newObj extends obj {
    scoler: boolean,
    func: FuncType;
}

const gigi: newObj = {
    height: 342,
    weight: 33,
    scoler: true,
    func: (n, m) => {
        console.log("n*m =", n * m)
    }
}

const kendle: newObj = {
    height: 342,
    weight: 33,
    scoler: true,
    func: (n, m) => {
        console.log("n*m =", n * m)
    }
}

kendle.func(10, 20)

const obg: obj = {
    height: 342,
    weight: 33,
    gender: true
}

const obj2: obj = {
    height: 342,
    weight: 33
}


// ----------- function in typescript -----------------

type Functype = (n: number, m: number) => number

const func: Functype = (n, m) => {
    return n * m
}

console.log(func(10, 20))


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

interface Person {
    name : string;
    email: string
}

const myObject:Person = {
    name:"abhi",
    email:"abhi@gmail.com"
}

// const key = "name"
// let key:keyof Person = "name"
let key = "name" 

myObject[key as keyof Person]

// ------ 4 -- ager person interface na hoth typeof ka throw 

myObject[key as keyof typeof myObject]












