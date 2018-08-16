function produceDrivingRange(blockRange){
  return function(y, z){
    let range = z.replace("th","") - y.replace("th","")
    let diff = blockRange - range
    diff = Math.abs(diff)
    return (range < blockRange ? `within range by ${diff}` :
    `${diff} blocks out of range`)
  }
}

function produceTipCalculator(x){
  return function(y) {
  return  x * y
  }
}

function createDriver(){
  let DriverId = 0
  return class{
    constructor(name) {
      this.name = name
      this.id = ++DriverId 
    }
  }
}
