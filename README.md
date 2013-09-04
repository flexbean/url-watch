# url-watch

Trigger an event when a remote file header changes

## Install

```
npm install url-watch
```

## Usage

```
var url = require('url-watch');

url.watch('http://somedomain.com/path.htm').on('change', function(header) {
  console.log(header);
})
```

## License: MIT
