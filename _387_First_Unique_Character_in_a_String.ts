function firstUniqChar(s: string): number {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], false);
    } else {
      hashMap.set(s[i], i);
    }
  }
  for (let [key, value] of hashMap) {
    if (value !== false) {
      return value;
    }
  }
  return -1;
};

/*
1. Brute - iterate, for each char, check it doesn't exist elsewhere (n^2 worst)
2. Use Hashmap - iterate, store freq in map, iterate and check (2n, worst)  // Don't use reduce 
3. Use indexOf to lookup
*/

// function firstUniqChar(s: string): number {
//   //const freq = {}
//   //for (const c of s) {
//   //    freq[c] = (freq[c] ?? 0) + 1
//   //}
//   //for (let i = 0; i < s.length; i++) {
//   //    if (freq[s[i]] === 1) return i
//   //}
//   //return -1
//   for (const c of s) {
//       const first = s.indexOf(c)
//       if (first === s.lastIndexOf(c)) return first
//   }
//   return -1
// };
console.log(firstUniqChar('dddccdbba'));