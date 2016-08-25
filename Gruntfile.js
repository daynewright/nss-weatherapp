
module.exports = function(grunt){

  grunt.initConfig({

    browserify: {
      js: {
      src: ['./dev/js/main.js'],
      dest: 'dist/app.js'
      },
    options: {
      transform: ['hbsfy']
      }
    },

    jshint: {
      options: {
        predef: ['document', 'console', '$'],
        esnext: true,
        globalstrict: true,
        browserify: true,
        debug: true
      },
      files: ['./dev/js/**/*.js']
    },

    sass: {
      dist: {
        files: {'./dist/css/main.css' : './dev/sass/main.scss'}
      }
    },

    watch: {
      javascript: {
        files: ['./dev/js/**/*js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['./dev/sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['./dev/templates/**/*hbs'],
        task: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['browserify', 'jshint', 'sass', 'watch']);
};
