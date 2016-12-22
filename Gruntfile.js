module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    clean: {
      files: ['dist/*.*']
    },

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
        files: [
          {
            src: ['src/components/**/*.less'],
            dest: 'dist/components-less.css'
          },
          {
            src: ['src/index.less'],
            dest: 'dist/example.css'
          }
        ]
      }
    },

    sass: {
      compile: {
        files: [{
          src: ['src/components/**/*.scss'],
          dest: 'dist/components-scss.css'
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
    },

    'http-server': {
      'examples': {
        root: './dist',
        host: 'localhost',
        port: 9000,
        runInBackground: true,
        openBrowser: true
      }
    },

    watch: {
      files: [
        'src/**/*.jade',
        'src/**/*.less',
        'src/**/*.scss'
      ],
      tasks: ['compile']
    }

  });

  grunt.registerTask('compile', ['clean', 'concat', 'less', 'sass', 'jade']);
  grunt.registerTask('default', ['compile', 'http-server', 'watch']);

};
