const {src, dest, series, watch} = require('gulp');
const autoPrefixer = require('gulp-autoprefixer'); // Автопрефиксер модифицирует css под старые браузеры
const cleanCSS = require('gulp-clean-css'); // Очистка лишнего в css
const concat = require('gulp-concat'); // Объеденгие одинаковых файлов
const del = require('del'); // Удаление папки dist перед новым добавлением
const browserSync = require('browser-sync').create(); // Синхронизация браузера
const sass = require(`sass`)
const gulpSass = require(`gulp-sass`);
const svgSprite = require('gulp-svg-sprite') // Спрайт картинок
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin'); // Минификатор html
const gulpif = require('gulp-if');
const notify = require('gulp-notify');// Ошибки в сборке
const image = require('gulp-imagemin')
const typograf = require('gulp-typograf');
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const mainSass = gulpSass(sass)
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify-es').default // Переводит код js в нечитаемый
const babel = require('gulp-babel'); // Переводит в старый код для IE
const sourcemaps = require('gulp-sourcemaps'); // Позволяет покахать ошибку в исходниках

const srcFolder = './src';
const buildFolder = './app';
const paths = {
  srcSvg: `${srcFolder}/img/svg/**.svg`,
  srcSvgMulticolor: `${srcFolder}/img/svg-multicolor/**.svg`,
  srcImgFolder: `${srcFolder}/img`,
  buildImgFolder: `${buildFolder}/img`,
  srcScss: `${srcFolder}/scss/**/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcFullJs: `${srcFolder}/js/**/*.js`,
  srcMainJs: `${srcFolder}/js/main.js`,
  buildJsFolder: `${buildFolder}/js`,
  srcPartialsFolder: `${srcFolder}/partials`,
  resourcesFolder: `${srcFolder}/resources`,
};

let isProd = false

const clean = () => {
  return del([buildFolder])
}

const svgSprites = () => {
  return src(paths.srcSvg)
  .pipe(
    svgmin({
      js2svg: {
        pretty: true,
      },
    })
  )
  .pipe(
    cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      },
    })
  )
  .pipe(replace('&gt;', '>'))
  .pipe(svgSprite({
    mode: {
      symbol: {
        sprite: "../sprite.svg"
      }
    },
  }))
    .pipe(dest(paths.buildImgFolder));
}

const svgMulticolor = () => {
  return src(paths.srcSvgMulticolor)
  .pipe(svgSprite({
  shape: {
      // dest: 'out/intermediate-svg' // Keep the intermediate files
    },
    mode: {
      view: { // Activate the «view» mode
        bust: false,
        render: {
          scss: true // Activate Sass output (with default options)
        }
      },
      symbol: {
        sprite: '../spriteMulticolor.svg'
      } // Activate the «symbol» mode

    }
  }))
  .pipe(dest(paths.buildImgFolder));
}

const styles = () => {
  return src(`${srcFolder}/scss/main.scss`, { sourcemaps: !isProd })
    .pipe(plumber(
      notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(mainSass())
    .pipe(autoPrefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    }))
    .pipe(gulpif(isProd, cleanCSS({
      level: 2
    })))
    .pipe(dest(paths.buildCssFolder, { sourcemaps: '.' }))
    .pipe(browserSync.stream());
};


const scripts = () => {
    return src([
            paths.srcFullJs,
            paths.srcMainJs,
        ])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.buildJsFolder))
        .pipe(browserSync.stream());
}
const resources = () => {
  return src(`${paths.resourcesFolder}/**`)
    .pipe(dest(buildFolder))
}

// const images = () => {
//   return src([`${paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`])
//     .pipe(gulpif(isProd, image([
//       image.mozjpeg({
//         quality: 80,
//         progressive: true
//       }),
//       image.optipng({
//         optimizationLevel: 2
//       }),
//     ])))
//     .pipe(dest(paths.buildImgFolder))
// };

// const webpImages = () => {
//   return src([`${paths.srcImgFolder}/**/**.{jpg,jpeg,png}`])
//     .pipe(webp())
//     .pipe(dest(paths.buildImgFolder))
// };


const htmlInclude = () => {
  return src([`${srcFolder}/*.html`])
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest(buildFolder))
    .pipe(browserSync.stream());
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: `${buildFolder}`
        }
    })

  watch(paths.srcScss, styles);
  watch(paths.srcFullJs, scripts);
  watch(`${paths.srcPartialsFolder}/*.html`, htmlInclude);
  watch(`${srcFolder}/**/*.html`, htmlInclude);
  watch(`${paths.resourcesFolder}/**`, resources);
  // watch(`${paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`, images);
  // watch(`${paths.srcImgFolder}/**/**.{jpg,jpeg,png}`, webpImages);
  watch(paths.srcSvg, svgSprites);
}

const htmlMinify = () => {
  return src(`${buildFolder}/**/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest(buildFolder));
}

const toProd = (done) => {
  isProd = true;
  done();
};

exports.default = series(clean, htmlInclude, scripts, styles, resources, svgSprites, svgMulticolor, watchFiles);

exports.build = series(toProd, clean, htmlInclude, scripts, styles, resources, svgSprites, svgMulticolor, htmlMinify);
