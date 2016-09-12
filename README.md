# Controller.js

A simple mirror of [Controller.js](http://github.com/samiare/Controller.js) to allow for installation and use with `npm`. Please direct all issues and pull requests to the mian repository.

## Install

```bash
npm install JosephusPaye/Controller.js --save
```

## Use

```js
import Controller from 'controller.js';
import ControllerLayouts from 'controller.js/dist/Controller.layouts.js';

Controller.layouts.register(ControllerLayouts);

// Use it or assign to a global
window.Controller = Controller;
```
