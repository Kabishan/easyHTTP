function easyHTTP() {
  this.http = new XMLHttpRequest();
}

/* GET Request
   Some notes:
   
   We need to 'let self = this' because of function
   scope issues that were later mitigated using arrow
   functions. Using 'this' inside of a function would
   make 'this' actually refer to the function, not
   the 'this' in 'this.http'. Arrow functions fixed this
   issue.

   We need to send a callback function, otherwise the
   client will receive an 'undefined' response. This is
   because the response, which is 'undefined' when declared,
   will be returned to the client prior to the data 
   actually being retrieved from the server.
*/
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};

// POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;

  /* Response will be empty because post 
     will be deleted */
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};
