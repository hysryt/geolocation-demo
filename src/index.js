const BrowserGeoLocator = require('./BrowserGeoLocator');

const locator = new BrowserGeoLocator();

/**
 * ブラウザの Geolocation API で現在地を取得
 */
window.locateByBrowserGeolocationApi = function() {
  locator.locate();
}