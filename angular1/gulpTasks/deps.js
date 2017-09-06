/* Arquivo responsável pelas Dependencias */

/* Importanto gulp */
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");


/*
 * Cria uma Task deps que para funcionar precisa de "deps.html", "deps.css", "deps.js" e "deps.assets"
 * Sempre que chamar a task deps chama também a task deps.html, deps.css, etc.
 */
gulp.task("deps", ["deps.js", "deps.css", "deps.fonts"]);

/* Tasks */
gulp.task("deps.js", function(){

	/* Dependencias */
	gulp.src([
		"../node_modules/angular/angular.min.js",
		"../node_modules/angular-ui-router/release/angular-ui-router.min.js",
		"../node_modules/angular-animate/angular-animate.min.js",
		"../node_modules/angular-toastr/dist/angular-toastr.tpls.min.js",
		"../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
		"../node_modules/admin-lte/bootstrap/js/bootstrap.min.js",
		"../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js",
		"../node_modules/admin-lte/dist/js/app.min.js"
	]).pipe(uglify()) // Deixa o arquivo menor possível, sem espaços diminui o tamanho de variáveis..
	  .pipe(concat("deps.min.js")) // contatena os arquivos em deps.min.js
	  .pipe(gulp.dest("public/assets/js")); // salva na pasta public/assets/js
});

gulp.task("deps.css", function(){

	/* Dependencias */
	gulp.src([
		"../node_modules/angular-toastr/dist/angular-toastr.min.css",
		"../node_modules/font-awesome/css/font-awesome.min.css",
		"../node_modules/admin-lte/bootstrap/css/bootstrap.min.css",
		"../node_modules/admin-lte/dist/css/AdminLTE.min.css",
		"../node_modules/admin-lte/dist/css/skins/_all-skins.min.css"
		
	]).pipe(uglifycss({ "ugliComments": true })) // Deixa o arquivo menor possível, sem espaços diminui o tamanho de variáveis..
				.pipe(concat("deps.min.css")) // contatena os arquivos em deps.min.css
				.pipe(gulp.dest("public/assets/css")); // salva na pasta public/assets/css

});

gulp.task("deps.fonts", function(){

	/* Dependencias */
	gulp.src([
		"../node_modules/font-awesome/fonts/*.*",
		"../node_modules/admin-lte/bootstrap/fonts/*.*"
		
	]).pipe(gulp.dest("public/assets/fonts")); // salva na pasta public/assets/css
});