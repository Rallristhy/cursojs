console.log(global === this); //igual e do mesmo tipo false
console.log(module === this); //igual e do mesmo tipo false
console.log(module.exports === this); //igual e do mesmo tipo true

this.digaOi = function(){
	console.log("Oi!");
}