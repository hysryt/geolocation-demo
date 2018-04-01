const GeoLocatorBase = require('./GeoLocatorBase');

/**
 * ブラウザの Geolocation API で現在地を取得するクラス
 */
class BrowserGeoLocator extends GeoLocatorBase {
  async locate() {
    if (! navigator.geolocation) {
      this.logError("ブラウザが Geolocation API に対応していません。");
      return; 
    }

    try {
      const position = await this.getCurrentPosition();
      this.log(position);

    } catch(e) {
      this.logNotLocatedError(e);
    }
  }

  get name() {
    return 'Browser Geolocation API';
  }

  log(position) {
    super.log(
      position.coords.latitude
      , position.coords.longitude
      , position.coords.accuracy
    );
  }

  /**
   * 現在地を取得する。
   * タイムアウトの時間計測は、ユーザにGPS使用確認ダイアログを表示した時点から始まるので、
   * ユーザの操作が遅いとタイムアウト扱いになってしまう点に注意。
   */
  async getCurrentPosition() {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
}

module.exports = BrowserGeoLocator;