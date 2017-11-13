# metalsmith-intensedebate

A plugin allowing [intensedebate](http://www.intensedebate.com) comments and counter in [Metalsmith](http://metalsmith.io/).

## Install

To install, use this cmd on node.js:

  `$ npm install --save metalsmith-intensedebate`
  
## Use

To use, place `metalsmith-intensedebate` in `build.js` or the file where your static site is generated:

```js
const Metalsmith    = require('Metalsmith');
const intensedebate = require('metalsmith-intensedebate');

Metalsmith(__dirname)
  ... // Other plugins here
  .use(intensedebate({
    url: 'your-site.org',
    shortname: 'your-name',
    acct_id: // Your id key here
  })); // Ideally, place before 'metalsmith-layouts'
  ... // More plugins
```

## Options

### url - required
  ```String``` - Shows web URL to create the intensedebate comments.

### acct_id - required
  ```String``` - Account ID key for site to install comments, if given.

### shortname
  ```String``` - shortname for your site to create intensedebate comments.

## CLI

This plugin can also be inserted into the CLI, or the `metalsmith.json` file like so:

```json
{
  "plugins": {
    "metalsmith-intensedebate": {
      "url": "your-site.org",
      "shortname": "your-name",
      "acct_id": "3205fsomething"
    }
  }
}
```
