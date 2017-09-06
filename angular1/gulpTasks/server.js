/* Importanto gulp */
const gulp = require("gulp");

/* Sempre que um arquivo mudar será recriado o build */
const watch = require("gulp-watch");

const webserver = require("gulp-webserver");

/*
 * Cria uma task server de depende de watch
 * Executa watch, quando terminar executa a task server
 */
gulp.task("server", ["watch"], function(){

	/* Monitora a pasta public e roda um servidor */
	gulp.src("public").pipe(webserver({
		/* Sempre que algum arquivo for alterado faz um reload no server */
		livereload: true, 
		/* O server roda na porta 3000 */
		port: 3000,
		/* Abre a app no navegador após a atualização */
		open: true
	}))
});


/* Cria task watch */
gulp.task("watch", function() {

	/* Monitora os arquivo html modificados, se foi modificado chama a respectiva task através do gulp.start */
	watch("app/**/*.html", () => gulp.start("app.html"));
	watch("app/**/*.css", () => gulp.start("app.css"));
	watch("app/**/*.js", () => gulp.start("app.js"));
	watch("assets/**/*.*", () => gulp.start("app.assets"));

});