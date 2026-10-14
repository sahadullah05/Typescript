//  a =  14

//  let num = 14


// let a = 45

// console.log(a);

// let arr:string[] = ["123" , 24, true]


// let Arrnum: number[]= [45]

// let arrstri : string [] =  ["sahad"]

// let arrbool : boolean[] = [true]
 

// let ArrValue : [number,string,boolean] = [ 45 , "" , true ]


// enum Codes {

//     Not_Found = 404,
//     Abondoned = 410,
//     Success = 200,

//}

// Codes.Success 
// console.log(Codes.Not_Found );


// let a:string;

// a ="name",
// a = 12,
// a = true

// let a :unknown;

// a = "abc"

// a = 12

// if( typeof a=== "string"){

// }else if(
//     typeof a=== "number"
// ){
//     a
// }

// function foo (a:number , b:number ):string{
// console.log(  "is running");
  
// return "a"+ "b"
// }

// foo(1,2)


// let users:null  = null

// let user:null | Boolean = null

// user = true





// function diff(a:string, b:string ){

//  console.log(a +" " +  b)
// }

// diff("ayan", "salman")




// interface UserOb {
//     email : string,
//     password : number,
//     age : number
// }


// const myOb = {
//     email :"sahad05@gmail.com",
//     password : 12345678,
//     age : 20
// }

// function foo (myOb:UserOb):void{
 

    // myOb
// }

// foo(myOb)









// class Students {

//     public name
//     public email
//     public age

// constructor(name:string, age:number, email:string){

//   this.name = name
//    this.age = age
//   this.email = email

//     }
// }


// let s1 = new Students("Adnan" , 19 , "adnan@gmail.com")
// let s2 = new Students("Ali" , 18, "Ali@gmail.com")


// console.log(s1)
// console.log(s2)






// class bottle {


// constructor (public name:string , public material :string , public price:number
//  ){}
// }


// let b1 = new bottle("aquafina", "plastic", 100 )
// let b2 = new bottle("pakola","plastic", 60  )

// console.log(b1);


// class bottle {

// private name
// constructor(  name :string , public material :string , public price:number
//  )  { this.name ="pepsi"

//  }
// }


// let b1 = new bottle("aquafina", "plastic", 100 )
// let b2 = new bottle("pakola","plastic", 60  )
// b2.name ="pepsi"

// console.log(b1);



// class bottle {
//     constructor(public readonly name :string, public price : number, public material:string){

//        this.name = "Aquafina"
//     }

// }



// let b1 = new bottle("Nestle" , 120, "plastic")


// console.log(b1);







// function calback( a:string , cb:(str:string) =>void ) {

//   cb("call")
// }

// calback ("sahad" , (str:string):void => {
//   console.log(str);
  
// })


// function random (val:number, sum:(a:number, b:number)=>void ):void{
  
//     sum(val, 45)

// }

// random( 32, (a:number, b:number) =>{
//     console.log(a + b)
// })


//  function restOp (...arg:number[]):void{
 
//     console.log(arg);
    
// }



// restOp(1,2,3,4,5,6)






// function over(a:string):void
// function over (a:string, b:number): number


// function over( val:any, num?:any){

//     if(typeof val == "string" && num == undefined){
//         console.log("first one running ===>");
//             }
//             if (typeof val == "string" && typeof num == "number"){
//                 console.log("first one running ===>");
                
//             }

// }

// over ("adnan", 11)





// function generic <T> (val:T){

//     console.log(val);
    

// }
// generic (23)
// generic ("23")
// generic(true)


// function generic <T> (val:T):T{

//     if ( typeof val == "string"){
//         return val.toUpperCase() as T
// }
    
//     return val 
// }
    



// console.log(generic(23));
// generic ("23")


// generic(true)




// class Game <T> {

//     constructor(public key:T){

// }

// }


// let m1 = new Game(2)


// console.log(m1);




  
