module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            dist: {
                src: 'assets/css/main.css',
                dest: 'css/main.min.css'
            }
        },

        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        watch: {
            jekyll: {
                files: [
                    '_layouts/*.html',
                    '_includes/*.html',
                    '_posts/*.md',

                    '_config.yml',
                    'index.html',
                    '404.html'
                ],
                tasks: [
                    'shell:jekyllBuild'
                ],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },
            css: {
                files: [
                    'assets/css/*.css'
                ],
                tasks: [
                    'cssmin'
                ],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },


        }
    });

    grunt.registerTask('default', ['shell:jekyllServe', 'watch']);
    grunt.registerTask('deploy', ['cssmin', 'shell:jekyllBuild']);

};