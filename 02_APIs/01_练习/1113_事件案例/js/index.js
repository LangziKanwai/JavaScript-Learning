// 电梯导航
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
  elevator.style.opacity = n >= 300 ? 1 : 0;
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
