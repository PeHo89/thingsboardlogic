import { ThingsboardLogicPage } from './app.po';

describe('thingsboardlogic-business App', () => {
  let page: ThingsboardLogicPage;

  beforeEach(() => {
    page = new ThingsboardLogicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
