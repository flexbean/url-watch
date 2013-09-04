var http = require('http');



function UrlWatch() {
	this.check      = function(check) {
		var options = {
			method: 'HEAD'
		  , host:   check.domain
		  , port:   check.port
		  , path:   check.path
		};
		console.log(options);
		var req     = http.request(options, function(res) {
			var headersString = JSON.stringify(res.headers);
			if (headersString != check.headers) {
			    check.headers = headersString;
			    check.do(req.headers);
			}
		  }
		);
		req.end();
	};


	this.watch       = function(options) {
		options      = options || {};
		this.checks  = this.checks || {};

		var check    = {
			headers  : ''
		  , url      : options.url || 'http://localhost'
		};
		if (!options.port && check.url.substr(0,8) == 'https://') { 
			check.port = 443; 
		}
		var path     = check.url.replace('http://', '').replace('https://', '');
		var parts    = path.split('/');
		check.domain = options.domain || parts[0];
		check.path   = options.path   || parts[1] || '/';
		parts        = check.domain.split(':');
		check.port   = options.port   || parts[1] || 80;
		check.every  = options.every  || 60*1000;
		check.do     = options.do     || function(header) { console.log(header); };

		if (this.checks[this.url]) {
			clearTimeout(this.check[this.url].timerId);
		}
		check.timerId = setTimeout(this.check, check.every, check);
		this.checks[check.url] = check;
	}


	this.cancel = function(url) {
		if (this.checks[url] && this.checks[url].timerId) {
			clearTimeout(this.checks[url].timerId);
			this.checks[url].timerId = false;
		}
	}
}



var urlwatch = new UrlWatch();

module.exports = urlwatch;