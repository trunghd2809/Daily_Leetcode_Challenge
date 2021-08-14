var swapPairs = function(head) {
  let start = 0;
  let end  = 1;

  swap(head, start, end);

  console.log(head);
};

function swap(head, start, end) {
  if (end > head.length) return;
  let t = head[start];
  head[start] = head[end];
  head[end] = t;
  swap(head, start + 2, end + 2);
}

swapPairs([1,2,3,4]);