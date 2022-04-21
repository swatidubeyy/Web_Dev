function add(a ,b){
    console.log("The Sum is" ,a+b)
}

function sub(a,b){
      console.log('The differnec is',a-b)
}

function mul(a,b){
      console.log('The Product is',a*b)
}

function div(a,b){
      console.log("The Division is " ,a/b)
}
function mod(a,b){
    console.log('The modulous is',a%b)
}

module.exports  = {
    addition : add,
    substraction : sub,
    multiplication : mul,
    division : div,
    modulous : mod
}

// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them
