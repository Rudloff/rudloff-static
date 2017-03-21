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
                    'important': 2,
                    'adjoining-classes': 2,
                    'known-properties': 2,
                    'box-sizing': 2,
                    'box-model': 2,
                    'overqualified-elements': 2,
                    'display-property-grouping': 2,
                    'bulletproof-font-face': false,
                    'compatible-vendor-prefixes': 2,
                    'regex-selectors': 2,
                    'errors': 2,
                    'duplicate-background-images': 2,
                    'duplicate-properties': 2,
                    'empty-rules': 2,
                    'selector-max-approaching': 2,
                    'gradients': 2,
                    'fallback-colors': 2,
                    'font-sizes': 2,
                    'font-faces': 2,
                    'floats': 2,
                    'star-property-hack': 2,
                    'outline-none': 2,
                    'import': 2,
                    'ids': 2,
                    'underscore-property-hack': 2,
                    'rules-count': 2,
                    'qualified-headings': 2,
                    'selector-max': 2,
                    'shorthand': 2,
                    'text-indent': 2,
                    'unique-headings': 2,
                    'universal-selector': 2,
                    'unqualified-attributes': 2,
                    'vendor-prefix': 2,
                    'zero-units': 2
                },
                css: {
                    src:  ['css/*.css']
                }
            },
            'ftp-deploy': {
                prod: {
                    auth: {
                        host: 'ftp.ouvaton.coop',
                        port: 21
                    },
                    src: './',
                    dest: '/httpdocs/',
                    exclusions: ['.git', 'node_modules', '.ftppass']
                }
            },
            surge: {
                staging: {
                    options: {
                        project: './',
                        domain: 'https://rudloff.surge.sh'
                    }
                }
            },
            bower_concat: {
                js: {
                    dest: {
                        'js': 'dist/_bower.js'
                    },
                    exclude: ['montserrat-googlefont']
                }
            },
            uglify: {
                combine: {
                    files: {
                        'dist/main.js': ['js/*.js']
                    }
                },
                bower: {
                    files: {
                        'dist/bower.js': ['dist/_bower.js']
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
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-surge');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-fixpack');

    grunt.registerTask('default', ['cssmin', 'bower_concat', 'uglify']);
    grunt.registerTask('lint', ['csslint', 'jslint', 'fixpack', 'jsonlint']);
    grunt.registerTask('prod', ['lint', 'default', 'ftp-deploy']);
    grunt.registerTask('staging', ['default', 'surge']);
};
