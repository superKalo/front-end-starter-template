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
            development: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    '_build/js/script.min.js': ['lib/jquery/dist/jquery.js', 'js/script.js']
                }
            },
            production: {
                files: {
                    '_build/js/script.min.js': ['lib/jquery/dist/jquery.min.js', 'js/script.js']
                }
            }
        },
        sass: {
            options: {
                sourcemap: 'inline'
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '_build/css/style.css': 'styles/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                map: true
            },
            no_dest: {
                src: '_build/css/style.css'
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
                        src: ['**/*.png', 'favicons/*.ico', 'favicons/*.xml'],
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
                files: ['styles/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'notify:styles']
            },
            html: {
                files: ['*.html'],
                tasks: ['copy', 'notify:html']
            },
            images: {
                files: ['img/**/*.{png,jpg,gif,svg}'],
                tasks: ['newer:imagemin', 'notify:images']
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['uglify:development', 'notify:scripts']
            }
        },
        concurrent: {
            developmentTarget1: ['copy', 'newer:imagemin', 'sass', 'uglify:development'],
            productionTarget1: ['copy', 'newer:imagemin', 'sass', 'uglify:production'],
            target2: ['autoprefixer', 'notify:done']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:developmentTarget1', 'concurrent:target2', 'watch']);
    grunt.registerTask('clean', ['shell:clean']);
    grunt.registerTask('production', ['concurrent:productionTarget1', 'concurrent:target2']);
};