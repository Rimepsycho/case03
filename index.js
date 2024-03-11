import uniq from "uniq";

// ESM的寫法
//因為package.json裡面，有"type": "module",所以要用EMS的寫法

const ary = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6, 7,8];
console.log(uniq(ary));
console.log("林衣心");
