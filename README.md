# Hello DevLabs!

Нека да вдигнем нивото на нашия Front-end код и workflow, заедно :)

<img src="https://avatars0.githubusercontent.com/u/10864739?v=3&s=200" alt="DevLabs" width="100" />

## Sticky Footer Fix
>Footers on web pages are a great place to chuck copyright information, contact links, and quick navigational stuff. Visitors are trained to look to the bottom of pages to find these types of things, so why not help them out? One problem is that on pages that are a bit vertically challenged, the footer might end up in the middle of the page instead of down at the bottom of the browser window where it should be.
More info: https://css-tricks.com/snippets/css/sticky-footer/

## Bower
>Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you. http://bower.io/#install-bower

- **bower.json** packages are defined by this manifest file http://bower.io/docs/creating-packages/
- **.bowerrs** bower configuration file http://bower.io/docs/config

Run this command in the project directory to install all libraries listed in bower.json in the **lib directory**:
```shell
bower install
```

## Sublime Linters:
- SublimeLinter is a plugin for Sublime Text 3 that provides a framework for linting code. Whatever language you code in, SublimeLinter can help you write cleaner, better, more bug-free code. http://sublimelinter.readthedocs.org/en/latest/
  - SublimeLinter plugin for JavaScript, using jshint: https://github.com/SublimeLinter/SublimeLinter-jshint (**configuration file: js/.jsintrc**)
  - SublimeLinter plugin for Sass scss syntax, using scss-lint: https://github.com/attenzione/SublimeLinter-scss-lint (**configuration file: styles/.scss-lint.yml**)

## .sublime-project Configuration File
>Projects in Sublime Text are made up of two files: the sublime-project file, which contains the project definition, and the sublime-workspace file, which contains user specific data, such as the open files and the modifications to each.
As a general rule, the sublime-project file would be checked into version control, while the sublime-workspace file would not. https://www.sublimetext.com/docs/3/projects.html

## HTML Meta Tags
### Responsive Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Note: don't use a responsive meta tag if your website isn't specifically designed to be responsive and work well at that size, as it will make the experience worse. https://css-tricks.com/snippets/html/responsive-meta-tag/

### HTML5 Shiv
```html
<!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling for Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x. https://github.com/aFarkas/html5shiv

### CSS3 Mediaqueries
```html
<!--[if lt IE 9]>
    <script src="//css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
```

css3-mediaqueries.js is a JavaScript library to make IE 5+, Firefox 1+ and Safari 2 transparently parse, test and apply CSS3 Media Queries. Firefox 3.5+, Opera 7+, Safari 3+ and Chrome already offer native support https://code.google.com/p/css3-mediaqueries-js/

### X-UA-Compatible Meta Tag
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

The X-UA-Compatible meta tag allows web authors to choose what version of Internet Explorer the page should be rendered as. IE11+ have changes to these modes. The version that will be released after IE 11, will only honor X-UA-Compatible meta tag in certain circumstances http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e
