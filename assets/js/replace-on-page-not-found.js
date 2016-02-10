$(function() {
  var htmlMessage = '<p class="subheading">Due to my brand new website, you might click an old link from older permalink url. ' +
                    'For reading old articles please go to my blog archive ' +
                    '<p><a class="button-solid" href="http://phil-wcofficial.tumblr.com/">phil-wcofficial.tumblr.com</a></p>' +
                    'Popular Article: <a class="page-not-found-hyperlink" href="http://www.phil-wc.com/2016/01/27/best-way-to-coop-composer/">Best way to cooperate your film project with a composer.</a>';
  $('.site-heading .subheading').replaceWith(htmlMessage);
});