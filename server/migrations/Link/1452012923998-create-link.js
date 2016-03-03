/**
 * Link CreateLink Migration
 */
Migrations.add({
  version: 1452012923998,
  name: 'Link CreateLink',
  up: function () {
    Links.insert({
      source: 'WIRED',
      sourceUrl: 'http://www.wired.com/',
      categoryUrls: [
        'http://www.wired.com/category/insights/',
        'http://www.wired.com/category/design/',
        'http://www.wired.com/category/science/'
      ],
      rssUrls: [
        'http://www.wired.com/category/insights/feed/',
        'http://www.wired.com/category/design/feed/',
        'http://www.wired.com/category/science/feed/'
      ]
    });
  },
  down: function () {
    //
  }
});
