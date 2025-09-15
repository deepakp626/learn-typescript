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
console.log(func3(10, 20));
export {};
// ------  Rest operator in typescript ------------------
//# sourceMappingURL=index.js.map