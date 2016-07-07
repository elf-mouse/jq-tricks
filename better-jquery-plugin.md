## 10条建议让你创建更好的jQuery插件

### 1. 把你的代码全部放在闭包里面

```js
(function($)  {
  // code here
})(jQuery);
```

### 2. 提供插件的默认选项

```js
var defaultSettings = {
  mode: 'Pencil',
  lineWidthMin: 0,
  lineWidthMax: 10,
  lineWidth: 2
};
settings = $.extend({}, defaultSettings, settings || {});
```

### 3. 使用返回一个元素

```js
$.fn.wPaint = function(settings) {
  return this.each(function() {
    var elem = $(this);
    // run some code here
  });
};
```

### 4. 一次性代码放在主循环以外

```js
var defaultSettings = {
  mode: 'Pencil',
  lineWidthMin: 0,
  lineWidthMax: 10,
  lineWidth: 2
};
settings = $.extend({}, defaultSettings, settings || {});

$.fn.wPaint = function(settings) {
  return this.each(function() {
    var elem = $(this);
    // run some code here
  });
};
```

### 5. 为什么要设置 Class Prototyping

* 它可以节省很多内存，因为可以不用重复创建这些方法。
* 引用一个现成的方法比重新创建一个好快很多。

### 6. 如何设置 Class Prototyping

```js
function Canvas(settings) {
  this.settings = settings;
  this.draw = false;
  this.canvas = null;
  this.ctx = null;
  return this;
}

Canvas.prototype = {
  generate: function() {
    // generate code
  }
};
```

### 7. 使用 “this” 对象

```js
Canvas.prototype = {
  generate: function() {
    // some code
    var $this = this;
    var buton = // ...some code
    button.click(function() {
      // using this will not be found since it has it's own this
      // use $this instead.
      $this.someFunc($this);
    });
  },
  someFunc: function($this) {
    // won't know what "this" is.
    // use $this instead passed from the click event
  }
};
```

### 8. 在每一个对象中保存设置

```js
function Canvas(settings) {
  this.settings = settings;
  return this;
}
```

### 9. 分离你的Prototype方法逻辑

参考__Color Picker__

* `generate()`
* `appendColors()`
* `colorSelect()`
* `colorHoverOn()`
* `colorHoverOff()`
* `appendToElement()`
* `showPalette()`
* `hidePalette()`

### 10. 提供 Setter/Getter 选项

```js
var lineWidth = $('#container').wPaint('lineWidth');
$('#container').wPaint('lineWidth', 5);
```
