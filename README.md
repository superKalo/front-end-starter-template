#Hello DevLabs!

Нека да вдигнем нивото на нашия Front-end код и workflow, заедно. :)

<img src="https://avatars0.githubusercontent.com/u/10864739?v=3&s=200" alt="DevLabs" width="100" />

##NodeJS
>Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. http://nodejs.org

All the productivity plugins we use run on top of NodeJS :)

###NPM
>npm is a package manager for JavaScript, and is the default for Node.js. As of Node.js version 0.6.3, npm is bundled and installed automatically with the environment. npm runs through the command line and manages dependencies for an application.

##Bower:
>Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you. http://bower.io/#install-bower

##Grunt
>In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it through a Gruntfile, a task runner can do most of that mundane work for you—and your team—with basically zero effort.
http://gruntjs.com/getting-started

###Grunt Plugins:
- Compile SASS/SCSS to CSS: https://github.com/gruntjs/grunt-contrib-sass
- Parse CSS and add vendor-prefixed CSS properties using the Can I Use database: https://github.com/nDmitry/grunt-autoprefixer
- Minify your images: https://github.com/gruntjs/grunt-contrib-imagemin
- Copy files and folders into the _build folder: https://github.com/gruntjs/grunt-contrib-copy
- Minify your JS: https://github.com/gruntjs/grunt-contrib-uglify
- Configure Grunt tasks to run with newer files only: https://github.com/tschaub/grunt-newer
- Run tasks whenever watched files change: https://github.com/gruntjs/grunt-contrib-watch
- Run shell commands as s Grunt task: https://github.com/sindresorhus/grunt-shell
- Run grunt tasks concurrently to decrease build time: https://github.com/sindresorhus/grunt-concurrent

##Sublime Linters:
- SublimeLinter is a plugin for Sublime Text 3 that provides a framework for linting code. Whatever language you code in, SublimeLinter can help you write cleaner, better, more bug-free code. http://sublimelinter.readthedocs.org/en/latest/
  - SublimeLinter plugin for JavaScript, using jshint: https://github.com/SublimeLinter/SublimeLinter-jshint
  - SublimeLinter plugin for Sass scss syntax, using scss-lint: https://github.com/attenzione/SublimeLinter-scss-lint

##.sublime-project Configuration File:
>Projects in Sublime Text are made up of two files: the sublime-project file, which contains the project definition, and the sublime-workspace file, which contains user specific data, such as the open files and the modifications to each.
As a general rule, the sublime-project file would be checked into version control, while the sublime-workspace file would not. https://www.sublimetext.com/docs/3/projects.html