# phil-wc.github.io

theme by [Start Bootstrap](http://startbootstrap.com/).

###[View Live Demo &rarr;](http://phil-wc.github.io)

## Before You Begin

In the _config.yml file, the base URL is set to /startbootstrap-clean-blog-jekyll which is this themes gh-pages preview. It's recommended that you remove the base URL before working with this theme locally!

It should look like this:
`baseurl: ""`

## What's Included

A full Jekyll environment is included with this theme. If you have Jekyll installed, simply run `jekyll serve` in your command line and preview the build in your browser. You can use `jekyll serve --watch` to watch for changes in the source files as well.

A Grunt environment is also included. There are a number of tasks it performs like minification of the JavaScript, compiling of the LESS files, adding banners to keep the Apache 2.0 license intact, and watching for changes. Run the grunt default task by entering `grunt` into your command line which will build the files. You can use `grunt watch` if you are working on the JavaScript or the LESS.

You can run `jekyll serve --watch` and `grunt watch` at the same time to watch for changes and then build them all at once.

## component

# Regarding utitities class


Here's availble class for using to override colors.

```
.heading-color
  color: #ffffff !important

.text-white
  color: #ffffff !important

.text-black
  color: #000000 !important

.text-primary-brand-color
  color: #0085A1 !important

.text-primary-site-color
  color: #3384a0 !important

.text-primary-content-color
  color: #404040 !important

.text-hyperlink-primary-color
  color: #3384a0 !important

.text-hyperlink-secondary-color
  color: #00b3fe !important



// Button class

.button-solid

.button-solid-black



// font-weight override

.light-font-weight
  font-weight: 300 !important

.normal-font-weight
  font-weight: 400 !important

.thai-font-override
  font-family: 'Kanit', sans-serif


(should be literally easy to understand)
```

What you needed to do is just call the class into it.

**REMARKS: both button works only anchor tag `<a></a>`**
