### 1. sizzle的体积

sizzle是jQuery基于CSS选择器的选择器引擎。这就是为啥`$('div.active')`可以操作一组元素。我知道sizzle占了jQuery的很大一部分体积。但我真没想到这玩意占了这么大。选择器无疑是jQuery最大的特性，在jQuery源码中只有一行。但是根据我的的计算它的体积占了整个jQuery的22%。jQuery中的第二大特性`$.ajax`的体积才占了8%。

### 2. $.grep

$.grep很像underscore中的`_.filter`。它接受两个参数，一个包含被操作元素的数组和一个函数。`$.grep`的返回值是通过函数后为`true`的值。

### 3. Bubbling caveats（冒泡警告）

jQuery专门禁止了`load`类型的冒泡事件，通过`noBuddle: true`来标记任何`load`事件。所以图片加载完成的事件就没法冒泡到`window`这一层。（这会错误的触发`window.onload`事件）

译者注：冒泡时间指在DOM中事件会从点击的DOM向上级开始直到window对象进行事件传递

### 4. 默认的动画速度

jQuery通过快速的改变元素的样式来做成动画，每次属性的改变都称之为一个『小瞬间』，默认的动画速度是每13毫秒进行一个『小瞬间』。你可以通过给`jQuery.fx.interval`来设置一个整数以设置『小瞬间』的间隔。

### 5. $.fn.addClass接受函数类型的参数

我们通常给`$.fn.addClass`传递一个字符型类名以给某个元素增加样式类(.class)。你或许不知道它同样接受函数型的参数，但是你必须返回一个以空格分开的类名以应用到所选择的元素上。小技巧：`$.fn.addClass`所选择的元素会作为参数传递到你所自定义的函数里。也就是说你可以通过这个特性构建更机智的类名。

### 6. 那么$.fn.removeClass呢？

机智的你应该能想到这个函数也能向上条一样接受一个函数型式的参数，同样它也会自动接受所选元素的下标(index)。

### 7. :empty伪类

这个伪类可以很方便的选择没有子元素的DOM。

### 8. :lt和:gt伪类

这俩伪类会过滤已选择的元素，比如`$('div:gt(2)')`会返回除过前三个元素的剩下元素（2代表3因为是从0开始0,1,2）。如果你提供了一个负整数作为参数那么就会从最后向前匹配。

译者注：如果你传入-5就会选择最后4个，亲测。

### 9. $(document).ready()使用了promise

jQuery吃自己的狗粮（用自己提供的方法），我们会看到`$(document)`.ready会检查所有DOM加载完毕后再继续执行。

译者注：promise是javascript中的一种异步队列机制，比较复杂，具体大家可以自行Google

### 10. $.type

我敢保证我们都通过`typeof`来检测一个变量/常量的类型，但是你知道jQuery提供了一个`.type()`方法么？jQuery提供的比浏览器自带的更加聪明。例如`typeof (new Number(3))`会返回一个`object`，然而`$.type(new Number(3))`会返回一个`number`。原作者注：`$.type`在针对一个`object`来检测是会通过`.valueOf`来返回值。这样就可以检测一个对象真正的数据类型了。

### 11. $.fn.queue

你可以通过`$('div').queue()`来审查某个元素的效果，如果你想要知道某个元素上还剩下多少动画效果这将会很有用。更有用的是你可以直接操作队列来加入你自己的效果。

来自jQuery的手册：

```js
$( document.body ).click(function() {
  $( "div" )
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 )
    .queue(function() {
      $( this ).addClass( "newcolor" ).dequeue();
    })
    .animate({ left: "-=200" }, 500 )
    .queue(function() {
      $( this ).removeClass( "newcolor" ).dequeue();
    })
    .slideUp();
});
```

### 12. 属性为disable的元素是禁止Click事件的

jQuery自动不处理属性为disable的元素，一个非常好的优化帮助你检查你自己的代码逻辑。

### 13. $.fn.on 接受一个object

你知道`$.fn.on`可以让一个对象一次性检测多个事件吗？

jQuery手册中的例子：

```js
$( "div.test" ).on({
  click: function() {
    $( this ).toggleClass( "active" );
  }, mouseenter: function() {
    $( this ).addClass( "inside" );
  }, mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});
```

### 14. $.camelCase

这个实用的工具会帮你把中划线命名的字符串转化为骆驼峰命名法的字符。

译者注：`$.camelCase('some-variable');`会输出`someVariable`

### 15. $.active

调用`$.active`会返回当前正在进行的`XHR`查询，这可以用于你想要限制`XHR`请求数量的时候。

### 16. $.fn.parentsUntil / $.fn.nextUntil / $.fn.prevUntil

他们非常像`.parents()` `next()`和`.prev()`方法，但是我并不知道他们存在另一个版本。事实上这些方法会选择你所要选择的所有元素直到触发终止条件。

### 17. $.fn.clone的参数

当你使用`.clone()`来复制一个元素的时候，你可以通过设置第一个参数为`true`来复制该元素的`data`属性以及事件。

译者注：根据最近的项目总结来看，clone是做js动态插入DOM最好的工具了，HTML中写入模板并插入hidden类，js里复制并去掉hidden类，起到了html模板的作用。比以前直接在js里生成DOM爽很多。

### 18. $.fn.clone的其他参数

除上述之外，你可以通过增加`true`参数来复制一个元素的`data`属性和事件，这叫做『深度复制。该函数的第二个参数默认会和第一个一样（参数默认值为：`false`）也就是说如果你想传两个参数都为`true`你可以只穿第一个不传第二个参数。因为第二个参数默认会和第一个参数一样。
