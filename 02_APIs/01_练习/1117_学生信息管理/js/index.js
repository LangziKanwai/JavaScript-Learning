/*
思路：
1.声明数组
2.录入数据时生成对象后添加到数组内
3.根据数组渲染表格
4.删除数据时移除数组内的数据
5.再次更新表
*/

const dataArr = [];

// 获取元素
const uname = document.querySelector(".uname");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const salary = document.querySelector(".salary");
const city = document.querySelector(".city");
const tbody = document.querySelector("tbody");

// 录入模块
// 表单提交事件
const info = document.querySelector(".info");
info.addEventListener("submit", (e) => {
  // 阻止默认行为：跳转
  e.preventDefault();
  // console.log("表单提交");
  // 数据校验
  // 获取所有表单，即带有 name 属性的元素
  const items = document.querySelectorAll("[name]");
  // 遍历 items
  for (let i = 0; i < items.length; i++) {
    if (items[i].value == "") {
      return alert("输入内容不能为空！");
    }
  }
  // 创建新对象
  const obj = {
    stuId: dataArr.length + 1,
    uname: uname.value,
    age: age.value,
    gender: gender.value,
    salary: salary.value,
    city: city.value,
  };
  // console.log(obj);
  // 添加
  dataArr.push(obj);
  // 重置表单
  info.reset();
  this.render(dataArr);
});

// 渲染函数
function render(arr) {
  // 清空 tbody
  tbody.innerHTML = null;
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 生成 tr
    const tr = document.createElement("tr");
    tr.innerHTML = `<tr>
    <td>${arr[i].stuId}</td>
    <td>${arr[i].uname}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].gender}</td>
    <td>${arr[i].salary}</td>
    <td>${arr[i].city}</td>
    <td>
      <a href="javascript:" data-id=${i}>删除</a>
    </td>
    </tr>`;
    // 追加元素
    tbody.appendChild(tr);
  }
}

// 删除操作
tbody.addEventListener("click", function (e) {
  if (e.target.tagName == "A") {
    // 得到 data-id
    // console.log(e.target.dataset.id);
    dataArr.splice(e.target.dataset.id, 1);
  }
  // 重新渲染
  render(dataArr);
});
