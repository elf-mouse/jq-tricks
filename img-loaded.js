var timer = null, // 定时器
  isLoad = true; // 控制变量

// 判断图片加载的函数
function imgLoaded(callback) {
  // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
  // 查找所有封面图，迭代处理
  $('.cover').each(function() {
    // 找到为0就将isLoad设为false，并退出each
    if (this.height === 0) {
      isLoad = false;
      return false;
    }
  });
  // 为true，没有发现为0的。加载完毕
  if (isLoad) {
    clearTimeout(timer); // 清除定时器
    // 回调函数
    callback();
    // 为false，因为找到了没有加载完成的图，将调用定时器递归
  } else {
    isLoad = true;
    timer = setTimeout(function() {
      imgLoaded(callback); // 递归扫描
    }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
  }
}

// 判断图片加载状况，加载完成后回调
imgLoaded(function() {
  // 加载完成
});
