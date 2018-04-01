const $ = require('jquery');
const GeoLocatorBase = require('./GeoLocatorBase');

const API_KEY = 'AIzaSyDFx6VAGa_x0GiGaROvl0-Q9XhqbKZbvqc';

class GoogleGeoLocator extends GeoLocatorBase {
  async locate(considerIp) {
    try {
      const position = await this.getCurrentPosition(considerIp);
      this.log(position);
    } catch(e) {
      alert('現在地を取得できませんでした。');
      console.error(e);
    }
  }

  getCurrentPosition(considerIp) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this.url,
        type: 'POST',
        contentType: 'application/json',
        data: `{
          considerIp: ${(considerIp + '')}
        }`,
      }).done(resolve).fail(reject);
    })
  }

  log(position) {
    super.log(
      position.location.lat
      , position.location.lng
      , position.accuracy
    );
  }

  get url() {
    return 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + API_KEY;
  }

  get name() {
    return 'Google GeoLocation API';
  }
}

module.exports = GoogleGeoLocator;