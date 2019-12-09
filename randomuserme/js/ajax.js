// eslint-disable-next-line no-unused-vars
const Ajax = {
  loadJsonByHandlers (url, successHandler, errorHandler) {
    // eslint-disable-next-line no-undef
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
        successHandler && successHandler(data);
      } else {
        errorHandler && errorHandler(xhr.status);
      }
    };
    xhr.onerror = () => {
      errorHandler && errorHandler('Network Error!');
    };
    xhr.send(null);
  },
  loadJsonByPromise (url) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', url, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
          resolve(data);
        } else {
          reject(xhr.status);
        }
      };
      xhr.onerror = () => {
        reject(Error('Network Error!'));
      };
      xhr.send(null);
    });
  },
  loadJsonPByPromise (url) {
    return new Promise((resolve, reject) => {
      const name = `jsonp${new Date().getTime()}`;
      // eslint-disable-next-line no-param-reassign
      if (url.match(/\?/)) url += `&callback=${name}`;
      // eslint-disable-next-line no-param-reassign
      else url += `?callback=${name}`;

      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      window[name] = (data) => {
        document.getElementsByTagName('head')[0].removeChild(script);
        script = null;
        delete window[name];

        resolve(data);
      };

      document.getElementsByTagName('head')[0].appendChild(script);
    });
  },
};
