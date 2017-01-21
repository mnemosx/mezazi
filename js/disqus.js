var disqus_config = function () {
  this.page.url = 'https://mnemosx.github.io/mezazi/atsauksmes';
  this.page.identifier = 'mezazi-atsauksmes';
  this.callbacks.onReady = [function ()
    {
      var el = document.querySelector('.disqus-placeholder');
      if (el.classList)
        el.classList.add('is-hidden');
      else
        el.className += ' ' + 'is-hidden';
                            }];
};

(function () { // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement('script');
  s.src = '//mnemosx-github-io-mezazi.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();