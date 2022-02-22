/* global module */

/**
 * Initialize Grunt config.
 * @param {Object} grunt
 * @param {Function} grunt.initConfig
 * @param {Function} grunt.loadNpmTasks
 * @param {Function} grunt.registerTask
 */
function initGruntConfig(grunt) {
    'use strict';
    grunt.initConfig(
        {
            cssmin: {
                combine: {
                    files: {
                        'dist/main.css': ['css/*.css']
                    }
                }
            },
            csslint: {
                options: {
                    'bulletproof-font-face': false
                },
                css: {
                    src: ['css/*.css']
                }
            },
            uglify: {
                combine: {
                    files: {
                        'dist/main.js': ['js/*.js']
                    }
                }
            },
            jshint: {
                js: {
                    src: 'js/*.js'
                },
                Gruntfile: {
                    src: 'Gruntfile.js'
                }
            },
            fixpack: {
                package: {
                    src: 'package.json'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-fixpack');

    grunt.registerTask('default', ['cssmin', 'uglify']);
    grunt.registerTask('lint', ['csslint', 'jshint', 'fixpack']);
}

module.exports = initGruntConfig;
