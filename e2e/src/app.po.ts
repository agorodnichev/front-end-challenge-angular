import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getBrowserTitle(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
