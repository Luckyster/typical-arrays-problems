
exports.min = function min (array) {
  let m = 0;
  if(array == undefined || array.length == 0){
      return 0;
  }
  for(let i = 0; i < array.length; i++){
      if(i == 0){
          m = array[0];
      } else if(array[i] < m){
          m = array[i];
      }
  }
  return m;
}

exports.max = function max (array) {
    let m = 0;
    if(array == undefined || array.length == 0){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
        if(i == 0){
            m = array[0];
        } else if(array[i] > m){
            m = array[i];
        }
    }
    return m;
}

exports.avg = function avg (array) {
    let a = 0;
    if(array == undefined || array.length == 0){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
            a += array[i];
    }
     a = a / (array.length) * 100;
    console.log(Math.floor(a));
    return Math.floor(a) / 100;
}
