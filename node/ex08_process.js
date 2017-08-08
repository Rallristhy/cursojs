console.log(process.argv);

function temParam(param) {

	/*
	* Se for igual a -1 não existe
	*/
	return process.argv.indexOf(param) !== -1 
}

if(temParam('--producao')){
	console.log('Parametro ok!');
}

else {
	console.log('Tranquilo..');
}