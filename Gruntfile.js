module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['*.html'],
                    dest: '_build/',
                    filter: 'isFile',
                }]
            }
        },
        uglify: {
            production: {
                files: {
                    '_build/js/script.min.js': ['js/script.js']
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    '_build/css/style.min.css': 'sass/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                map: true
            },
            no_dest: {
                src: '_build/css/style.min.css'
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                {
                        expand: true,
                        cwd: 'img',
                        src: ['**/*.png'],
                        dest: '_build/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'img',
                        src: ['**/*.jpg'],
                        dest: '_build/img/',
                        ext: '.jpg'
                    }
                ]
            },
            svg: {
                files: [
                    {
                        expand: true,
                        cwd: 'img',
                        src: ['**/*.svg'],
                        dest: '_build/img/',
                        ext: '.svg'
                    }
                ]
            },
            gif: {
                files: [
                    {
                        expand: true,
                        cwd: 'img',
                        src: ['**/*.gif'],
                        dest: '_build/img/',
                        ext: '.gif'
                    }
                ]
            }
        },
        processhtml: {
            dist: {
              options: {
                  process: true,
              },
              files: [{
                  expand: true,
                  cwd: '_build',
                  src: ['**/*.html'],
                  dest: '_build',
                  ext: '.html'
              }]
            }
        },
        notify: {
            html: {
                options: {
                    title: 'Done!',
                    message: 'HTML files copied!'
                }
            },
            styles: {
                options: {
                    title: 'Done!',
                    message: 'Styles compiled!'
                }
            },
            images: {
                options: {
                    title: 'Done!',
                    message: 'Images optimized!'
                }
            },
            scripts: {
                options: {
                    title: 'Done',
                    message: 'JS Optimized'
                }
            },
            done: {
                options: {
                    title: 'Done',
                    message: ':)'
                }
            }
        },
        shell: {
            clean: {
              command: 'rm -rf _build/*'
            }
        },
        watch: {
            styles: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'notify:styles']
            },
            html: {
                files: ['*.html'],
                tasks: ['copy', 'notify:html']
            },
            images: {
                files: ['img/**/*.{png,jpg,gif,svg}'],
                tasks: ['newer:imagemin', 'notify:images']
            }
        },
        concurrent: {
            target2: ['autoprefixer', 'notify:done']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('default', ['copy', 'newer:imagemin', 'sass', 'notify:done', 'watch']);
    grunt.registerTask('clean', ['shell:clean']);
    grunt.registerTask('production', ['copy', 'processhtml', 'newer:imagemin', 'sass', 'autoprefixer', 'uglify', 'notify:done']);
};
