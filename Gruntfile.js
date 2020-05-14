/*jslint node: true */
module.exports = function (grunt) {
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
            jslint: {
                js: {
                    src: 'js/*.js'
                },
                Gruntfile: {
                    src: 'Gruntfile.js'
                }
            },
            jsonlint: {
                manifests: {
                    src: '*.json',
                    options: {
                        format: true
                    }
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
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-fixpack');

    grunt.registerTask('default', ['cssmin', 'uglify']);
    grunt.registerTask('lint', ['csslint', 'jslint', 'fixpack', 'jsonlint']);
};
