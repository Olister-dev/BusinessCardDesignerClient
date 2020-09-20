let gulp = require('gulp'),
    sass = require('gulp-sass');


    gulp.task('sass', function(){
        return   gulp.src('src/Header-menu/scss/**/*.scss')
             .pipe(sass({outputStyle: 'compressed'}))
             .pipe(gulp.dest('src/Header-menu/css'))
             
        });



    gulp.task('watch', function(){
            gulp.watch('src/Header-menu/scss/**/*.scss', gulp.parallel('sass'))
        });
        
        
    gulp.task('default', gulp.parallel( 'sass', 'watch'))