process.stdout.write('Está gostando do curso?');

/*
* stdin = Entrada padrão
* stdout = Saída padrão
* Evento data escutando o que o usuário digitar
*/
process.stdin.on('data', function(data){
	process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado!\n`);
	
	/* Finaliza o evento e volta para o console */
	process.exit();
});
