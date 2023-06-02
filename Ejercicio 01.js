function spiralPrint(matriz) {
  let arr = [];
    
  while (matriz.length) {
    arr.push(
      ...matriz.shift(),
      ...matriz.map(a => a.pop()),
      ...(matriz.pop() || []).reverse(),
      ...matriz.map(a => a.shift()).reverse()
    );
  }
  return arr;
}

console.log(spiralPrint([[1,2,3],[4,5,6],[7,8,9]]))