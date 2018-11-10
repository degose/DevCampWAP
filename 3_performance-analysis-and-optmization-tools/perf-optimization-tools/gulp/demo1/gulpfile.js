var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function () {
    return gulp.src('dev/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('public'));
})



// 질문
// jquery 만 min 하고싶다면? => task 를 추가해서 처리
// 초기화 시키고 다시 넣고 싶다면 ? => 기능 찾아보자

// *.js => js 로 된 모든 파일

// gulp.task('sum', function () {
//     return 10 + 20;
// })

// 터미널 창에서 'gulp sum' 실행

// gulp.task() 작업 단위를 나눈다. 작업 지정, 수행
// gulp.src() 작업 후 파일이 반환 될 경로
// gulp.dest() 최종 작업 후 결과물 경로
// gulp.watch() 지정된 소스의 변경 시 수행할 작업 지정



// package.json 에서 추가 된 gulp 파일 (즉 node_module 폴더에서 gulp 가져오기)
// require('./node_modules/gulp/bin/gulp.js');


// 예시 jquery
// require('jquery');
// 쓰고싶으면 
// var $ = require('jquery');
// require => 자바스크립트에서 모듈을 로딩하는 함수(메서드) ex) AMD, Common.js
// 자바스크립트는 원래 모듈을 지원하지 않았음
// 모듈이란? 자바스크립트 변수의 유효 범위(scope)가 전역
// js 파일이 다르다고 해서 scope 가 생기는 것이 아님
// 그래서 등장한것이 module loader(AMD, Common.js)
// 자바스크립트 언어에서 모듈 로딩을 지원 ES6

// 하는일은 똑같다.
// var gulp = require('gulp'); // ES5
// import gulp from 'gulp'; // ES6
