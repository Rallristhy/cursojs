/* Gulp faz tarefas no node */

/* Importanto gulp */
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

/*
 * Cria uma Task APP que para funcionar precisa de "app.html", "app.css", "app.js" e "app.assets"
 * Sempre que chamar a task app chama também a task app.html, app.css, etc.
 */
gulp.task("app", ["app.html", "app.css", "app.js", "app.assets"]);

/* Tasks */
gulp.task("app.html", function(){

	/* 
	 * Tudo que tiver app e termine com .html independente de pasta ou subpasta 
	 * e remove os espaços para diminuir o html deixando mais leve para tráfego
	 * salva em public
	 */
	gulp.src("app/**/*.html").pipe(htmlmin({ collapseWhitespace: true }))
							 .pipe(gulp.dest("public"));

});

gulp.task("app.css", function(){
	/* 
	 * Tudo que tiver app e termine com .html independente de pasta ou subpasta 
	 * e remove os espaços para diminuir o html deixando mais leve para tráfego
	 * salva em public
	 */
	gulp.src("app/**/*.css").pipe(uglifycss({ "ugliComments": true })) // Deixa o arquivo menor possível, sem espaços diminui o tamanho de variáveis..
							.pipe(concat("app.min.css")) // contatena os arquivos em app.min.css
							.pipe(gulp.dest("public/assets/css")); 
});

gulp.task("app.js", function(){
	gulp.src("app/**/*.js").pipe(babel({ presets: ["es2015"] })) // babel converte notações novas do js para a versão anterior para precaver incompatibilidade
						   .pipe(uglify())
						   .pipe(concat("app.min.js")) // contatena os arquivos em deps.min.js
	  					   .pipe(gulp.dest("public/assets/js")); // salva na pasta public/assets/js
});

gulp.task("app.assets", function(){
	gulp.src("assets/**/*.*").pipe(gulp.dest("public/assets")); /* todos os arquivos de todas as extenções que estão dentro de assets */
});