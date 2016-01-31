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



(should be literally easy to understand)
```

What you needed to do is just call the class into it.

**REMARKS: both button works only anchor tag `<a></a>`**

---

# Regarding CSS

You **DON'T fix CSS in Complied files** (`assets/css/main/.css`). Unless it's from third-party library, e.g. unslider. When you want to fix something. Go to the `_sass` folder and find it's corresponding file name the thing you want to fix. e.g. You want to fix the button, go to `buttons.sass`

Here's the tricky part. Sass is not CSS but it is. Simple rule is, when you write Sass, you don't needed semi-colon to end statement (`;`), you don't need curly brackets (`{}`). Just two indents. Please look at how I wrote it.

When you want it to complie, you need to run `Sass Complier`, please simply execute this command on the root project folder:

```
sass --sourcemap=none -w _sass/main.sass:assets/css/main.css
```

Then, anytime when you make changed on those `.sass` file. It will complied to CSS automatically.