const API = {
  baseUrl: "https://cms.meamacollect.ge/meama-collect/api/client/",
  sendRequest: function (url, method = "GET", data) {
    return fetch(this.baseUrl + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then((text) => {
        throw text;
      });
    });
  },
  getAllData: function (param) {
    return this.sendRequest(param).then((json) => json);
  },
  getSingleData: function (param) {
    return this.sendRequest(param).then((json) => json);
  },
  switchLanguage: function () {
    return this.sendRequest("languages").then((json) => json);
  },
  getFooterData: function (param) {
    return this.sendRequest(param).then((json) => json);
  }
};

export default API;
