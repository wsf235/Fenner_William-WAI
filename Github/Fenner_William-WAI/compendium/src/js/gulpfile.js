/**
 * Created by MasterAnseen on 5/2/18.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){

});

gulp.task('sass', function(){
    return gulp.src('../sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('../css'));
});

gulp.task('watch', function(){
    gulp.watch('../sass/*.sass', ['sass'])
});