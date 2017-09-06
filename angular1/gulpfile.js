/* Importanto gulp */
const gulp = require("gulp");
const util = require("gulp-util");

/* Importando arquivos */
require("./gulpTasks/app");
require("./gulpTasks/deps");
require("./gulpTasks/server");

/*
 * Task padrão chamada quando digita gulp no console
 */
gulp.task("default", function(){

	/* Se o gulp for executado no terminal como gulp --production */
	if(util.env.production){
		/* Inicia as tasks com suas dependencias */
		gulp.start("deps", "app");
	}
	else {
		gulp.start("deps", "app", "server");
	}

});