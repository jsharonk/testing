var models = require('../models');
var Page = models.Page;
  // var page = Page.build();

describe('Page model', function () {

  describe('Virtuals', function () {

    beforeEach('shared page document', function() {
        var page = Page.build();

    });
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"');
      page.urlTitle = 'urlTitle';
      expect(page.route).to.equal('/wiki/' + page.urlTitle);
    });

    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML');


    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});
