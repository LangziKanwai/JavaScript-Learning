// 1 用户输入
// 使用 + 使其隐式转换为数字类型
let price = +prompt("请输入商品价格：");
let num = +prompt("请输入商品数量：");
let address = prompt("请输入收货地址：");

// 2 记录数据并计算
let total = price * num;

// 3 打印渲染表格
document.write(`
<table>
<h2>订单确认</h2>
<tr>
  <th>商品名称</th>
  <th>商品价格</th>
  <th>商品数量</th>
  <th>总价</th>
  <th>收货地址</th>
</tr>
<tr>
  <td>小米手机</td>
  <td>${price}</td>
  <td>${num}</td>
  <td>${total}</td>
  <td>${address}</td>
</tr>
</table>
`);
