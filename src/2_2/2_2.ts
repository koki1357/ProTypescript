//変数宣言は複数の変数の宣言を「,」でつなげることも可能。

const greeting2_2 = "Hello,",
    target2_2 = "world",
    text2_2 = greeting2_2 + target2_2;

console.log(text2_2);

/*
ひらがなや、カタカナ、漢字も識別子に使うことができる。
基本的に記号系の文字は識別子に使用できない($と_は例外的に使用可能)
空白文字も識別子に使用できない
*/
const あいう = 123;
const 技術評論社 = あいう + 876;
console.log(技術評論社);

//「変数名: 型名」の形で変数に型注釈を与える
const greeting2_2_3: string = "Hello,";
const target2_2_3: string = "world!";
console.log(greeting2_2_3 + target2_2_3);

/*
letの特徴①
letで宣言した変数は、変数の再代入が可能
(constで宣言した変数は、変数の再代入はできない)
*/

let greeting2_2_4 = "hoge";
greeting2_2_4 = "Hello,"
let target2_2_4 = "fuga";
console.log(greeting2_2_4 + target2_2_4);

/*
letの特徴②
letは、変数宣言時に値を代入しなくても良い。
具体的には、letを用いて変数を宣言する際は、「=値」の部分を省略できる。
*/
let greeting2_2_4_2, target2_2_4_2;
greeting2_2_4_2 = "hoge";
target2_2_4_2 = "fuga";
console.log(greeting2_2_4_2 + target2_2_4_2);

//letにも以下のように型注釈を付けることは可能です。
let greeting2_2_4_3: string, target2_2_4_3: string;
greeting2_2_4_2 = "hoge";
target2_2_4_2 = "fuga";
console.log(greeting2_2_4_2 + target2_2_4_2);