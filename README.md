# url-watch [![NPM version](https://badge.fury.io/js/url-watch.png)](http://badge.fury.io/js/url-watch) [![Build Status](https://travis-ci.org/flexbean/url-watch.png?branch=master)](https://travis-ci.org/flexbean/url-watch) [![Dependency Status](https://gemnasium.com/flexbean/url-watch.png)](https://gemnasium.com/flexbean/url-watch)

Trigger an event when a remote file header changes

## Install

```
npm install url-watch
```

## Usage

```
var url = require('url-watch');

url.watch({
	url:   'http://somedomain.com/path.htm'
	every: 60*1000,                         // minute
	do:    function(header) {
	  console.log(header);
	}
});
```

## License: MIT
