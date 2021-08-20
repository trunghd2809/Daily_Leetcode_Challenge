'use strict';
/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
    // Write your code here
    let n = arr.length;
    let k = arr.length;
    let result = 0;
    // Xét trường đặc biệt
    if (k === n && checkDuplicate(arr) === false && checkDiff(arr) === false) {
        result = k;
        return result;
    }
    while(k >= 2) {
        let i= 0;
        if (result > 0) break; 
        // Chia nhỏ các mảng với độ dài mảng là k
        while ( i <= k && (i + k -1) < n) {
            let arrClone = [...arr];
            let a = [...arrClone.slice(i, i + k)];
            // Kiểm tra mảng có 3 số khác nhau hoặc a-b <= 1 hay không
            if (checkDuplicate(a) === false && checkDiff(a) === false) {
                result = k;
                break;
            } 
            i++;
        }
        k--;
    }
    
    return result === 0 ? 2 : result;

}

function checkDiff(arr) {
    let total = 0;
    let i = 0;
    while (i < arr.length - 1) {
        if ((arr[i] - arr[i + 1]) > 1 || (arr[i + 1] - arr[i]) > 1)  { 
            total += 1; break;
        };
        i++;
    }
    return total > 0 ? true : false;
}

function checkDuplicate(a) {
    const b = new Set(a);
    return b.size > 2 ? true : false;
}

// console.log(checkDuplicate([1,2,3]));
console.log(longestSubarray([1,1,1,3,3,2,2]));