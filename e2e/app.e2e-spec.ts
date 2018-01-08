import { AngularLandingPage } from './app.po';

describe('angular-landing App', function() {
  let page: AngularLandingPage;

  beforeEach(() => {
    page = new AngularLandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
