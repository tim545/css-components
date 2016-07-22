module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    concat: {
      css: {
        files: [{
          src: ['bower_components/normalize-css/normalize.css'],
          dest: 'dist/dependencies.css'
        }]
      }
    },

    less: {
      compile: {
        files: [{
          src: ['src/components/**/*.less'],
          dest: 'dist/example-less.css'
        }]
      }
    },

    sass: {
      compile: {
        files: [{
          src: ['src/components/**/*.scss'],
          dest: 'dist/example-scss.css'
        }]
      }
    },

    jade: {
      compile: {
        files: [{
          src: ['src/index.jade'],
          dest: 'dist/index.html'
        }]
      }
    }

  });

  grunt.registerTask('default', ['concat', 'less', 'sass', 'jade']);

};
