/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city=document.getElementById("aqi-city-input");
	var valu=document.getElementById("aqi-value-input");
    aqiData.city.value=valu.value;
}
var alphaReg=/^[A-Za-z\u4E00-\u9FA5]+$/;
var numReg=/^[1-9]*$/;
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
   var city=document.getElementById("aqi-city-input");
   var valu=document.getElementById("aqi-value-input");
   if(!alphaReg.test(city.value.trim())||!numReg.test(valu.value.trim()))
   {
   	alert("您的输入有误");
   	return false;
   }
   var x=document.getElementById("aqi-table");
   var tr=document.createElement("tr");
   var td1=document.createElement("td");
   var td2=document.createElement("td");
   var td3=document.createElement("td");
   var bt1=document.createElement("button");
   bt1.innerHTML="删除";
   td3.appendChild(bt1);
   td1.innerHTML=city.value.trim();
   td2.innerHTML=valu.value.trim();
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   x.appendChild(tr);
   city.value="";
   valu.value="";
  
   
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  alert("11");
}

  


function init() {
	document.getElementById("add-btn").addEventListener("click",function(){addBtnHandle()});
    document.getElementsByTagName("button")[].addEventListener("click",function(){delBtnHandle()})
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();