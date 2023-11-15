// 1. 浮动导航栏
(function () {
  const entry = document.querySelector(".xtx_entry");
  const elevator = document.querySelector(".xtx-elevator");
  window.addEventListener("scroll", function () {
    // 获取页面卷区的头部
    const n = this.document.documentElement.scrollTop;
    // 判断滚动是否超过 300px
    /*
    if (n >= 300) {
      elevator.style.opacity = 1;
    } else {
      elevator.style.opacity = 0;
    }
    */
    // 简化代码
    // entry.offsetTop 相对位置
    elevator.style.opacity = n >= entry.offsetTop ? 1 : 0;
  });
  // 返回顶部
  const backTop = document.querySelector("#backTop");
  // 点击返回
  backTop.addEventListener("click", function () {
    // scrollTop 可读写
    // document.documentElement.scrollTop = 0;
    // scrollTo 方法，滚动到页面最顶端
    window.scrollTo(0, 0);
  });
})();

(function () {
  // 2. 点击导航对应的小模块，跳转到对应大模块位置
  // 获取电梯
  const list = document.querySelector(".xtx-elevator-list");
  list.addEventListener("click", function (e) {
    // 排除最后一个返回键
    if (e.target.tagName == "A" && e.target.dataset.name != null) {
      // 先查找是否有 active 类
      const oldClass = document.querySelector(".xtx-elevator-list .active");
      if (oldClass != null) {
        oldClass.classList.remove("active");
      }
      // 添加新的 active 类
      e.target.classList.add("active");
      // 获取自定义属性
      // console.log(e.target.dataset.name);
      // 根据列表内的自定义属性获取到大盒子的对象
      console.log(
        document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
      );
      /*
      window.scrollTo(
        0,
        document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
      );
      */
      document.documentElement.scrollTop = document.querySelector(
        `.xtx_goods_${e.target.dataset.name}`
      ).offsetTop;
    }
  });

  // 3. 页面滚动到大盒子位置时，导航内对应小盒子显示高亮
  window.addEventListener("scroll", () => {
    // 移除类，保证滚动时没有类高亮
    const oldClass = document.querySelector(".xtx-elevator-list .active");
    if (oldClass != null) {
      oldClass.classList.remove("active");
    }
    // 获取所有的大盒子及其位置
    const news = document.querySelector(".xtx_goods_new");
    const popular = document.querySelector(".xtx_goods_popular");
    const brand = document.querySelector(".xtx_goods_brand");
    const topic = document.querySelector(".xtx_goods_topic");
    // scrollTop 与 offset 比较
    const n = document.documentElement.scrollTop;
    if (n >= news.offsetTop && n < popular.offsetTop) {
      // 选择小盒子添加 active 类，属性选择器
      document.querySelector("[data-name=new]").classList.add("active");
    } else if (n >= popular.offsetTop && n < brand.offsetTop) {
      document.querySelector("[data-name=popular]").classList.add("active");
    } else if (n >= brand.offsetTop && n < topic.offsetTop) {
      document.querySelector("[data-name=brand]").classList.add("active");
    } else if (n >= topic.offsetTop) {
      document.querySelector("[data-name=topic]").classList.add("active");
    }
  });
})();
