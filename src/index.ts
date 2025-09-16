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

type FuncType = (n:number,m:number) => void

interface newObj extends obj {
    scoler: boolean,
    func: FuncType;
}

const gigi: newObj = {
    height: 342,
    weight: 33,
    scoler: true,
    func: (n,m) => {
        console.log("n*m =",n*m)
    }
}

const kendle: newObj = {
    height: 342,
    weight: 33,
    scoler: true,
    func: (n,m) => {
        console.log("n*m =",n*m)
    }
}

kendle.func(10,20)

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

type Functype = (n:number,m:number) => number

const func:Functype = (n,m) => {
    return n*m
}

console.log(func(10,20))


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
type Fnctype = (n:number,m:number,l?:number) => number;

const func3:Fnctype = (n,m,l=10) => {
   
    return n*m*l
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
const getData = (product:{name:string,stock:number,price:number,photo:string}) : void =>{

}

// --------------- Interface synta ------------
interface product {
    name:string,
    stock:number,
    price:number,
    photo:string
}
type GetDataType = (product:product) => void

// with tpye keyword
// type GetDataType = (product:{name:string,stock:number,price:number,photo:string}) => void

const getData2:GetDataType = (product)  => {
    console.log(product)
}

const productOne:product = {
    name:"macbook",
    stock:46,
    price:999,
    photo:"image.url"
}
getData2(productOne)


// -------------- Never type ------------------

const err = new Error()


const errorHandler = () : never => {
    throw new Error() 
}
errorHandler()

// ---------   auto detect in typescript ------------- 

type themeMode = "light" | "dark" | "auto"
const mode:themeMode = "dark"














