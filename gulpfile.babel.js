/*
 * Copyright (C) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2017-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord highlight.js
 * Repository: https://github.com/arcticicestudio/nord-highlightjs
 * License:    MIT
 */

const gulp = require("gulp-help")(require("gulp"));
import browserSync from "browser-sync";
import del from "del";
import path from "path";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import stylelint from "gulp-stylelint";
import watch from "gulp-watch";

/*+---------------+
+ Configuration +
+---------------+*/
const config = {
  browserSync: {
    files: [path.join("./dist", "**", "*.css")],
    ui: true,
    server: true,
    logLevel: "info",
    notify: true,
    reloadDelay: 0,
    reloadDebounce: 0,
    ui: {
      port: 3001
    },
    server: {
      baseDir: "./dist",
      index: "index.html"
    }
  },
  dist: {
    baseDir: "./dist"
  },
  sass: {
    indentedSyntax: false,
    indentType: "space",
    indentWidth: 2,
    linefeed: "lf",
    outputStyle: "expanded",
    precision: 5,
    sourceComments: false
  },
  src: {
    baseDir: "./src",
    sass: [path.join("./src", "**", "*.scss")]
  }
};

/*+-------+
+ Tasks +
+-------+*/
/**
 * Cleans the whole distribution folder.
 *
 * @since 0.1.0
 */
gulp.task("clean", "Cleans the whole distribution folder", () => {
  del(config.dist.baseDir);
});

/**
 * Runs all compile tasks.
 *
 * @since 0.1.0
 */
gulp.task("compile", "Runs all compile tasks", ["lint", "compile-scss"]);

/**
 * Compiles all Sass (SCSS) sources.
 *
 * @since 0.1.0
 */
gulp.task("compile-scss", false, () => {
  return gulp
    .src(config.src.sass)
    .pipe(plumber())
    .pipe(sass(config.sass).on("error", sass.logError))
    .pipe(gulp.dest(config.dist.baseDir));
});

/**
 * Shows the help.
 *
 * @since 0.1.0
 */
gulp.task("default", ["help"]);

/**
 * Runs all lint tasks.
 *
 * @since 0.1.0
 */
gulp.task("lint", "Runs all lint tasks", ["lint-scss"]);

/**
 * Lints all Sass (SCSS) sources.
 *
 * @since 0.1.0
 */
gulp.task("lint-scss", false, () => {
  return gulp.src(config.src.sass).pipe(
    stylelint({
      failAfterError: true,
      reporters: [{ formatter: "verbose", console: true }]
    })
  );
});

/**
 * Watches all source files for changes.
 *
 * @since 0.1.0
 */
gulp.task("watch", "Watches all source files for changes", ["compile"], () => {
  browserSync.init(config.browserSync);
  gulp.watch(config.src.sass, ["compile"], browserSync.reload);
});
