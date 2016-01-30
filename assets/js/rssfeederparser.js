$(function() {
  var ajaxOptions = { url: '/feed.xml', type: 'GET', dataType: 'xml'};
  $.ajax(ajaxOptions)
  .done(function(data) {
    var json_rss = RSSUtils.parseRSSFeed(data);
    RSSUtils.generateNewsPost(json_rss);
  });
});

var RSSUtils = {
  parseRSSFeed: function (data){
    var rsslist = [];
    var $xml = $(data);

    $xml.find("item").each(function() {
      var $this = $(this),
        item = {
          title: $this.find("title").text(),
          published: $this.find("pubDate").text(),
          urlPath: $this.find("link").text(),
          author: $this.find("author").text()
      };
      rsslist.push(item);
    });
    return rsslist;
  },
  generateNewsPost: function (rss) {
    var template = $('.news-item-template').html();

    // slice the array, limited to three post
    var rssLimitedPost = _.slice(rss, 0, 3);

    _.each(rssLimitedPost, function (post) {
      var markup = template;

      markup = markup.replace('__URLPATH__',post.urlPath);
      markup = markup.replace('__TITLE__',post.title);
      markup = markup.replace('__PUBLISHED__',moment(post.published).format('MMMM, D YYYY'));
      markup = markup.replace('__AUTHOR__',post.author ? post.author : 'CHAPAVICH');

      $('.recent-news-list').append(markup);
    });
  }
}