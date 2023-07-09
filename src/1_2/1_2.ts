// function doble(value: number){
//     console.log(value * 2);
// }
// function double(value: string){
//     console.log(value.repeat(2));
// }

//typescriptでは同名のメソッドをシグネチャで使い分けることはできないので.
//以下をコンパイルすると、同じ名前で複数回関数を定義することにより
//Duplicate function implementation. というコンパイルエラーが発生する.
// double(123);
// double("hello");

//double は引数が数値 でも文字列でも呼び出せる」という挙動を実現したい場合.
//TypeScript では次のように書く必要がありある.
function double (value: string | number){
    if(typeof value === "number"){
        console.log(value * 2);
    } else {
        console.log(value.repeat(2));
    }
}

double(123);
double("hello");

class Human {
    greet(){
        console.log("Hello");
    }
}