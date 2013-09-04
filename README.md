# url-watch

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
