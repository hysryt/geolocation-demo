const BrowserGeoLocator = require('./BrowserGeoLocator');
const GoogleGeoLocator = require('./GoogleGeoLocator');

const browserLocator = new BrowserGeoLocator();
const googleLocator = new GoogleGeoLocator();

/**
 * ブラウザの Geolocation API で現在地を取得
 */
window.locateByBrowserGeolocationApi = function() {
  browserLocator.locate();
}

window.locateByGoogleGeolocationApi = function(considerIp) {
  googleLocator.locate(considerIp);
}