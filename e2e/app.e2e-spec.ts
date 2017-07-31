import { MgCvPage } from './app.po';

describe('mg-cv App', () => {
  let page: MgCvPage;

  beforeEach(() => {
    page = new MgCvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
