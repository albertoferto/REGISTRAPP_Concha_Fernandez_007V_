import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  async getButtonInicio():Promise<string> {
    return element(by.css('[routerLink="/inicio-sesion"]')).getText();
  }
/*
  async getTitleTextH2():Promise<string> {
    return element(by.css('app-root h2')).getText();
  }

  async getTitlePar():Promise<string> {
    return element(by.css('app-root .par')).getText();
  }

*/
}
