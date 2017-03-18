import { CapillaryFrontendPage } from './app.po';

describe('capillary-frontend App', function() {
  let page: CapillaryFrontendPage;

  beforeEach(() => {
    page = new CapillaryFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
