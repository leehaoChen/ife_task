var num=[];
function leftIn(){
	var input=document.getElementById('text-input');
	if(input.value==""){
		alert('请输入数值');
		return false;
	}
	var reg=/^(?:[1-9]\d|100)$/;
	if(!reg.test(input.value)){
		alert('输入的值必须在0到100之间')
		return false;
	}
	var queue=document.getElementById('queue');
	if (queue.childNodes.length>=60){
		alert('数组个数已经达到60上限');
		return false;
	}
	var newnode=document.createElement('li');
	newnode.style.height=input.value*4+'px';
	var first=queue.firstChild;
	queue.insertBefore(newnode,first);
	num.unshift(input.value);	
	render();
	input.value="";
	console.log(num);

	

}
function leftOut(){
	var queue=document.getElementById('queue');
	var first=queue.firstChild;
	if (first==null)
	{
		alert("队列为空");
		return false;

	}
	alert(first.offsetHeight/4+'将被移除');
	queue.removeChild(first);
	num.splice(0,1);
	render();
	console.log(num);

}
function rightIn(){
	var input=document.getElementById('text-input');
	if(input.value==""){
		alert('请输入数值');
		return false;
	}
	var reg=/^(?:[1-9]\d|100)$/;
	if(!reg.test(input.value)){
		alert('输入的值必须在0到100之间')
		return false;
	}
	var queue=document.getElementById('queue');
	if (queue.childNodes.length>=60){
		alert('数组个数已经达到60上限');
		return false;
	}
	var last=document.createElement('li');
	last.style.height=input.value*4+'px';
	queue.appendChild(last);
	num.push(input.value);
	input.value="";
	console.log(num);
	render();
	// console.log(num);

}
function rightOut(){
	var queue=document.getElementById('queue');
	var last=queue.lastChild;
	if (last==null)
	{
		alert("队列为空");
		return false;

	}
	alert(last.offsetHeight/4+'将被移除');
	queue.removeChild(last);
	num.splice(num.length-1,1);
	render();
	console.log(num);

}
// 数组的渲染函数
function render(){
	var number=document.getElementById('number');
	number.innerHTML="";
	for(var i=0;i<num.length;i++)
	{
		var x=document.createElement('li');
		x.innerHTML=num[i];
		number.appendChild(x);
	}
} 
  function bubble(){
  	for(i=0;i<num.length;i++){
  		num[i]=parseInt(num[i]);
  	}
  	var x=document.getElementById('queue');
  	var q=x.childNodes;
  	var l=num.length;
  	var index=0;
  	for(var j=l-1;j>0;j--){
  		
  	}
  	var j=l-1;
   	var i=setInterval(function(){
  			for(var i=0;i<j;i++){
  			if (num[i]>num[i+1])
  			{   
  				index=num[i+1];
  				num[i+1]=num[i];
  				num[i]=index;
  				render();
				console.log("11");
				index=q[i+1].offsetHeight;
			    q[i+1].style.height=q[i].offsetHeight+'px';
			    q[i].style.height=index+'px';

  				
  			}
  		}
  		j--;
  		if(j<=0){
  			clearInterval(i);
  		}
  	},1000);
  	
}
function rand60(){
	num=[];
	var queue=document.getElementById('queue');
	queue.innerHTML="";
	for(i=0;i<60;i++){
		var x=parseInt(Math.random()*100+1);
		num.push(x);
		y=document.createElement('li');
        y.style.height=x*4+'px';
        queue.appendChild(y);

	}
	render();
}


window.onload=function(){
	document.getElementById('left-in').addEventListener('click',function(){leftIn()},false);
	document.getElementById('left-out').addEventListener('click',function(){leftOut()},false);
	document.getElementById('right-in').addEventListener('click',function(){rightIn()},false);
	document.getElementById('right-out').addEventListener('click',function(){rightOut()},false);
	document.getElementById('bubble').addEventListener('click',function(){bubble()},false);
	document.getElementById('rand60').addEventListener('click',function(){rand60()},false);
	

}
