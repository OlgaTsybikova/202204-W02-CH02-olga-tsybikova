let strictEquals = (a, b) => {
  
  if(isNaN(a) && isNaN(b)){
    return false;
  } else {
    Object.is(a,b);
  }
}





