# metalsmith-intensedebate

[![build-flag](https://travis-ci.org/boaromayo/metalsmith-intensedebate.svg)](https://travis-ci.org/boaromayo/metalsmith-intensedebate)

<img src="/intensedebate-logo.jpg" alt="intensedebate-logo" width="225" height="150" />

A plugin allowing [intensedebate](http://www.intensedebate.com) comments and counter in [Metalsmith](http://metalsmith.io/).

## Installation

To install, type this command on node.js:

    $ npm install metalsmith-intensedebate
  
## Usage (Javascript)

To use, place `metalsmith-intensedebate` in `build.js` or the file where your site is generated:

```js
const Metalsmith    = require('Metalsmith');
const intensedebate = require('metalsmith-intensedebate');

Metalsmith(__dirname)
  .use(intensedebate({
    url: 'your-site.org', // Your website where you want to place comments
    sitename: 'your-site' // The website where you registered IntenseDebate plugins at
    acct_id: '324520302' // Your id key here
  })); // Ideally, place before 'metalsmith-layouts'
```

## Usage (CLI)

Place into your `metalsmith.json` file like so:

```json
{
  "plugins": {
    "metalsmith-intensedebate": {
      "url": "your-site.org",
      "acct_id": "3234235asomethig"
    }
  }
}
```

## Parameters

### url - required
  ```String``` - Shows web URL to create the intensedebate comments.

### acct_id - required
  ```String``` - Account ID key for site to install comments, if given.

### sitename
  ```String``` - IntenseDebate account name for your site to generate intensedebate comments.

### post_id
 ```String``` - ID key noted for a specific comment.

### counter
 ```String``` - class name for css file to load comment counter.