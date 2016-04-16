function leftIn(){
	var input=document.getElementById('text-input');
	var reg=/[^0-9a-zA-Z\u4e00-\u9fa5]+/;
	var s=input.value.trim().split(reg);
	if(input.value==""||input.value.trim()==''){
		alert('请输入数值');
		return false;
	}
	var queue=document.getElementById('queue');
	for(i in s){
		var newnode=document.createElement('li');
	    newnode.innerHTML=s[i];
	    var first=queue.firstChild;
	    queue.insertBefore(newnode,first);		
	    rem(newnode);
		
	}
	input.value="";
}
function leftOut(){
	var queue=document.getElementById('queue');
	var first=queue.firstChild;
	if (first==null)
	{
		alert("队列为空");
		return false;

	}
	alert(first.innerText+'将被移除');
	queue.removeChild(first);
}
function rightIn(){
	var input=document.getElementById('text-input');
	var reg=/[^0-9a-zA-Z\u4e00-\u9fa5]+/;
	var s=input.value.trim().split(reg);
	if(input.value==""||input.value.trim()==''){
		alert('请输入数值');
		return false;
	}
	var queue=document.getElementById('queue');
	for(i in s)
	{
		var last=document.createElement('li');
	    last.innerHTML=s[i];
	    queue.appendChild(last);
	    rem(last);
	}
	input.value="";
}
function rightOut(){
	var queue=document.getElementById('queue');
	var last=queue.lastChild;
	if (last==null)
	{
		alert("队列为空");
		return false;

	}
	alert(last.innerText+'将被移除');
	queue.removeChild(last);
}
function rem(node){
	node.addEventListener('click',function(){
		alert('元素'+node.innerText+'将被删除');
        node.parentNode.removeChild(node);
	})
	
}
function inquiry(){
	var x=document.getElementById('queue').childNodes;
	var y=document.getElementById('qurtext').value;
	var str=[];
	console.log(x)
	for(i=0;i<x.length;i++){
		str.push(x[i].innerHTML)
	}
	console.log(str);
	for(var i=0;i<str.length;i++){
       if(str[i].search(y)>=0)
       {
       	x[i].style.backgroundColor='blue';
       }	
      
	}
}

window.onload=function(){
	document.getElementById('left-in').addEventListener('click',function(){leftIn()},false);
	document.getElementById('left-out').addEventListener('click',function(){leftOut()},false);
	document.getElementById('right-in').addEventListener('click',function(){rightIn()},false);
	document.getElementById('right-out').addEventListener('click',function(){rightOut()},false);
	document.getElementById('inquiry').addEventListener('click',function(){inquiry()},false);
	

}
