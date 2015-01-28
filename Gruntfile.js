module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['pages/**'],
                        dest: '_build/',
                        filter: 'isFile',
                    }
                ]
            },
        },
        uglify: {
            development: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    '_build/js/script.min.js': ['js/script.js']
                }
            },
            production: {
                files: {
                    '_build/js/script.min.js': ['js/script.js']
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
                        dest: '_site/img/',
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
                        dest: '_site/img/',
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
                        dest: '_site/img/',
                        ext: '.gif'
                    }
                ]
            }
        },
        notify: {
            html: {
                options: {
                    title: 'HTML files copied!',
                    message: 'all good!'
                }
            },
            styles: {
                options: {
                    title: 'Styles Compiled :)',
                    message: 'all good!'
                }
            },
            images: {
                options: {
                    title: 'Images Optimizer :)',
                    message: 'all good!'
                }
            },
            scripts: {
                options: {
                    title: 'JS Compiled! :)',
                    message: ':)'
                }
            }
        },
        watch: {
            styles: {
                files: ['_sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'notify:styles']
            },
            html: {
                files: ['pages/**/*.html'],
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

    grunt.registerTask('default', ['copy', 'newer:imagemin', 'sass', 'autoprefixer', 'uglify:development', 'watch']);
    grunt.registerTask('production', ['copy', 'newer:imagemin', 'sass', 'autoprefixer', 'uglify:production']);
};