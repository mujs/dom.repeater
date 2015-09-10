dom.repeater
=============

A [dom plugin](https://github.com/mujs/dom) to repeat elements

Usage
-----

```html
<div class="repeater-containter">
  <div id="repeatme">
    <input />
  </div>
</div>

<button id="repeat">repeat</button>
```

```js
var dom    = require('dom').use({
  on       : require('dom.on'),
  repeater : require('dom.repeater')
});

var repeat = dom('#repeatme').repeater();
dom('#repeat').on('click', repeat);
```
