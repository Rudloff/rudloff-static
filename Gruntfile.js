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
                    src:  ['css/*.css']
                }
            },
            'ftp-deploy': {
                build: {
                    auth: {
                        host: 'ftp.ouvaton.coop',
                        port: 21,
                    },
                    src: './',
                    dest: '/httpdocs/',
                    exclusions: ['.git', 'node_modules', '.ftppass']
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('lint', ['csslint']);
};
