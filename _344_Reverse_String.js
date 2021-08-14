/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let n = s.length;
    let start = 0;
    let end = n - 1;
    reverse(s, start, end);
};

function reverse(a, start, end) {
  if (start >= end) return;
  let t = a[start];
  a[start] = a[end];
  a[end] = t;
  reverse(a, start + 1, end - 1);
}

reverseString(["H","a","n","n","a","h"]);