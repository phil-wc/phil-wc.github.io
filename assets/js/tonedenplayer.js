(function() {
  var script = document.createElement("script");

  script.type = "text/javascript";
  script.async = true;
  script.src = "//sd.toneden.io/production/v2/toneden.loader.js";

  var entry = document.getElementsByTagName("script")[0];
  entry.parentNode.insertBefore(script, entry);
}());

ToneDenReady = window.ToneDenReady || [];
ToneDenReady.push(function() {

  ToneDen.configure({
    "soundcloudConsumerKey": "7f3673aff74a6fe5cf24893e4c68ebe7"
  });

  ToneDen.player.create({
    "dom": "#js-player-container-default",
    "skin": "light",
    "shrink": false,
    "visualizerType":"waves",
    "urls": ['https://soundcloud.com/phil_wc/sets/reverbtheme']
  });

  ToneDen.player.create({
    "dom": "#js-player-container-mobile",
    "skin": "light",
    "shrink": false,
    "visualizerType":"waves",
    "urls": ['https://soundcloud.com/phil_wc/sets/reverbtheme']
  });
});