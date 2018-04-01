const $ = require('jquery');

class GeoLocatorBase {
  get name() {
    throw new Error('name() を実装してください。');
  }

  /**
   * 取得した情報をログ出力
   * @param {number} lat - 緯度
   * @param {number} lng - 経度
   * @param {number} accuracy - 精度（メートル単位での誤差）
   */
  log(lat, lng, accuracy) {
    $('#log').html(`
      <b>${this.name}で取得</b><br>
      緯度：${lat}<br>
      経度：${lng}<br>
      精度：${accuracy}m
    `);

    this.setPositionToMap(lat, lng);
  }

  logNotLocatedError(error) {
    alert('現在地を取得できませんでした。');
    console.error(error);
  }

  /**
   * エラーログを出力
   * @param {string} message 
   */
  logError(message) {
    console.log(message);
  }

  setPositionToMap(lat, lng) {
    const position = {lat, lng};

    const map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 8
    });

    new google.maps.Marker({ position, map });
  }
}

module.exports = GeoLocatorBase;