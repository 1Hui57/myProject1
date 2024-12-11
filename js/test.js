// const colorArray = ['red', 'blue', 'black', 'yellow', 'pink', 'green']
// /**
//  * shift + alt + f => 排版程式碼
//  * 1. 把每一個元素 印出來
//  * 2. 把前面三個元素印出來
//  * 3. 把黑色跟黃色以外的元素印出來
//  * 4. 找出粉色的index
//  * 5. 把 第四個與第六個元素  合併起來(用+)後印出來 
//  */
// console.log('第一題');

// for (i = 0; i < colorArray.length; i++) {
//     console.log(colorArray[i])
// }
// console.log('第二題');

// for (i = 0; i < 3; i++) {
//     console.log(colorArray[i])
// }


// console.log('第三題');

// for (i = 0; i < colorArray.length; i++) {
//     let isblack = colorArray[i] === 'black';
//     let isYellow = colorArray[i] === 'yellow';
//     if (!isblack && !isYellow) {
//         console.log(colorArray[i])
//     }
// }


// console.log('第四題');
// let pinkIndex;
// for (i = 0; i < colorArray.length; i++) {
//     if (colorArray[i] === 'pink') {
//         pinkIndex = i;
//     }
// }
// console.log('粉色的 index 是' + pinkIndex);

// console.log('第五題');

// let ans = '';
// for (i = 0; i < colorArray.length; i++) {
//     if (i % 2 === 1) {
//         ans = ans + colorArray[i]
//     }
// }
// console.log(ans)

// //計算1+2+3+4...+10
// let number;
// let result=0;
// for(number=1; number<11; number++){
//     result=result+number
// }
// console.log(result)

// //函式建立
// function sum(p){
//     console.log(p)
// }
// sum("我");
// //另一個寫法
// let summ=function(p){
//     console.log(p+p)
// }
// summ('我')
// //
// let divide=function(n1, n2){
//     let result1=n1/n2;
//     return result1;
// }
// let ans1=divide(6,2);
// console.log(ans1)
// console.log(divide(4,2))

/*
 * 1. 設計一個函式，回傳結果是數字， 回傳  orange 的 index
 * 2. 設計一個函式，回傳結果是回傳 一個字串，是所有 奇數 的 元素加在一起 (ex: "red green black purple orange...")
 * 3. 設計一個函式，回傳結果是透過帶入的顏色名稱(ex: 'gray')，回傳該顏色的 index
 */
// const colorArray = [
//     "red",
//     "blue",
//     "green",
//     "yellow",
//     "black",
//     "white",
//     "purple",
//     "pink",
//     "orange",
//     "gray",
//     "brown",
//     "cyan",
//     "magenta",
//     "lime",
//     "teal",
// ];
// let findColorIndex2 = function (colorName2) {
//     for (let i = 0; i < colorArray.length; i++) {
//         if (colorArray[i] === colorName2) {
//             return i;
//         }
//     }
// }
// console.log(findColorIndex2("yellow"))



// console.log("第一題")
// let findOrangeColorIndex = function () {
//     for (let i = 0; i < colorArray.length; i++) {
//         if (colorArray[i] === 'orange') {
//             return i;
//             //let orangeIndex = i; 多餘的程式碼
//             //return orangeIndex;
//         }
//     }
// }
// console.log(findOrangeColorIndex());

// console.log("第二題")
// function oddColorString() {
//     let oddColor = ''
//     for (let i = 0; i < colorArray.length; i++) {
//         if (i % 2 == 0) {
//             oddColor = oddColor + " " + colorArray[i];
//         }
//     }
//     return oddColor;
// }
// console.log(oddColorString())

// console.log("第三題")
// function colorToIndex(colorName) {
//     for (i = 0; i < colorArray.length; i++) {
//         if (colorArray[i] === colorName) {
//             return i;
//         }
//     }
// }
// console.log(colorToIndex("gray"))

// /**
//  * 設計一個函式，回傳結果是陣列，透過帶入的參數，決定回傳的是所有 
//  * 偶數或奇數 的 元素 (ex: ["blue", "yellow", "white", "pink"...])
//  *   - 提示: 陣列新增元素的方法: array.push(element)
//  */
// function getColorArrayByEvenOrOdd(isEven) {
//     let evenArray = [];
//     let oddArray = [];
//     for (i = 0; i < colorArray.length; i++) {
//         if (i % 2 === 1) {
//             evenArray.push(colorArray[i]);
//         }
//         else if (i % 2 === 0) {
//             oddArray.push(colorArray[i]);
//         }
//     }
//     if (isEven == true) { return evenArray }
//     else if (isEven == false) { return oddArray; }
// }

// function getColorArrayByEvenOrOdd2(isEven) {
//     let result = [];
//     let remain = (isEven === true) ? 1 : 0
//     for (i = 0; i < colorArray.length; i++) {
//         if (i % 2 === remain) {
//             result.push(colorArray[i]);
//         }
//     }
//     return result;
// }
// function getColorArrayByEvenOrOdd3(isEven) {
//     return colorArray.filter((v, i) => i % 2 === (isEven ? 1 : 0))
// }
// console.log(getColorArrayByEvenOrOdd3(true))

// console.log(getColorArrayByEvenOrOdd(true)); // 若帶true 印出  ["blue", "yellow", "white", "pink"...] (偶數)

const tempArr = [
    2000, 153135, 33, 15616, 1891, 88, 894, 156, 561, 1899481, 2165, 32131, 5691, 2315, 15, 156, 896418, 85416, 513, 561, 785, 748515, 8913, 233, 8494, 49, 65, 81, 654, 979541, 5869
];

const tempArr2 = [
    '蘋果',
    '香蕉',
    '鳳梨',
    '奇異果',
    '蘋果'
]

//　#1 設計一個Function回傳一個陣列 , 找出所有 偶數or奇數的元素
//　#2 設計一個Function回傳一個陣列， 找出所有 > 1000 的元素
//　#3 設計一個Function ，將陣列中所有值加起來的結果回傳

console.log("第一題")
function getEverorOddNumber(Even) {
    let result = []
    let remain = (Even === true) ? 1 : 0;
    for (i = 0; i < tempArr.length; i++) {
        if (i % 2 === remain) {
            result.push(tempArr[i]);
        }
    } return result;
}


console.log('第二題')
function getNumberMoreThan1000() {
    let result = [];
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] > 1000) {
            result.push(tempArr[i])
        }
    } return result;
}

console.log("第三題")
function getSumOfNumber() {
    let result = 0;
    for (let i = 0; i < tempArr.length; i++) {
        result = tempArr[i] + result;
    } return result;
}


// callback function => 設計我要做什麼事情
tempArr.forEach(
    (item, index, array) => {
        // 可以針對 tempArr 內所有元素做事情
    }
)

// callback function => 設計我要找的[元素] 的邏輯
const target = tempArr2.find(
    (item, index) => {
        return index === 3
    }
)

// callback function => 設計我要找的[元素的index] 的邏輯
const targetIndex = tempArr.findIndex(
    (item) => {
        return item === '嗨'
    }
)

// filter會回傳過濾後的陣列 ，callback function => 設計過濾邏輯
const targetArr = tempArr.filter(
    (item, index) => {
        return index % 2 === 1
    }
)

// 回傳 true or false ，參數要帶入某個值，如果該值存在於陣列中會回傳true
tempArr.includes(2000);

tempArr2.indexOf('奇異果')

/**
 * 設計一個函式，
 * 我要所有偶數的值之中
 * 第二&第四個元素相加的結果 減 第三&第五個元素相加的結果
 * 然後回傳這個減完的結果是不是存在於 tempArr 中
 */
function test() {
    const evenArray = tempArr.filter((item, index) => item % 2 === 0)
    const result = evenArray[2] + evenArray[4] - evenArray[3] - evenArray[5]
    return tempArr.includes(result)
}

console.log(test())
const evenArray = tempArr.filter(
    (item, index) => {
        return item % 2 === 0
    }
)
console.log(evenArray)
const number2 = evenArray.find(
    (item, index) => {
        return index === 1
    }
)
const number4 = evenArray.find(
    (item, index) => {
        return index === 3
    }
)
const number3 = evenArray.find(
    (item, index) => {
        return index === 2
    }
)
const number5 = evenArray.find(
    (item, index) => {
        return index === 4
    }
)
let result = number2 + number4 - number3 - number5
console.log(result)
console.log(tempArr.includes(result))
