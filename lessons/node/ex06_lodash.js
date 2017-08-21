const _ = require('lodash');

const alunos = [{
	nome: 'Joao',
	nota: 7.6
}, {
	nome: 'Maria',
	nota: 8.3
}, {
	nome: 'Pedro',
	nota: 6.7
}];

const media = _.sumBy(alunos, 'nota') / alunos.length;

console.log(media);