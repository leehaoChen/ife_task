/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/



window.onload = function (){
  // 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}
function randomColor(){
     var color=["rgb(255,0,0)","rgb(255,165,0)","rgb(255,255,0)","rgb(0,255,0)","rgb(0,127,255)","rgb(0,0,255)","rgb(139,0,255)"];
     var colorData=color[Math.floor(Math.random()*7)];
     return colorData;
 }   
/**
 * 渲染图表
 */
function renderChart() {
   var chart=document.getElementById('chart-wrap');
   chart.innerHTML="";
   if(pageState.nowGraTime=="day"){
    for(i in chartData[pageState.nowSelectCity])
     {  
       var oli=document.createElement('li');
       oli.style.backgroundColor=randomColor();
       oli.style.width='8px';
       oli.style.height=chartData[pageState.nowSelectCity[i]];
       oli.setAttribute('tittle',i+':'+chartData[pageState.nowSelectCity[i]]);
       console.log(oli.style.backgroundColor);
       chart.appendChild(oli);
       

   }
 }
   if(pageState.nowGraTime=="week"){
    var sum=0;
    var average=0;
    var num=[];
    for(i in chartData[pageState.nowSelectCity]){
      sum+=chartData[pageState.nowSelectCity][i];
      average=sum/7;
      num.push(average);
      if(num.length%7==0){
        var oli=document.createElement('li');
        oli.style.backgroundColor=randomColor();
        oli.style.width='32px';
        oli.style.height=average;
        oli.setAttribute('tittle',i+'之前七天的平均空气质量：'+average);
        sum=0;
        average=0;
        chart.appendChild(oli)
      }
   }
      // 处理多出来的天数
      var oli=document.createElement('li');
      oli.style.backgroundColor=randomColor();
      oli.style.width='32px';
      oli.style.height=average;
      oli.setAttribute('tittle',i+'之前几天的平均空气质量：'+average);
      chart.appendChild(oli);
      sum=0;
      average=0;

 }  
   if(pageState.nowGraTime='month'){
    var sum=0;
    var average=0;
    var num=[];
    for(i in chartData[pageState.nowSelectCity]){
      sum+=chartData[pageState.nowSelectCity][i];
      average=sum/(num.length+1);
      num.push(average);
      if(num.length%30==0){
        var oli=document.createElement('li');
        oli.style.backgroundColor=randomColor();
        oli.style.width='80px';
        oli.style.height=average;
        oli.setAttribute('title',i+'之前一个月的平均空气质量：'+average);
        sum=0;
        average=0;
        chart.appendChild(oli);
        var num=[];
      }
    }

   }

}

// /**
//  * 日、周、月的radio事件点击时的处理函数
//  */
function graTimeChange() {
  // 确定是否选项发生了变化 
  var gratime=document.getElementsByName('gra-time');

  // 设置对应数据
 var str=['day','week','month'];
  for(i in gratime){
    if (gratime[i].checked){
      pageState.nowGraTime=str[i];
    }
  }
  // 调用图表渲染函数
  console.log(pageState.nowGraTime);
  renderChart();
}

// /**
//  * select发生变化时的处理函数
//  */
function citySelectChange() {
  // 确定是否选项发生了变化 
   var citychange=document.getElementById('city-select').selectedIndex-1;
  // 设置对应数据
  console.log(citychange);
  pageState.nowSelectCity=citychange;
  // 调用图表渲染函数
  renderChart();
}

// /**
//  * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
//  */
function initGraTimeForm() {
   var gratime=document.getElementsByName('gra-time');
   for(i in gratime){
    gratime[i].onclick=graTimeChange;
   }
}

// /**
//  * 初始化城市Select下拉选择框中的选项
//  */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
     var city=document.getElementById('city-select');
     city.innerHTML="<option>请选择一个城市</option>";
     for(i in aqiSourceData){
       var s=document.createElement('option');
       s.innerHTML=i;
       city.appendChild(s);
     }
     document.getElementById("city-select").onchange=citySelectChange;
}

//   // 给select设置事件，当选项发生变化时调用函数citySelectChange
//     city.onchange=citySelectChange();

// /**
//  * 初始化图表需要的数据格式
//  */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  var j=0;
  for (i in aqiSourceData)
  {
    chartData[j++]=aqiSourceData[i];
    console.log(chartData);
  }
}

// /**
//  * 初始化函数
//  */
function init() {
  console.log("hello");
  initGraTimeForm();
  initCitySelector();
  initAqiChartData();
}
  console.log("hello");
  init();
};