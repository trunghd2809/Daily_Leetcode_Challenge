function mergedSort(a) {
  let n = a.length;

  let start = 0;
  let end = n - 1;

  swap(a, start, end);
}

function swap(a, start, end) {
  if(start > end) return [];
  if (start === end) return [a[start]];

  console.log("Chia: " + start + " - " + end);

  let mid = Math.floor((start + end) / 2);

  let a1 = swap(a, start, mid);
  let a2 = swap(a, mid + 1, end);

  console.log('a1', a1);
  console.log('a2', a2);

  let result = merge(a1, a2);
  console.log('result', result);
  return result;
}

function merge(n1 = [], n2 = []) {
  let i = n1.length - 1;
  let j = n2.length - 1;
  let k = (n1.length + n2.length) - 1;
  
  while ( k >= 0 ) {
    if (i < 0) {
      n1[k] = n2[j];
      j--;
    } else if (j < 0) {
      n1[k] = n1[i];
      i--;
    } else if (n2[j] >= n1[i]) {
      n1[k] = n2[j];
      j--;
    } else if (n2[j] < n1[i]) {
      n1[k] = n1[i];
      i--;
    }
    k--;
  }

  return n1;
}

mergedSort([1,5,3,2,8,7,6,4]);