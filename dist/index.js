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
const arr = [23, 34, 45, 56, 67, 78, 89, 90]; // only number is allow to store in array
const strr = ["hii", "me", "ok"]; // only string is allow in array
const gigi = {
    height: 342,
    weight: 33,
    scoler: true,
    func: (n, m) => {
        console.log("n*m =", n * m);
    }
};
const kendle = {
    height: 342,
    weight: 33,
    scoler: true,
    func: (n, m) => {
        console.log("n*m =", n * m);
    }
};
kendle.func(10, 20);
const obg = {
    height: 342,
    weight: 33,
    gender: true
};
const obj2 = {
    height: 342,
    weight: 33
};
const func = (n, m) => {
    return n * m;
};
console.log(func(10, 20));
const func3 = (n, m, l = 10) => {
    return n * m * l;
};
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
const getData = (product) => {
};
// with tpye keyword
// type GetDataType = (product:{name:string,stock:number,price:number,photo:string}) => void
const getData2 = (product) => {
    console.log(product);
};
const productOne = {
    name: "macbook",
    stock: 46,
    price: 999,
    photo: "image.url"
};
getData2(productOne);
// -------------- Never type ------------------
const err = new Error();
const errorHandler = () => {
    throw new Error();
};
errorHandler();
const mode = "dark";
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
    height;
    weight;
    power;
    id;
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.height = height;
        this.weight = weight;
        this.id = String(Math.random() * 100);
    }
    get getMyheight() {
        return this.height;
    }
    set changeHeight(height) {
        this.height = height;
    }
}
const deepak = new Player(120, 33, 7);
console.log(deepak);
console.log("height before chnage -", deepak.getMyheight);
deepak.changeHeight = 200;
console.log("height after chnage -", deepak.getMyheight);
class Product {
    name;
    price;
    stock;
    // id field fer productType sa remove karna hoge
    id = String(Math.random() * 1000);
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getId = () => this.id;
}
const Product2 = new Product("asus-one", 5000, 2);
export {};
//# sourceMappingURL=index.js.map