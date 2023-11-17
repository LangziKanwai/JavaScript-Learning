() => {
  // 参考数据
  const initData = {
    stuId: 1,
    uname: "zhangsan",
    age: 22,
    gender: "女",
    salary: 12000,
    city: "北京",
  };
  // localStorage.setItem("data", JSON.stringify(initData));
};

// 逻辑中断
if (JSON.parse(localStorage.getItem("data")) == null) {
  dataArr = [];
} else {
}
console.log(dataArr);
// const dataArr = [JSON.parse(localStorage.getItem("data"))] || [];
// render(dataArr);
// 获取元素
const tbody = document.querySelector("tbody");
const info = document.querySelector(".info");
const uname = document.querySelector(".uname");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const salary = document.querySelector(".salary");
const city = document.querySelector(".city");

// 提交事件
info.addEventListener("submit", (e) => {
  e.preventDefault();
  // 判断非空
  if (!uname.value || !age.value || !salary.value) {
    // 函数结束
    return alert("内容不能为空！");
  }
  const obj = {
    stuId: dataArr.length + 1,
    uname: uname.value,
    age: age.value,
    gender: gender.value,
    salary: salary.value,
    city: city.value,
  };
  dataArr.push(obj);
  // 调用函数
  render(dataArr);
  // 重置表单
  info.reset();

  // 把数组转化为 JSON 字符串存储进本地存储
  localStorage.setItem("data", JSON.stringify(dataArr));
});

// 使用 map() 和 join() 渲染
function render(arr = []) {
  const newArr = arr.map(function (ele) {
    return `
    <tr>
    <td>${ele.stuId}</td>
    <td>${ele.uname}</td>
    <td>${ele.age}</td>
    <td>${ele.gender}</td>
    <td>${ele.salary}</td>
    <td>${ele.city}</td>
    <td><a href="javascript:">删除</a></td>
    </tr>`;
  });
  // console.log(newArr);
  tbody.innerHTML = newArr.join("");
}
