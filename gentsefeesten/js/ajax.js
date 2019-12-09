function getJSON (url, successHandler, errorHandler, data = null) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url, true);
  xhr.onload = () => {
      if(xhr.status == 200) {
          var data = (!xhr.responseType)?JSON.parse(response):xhr.response;
          successHandler && successHandler(data);
      } else {
          errorHandler && errorHandler(xhr.status);
      }
  };
  xhr.onerror = function() {
      errorHandler && errorHandler('Network Error!');
  };
  xhr.send(null);
}