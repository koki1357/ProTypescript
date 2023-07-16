const width1 = 5;
const width2 = 8;
const height: number = 3;
const area = (width1 + width2) * height / 2;
//19.5 と表示される
console.log(area);

const binary = 0b1010; //2進数リテラルは先頭に0bがつく。
const octal = 0o755; //8進数リテラルは先頭に0oがつく。
const hexadecimal = 0xff; //16進数リテラルは先頭に0xがつく。
//10 493 255 と表示される
console.log(binary, octal, hexadecimal);

//指数表記の数値リテラル
const big = 1e8;
const small = 4e-5;
//100000000 0.00004 と表示される
console.log(big, small);

//数値リテラルは、数字の間に「_」を挟むことが許されている。桁数を分かりやすく表現したいときに便利。
const million = 1_000_000;
//1000000と表示される。
console.log(million);

/* TypeScriptの数値はIEEE754倍精度不動小数点数 */
console.log(9007199254740993); //9007199254740993 ではなく 9007199254740992 が表示される。
console.log(0.1 + 0.2);//0,3 ではなく 0.30000000000000004 が表示される。

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);//1158nと表示される

const result = 5n / 2n;
console.log(result); //2nと表示される

const str1_2_3: string = "Hello";
const str2_2_3: string = 'world!';
console.log(str1_2_3 + ", " + str2_2_3); //Hello, world!と表示される

const str1_2_3_1: string = `Hello
world!`;
console.log(str1_2_3_1); //Helloのあとに、改行が入ってworld!と表示される。

const str1_2_3_2: string = "Hello";
const str2_2_3_2: string = "world!";
console.log(`${str1_2_3_2}, ${str2_2_3_2}`);//Hello, world!と表示される。

console.log(`123 + 456 = ${123 + 456}`); //123 + 456 = 579 と表示される。

console.log("Hello \\world/"); // Hello \world/ と表示される。
console.log("Hello \u{796d} world!") //Hello 祭 world! と表示される。

const no_2_3: boolean = false;
const yes_2_3: boolean = true;
console.log(yes_2_3, no_2_3); //true falseと表示される

const val1_2_3 = null;
const val2_2_3 = undefined;
console.log(val1_2_3, val2_2_3); //null undefined と表示される

const n_2_3: null = null; //型もnull
const u_2_3: undefined = undefined; //型もundefined
console.log(n_2_3, u_2_3); //null undefined と表示される

/*
import { createInterface } from 'readline';
const rl_2_3 = createInterface({
    input: process.stdin,
    output: process.stdout
});
*/

/*
rl_2_3.question('文字列を入力してください：', (line) =>{
    //文字列が入力されるとここが実行される
    console.log(`${line}が入力されました`);
    rl_2_3.close;
});
*/

/*
rl_2_3.question('数値を入力してください:', (line) =>{
    //1000を足して出力
    const result_2_3 = line +1000; //result_2_3はstringと判定される。
    console.log(result_2_3);
    console.log(line + 1000);
    rl_2_3.close();
});
*/

/*
rl_2_3.question('数値を入力してください:', (line) =>{
    //Number関数を使って明示的な型変換を行うとresult_2_3はnumber型と判定される。
    const result_2_3 = Number(line); 
    //1000を足して出力
    console.log(result_2_3);
    console.log(line + 1000);
    rl_2_3.close();
});
*/

const num1_2_3_10 = Number(true);
console.log(num1_2_3_10);//1と表示される

const num2_2_3_10 = Number(false);
console.log(num2_2_3_10);//0と表示される

const num3_2_3_10 = Number(null);
console.log(num3_2_3_10);//0と表示される

const num4_2_3_10 = Number(undefined);
console.log(num4_2_3_10);//NaNと表示される

const bigint1_2_3_10 = BigInt("1234");
console.log(bigint1_2_3_10);//1234nと表示される

const bigint2_2_3_10 = BigInt(500);
console.log(bigint2_2_3_10);//500nと表示される

const bigint3_2_3_10 = BigInt(true);
console.log(bigint3_2_3_10);//1nと表示される

/*
const bigint4_2_3_10 = BigInt("foooooo");
console.log("bigint is", bigint4_2_3_10);//以下のSyntaxErrorが発生する。
*/

/*
file:///<省略>/ProTypescript/dist/2_3/2_3.js:97
const bigint4_2_3_10 = BigInt("foooooo");
                       ^

SyntaxError: Cannot convert foooooo to a BigInt
    at BigInt (<anonymous>)
    at file:///<省略>/ProTypeScript/ProTypescript/dist/2_3/2_3.js:97:24
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
*/

//数値から文字列へ
const str1_2_3_10 = String(1234.5); //"1234.5"という文字列になる
console.log(str1_2_3_10); //1234.5 と表示される

//新偽値から文字列へ
const str2_2_3_10 = String(true); //"true"という文字列になる
console.log(str2_2_3_10); //true と表示される

// nullやundefinedも文字列に変換可能
const str3_2_3_10 = String(null); //"null"という文字列になる
const str4_2_3_10 = String(undefined); //"undefined"という文字列になる
console.log(null, undefined); //null undefined と表示される

//真偽値への型変換の例
console.log(Boolean(123)); //true と表示される
console.log(Boolean(0)); // falseと表示される
console.log(Boolean(1n)); // trueと表示される
console.log(Boolean(0n)); // falseと表示される
console.log(Boolean("")); // falseと表示される
console.log(Boolean("foobar")); // trueと表示される
console.log(Boolean(null)); // falseと表示される
console.log(Boolean(undefined)); // falseと表示される
