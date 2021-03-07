const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html',series('appHTML'))
    watch('src/**/*.scss',series('appCSS'))
    watch('src/**/*.js',series('appJS'))
    watch('src/assets/imgs/**/*.*',series('appIMG'))
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}