import { ResPage } from './app.po';

describe('res App', () => {
  let page: ResPage;

  beforeEach(() => {
    page = new ResPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
