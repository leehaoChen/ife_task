function leftIn(){
	var input=document.getElementById('text-input');
	if(input.value==""){
		alert('请输入数值');
		return false;
	}
	var queue=document.getElementById('queue');
	var newnode=document.createElement('li');
	newnode.innerHTML=input.value;
	if(queue.firstChild!=null)
	{
		var first=queue.firstChild;
		queue.insertBefore(newnode,first);	
		
	}else{
		queue.appendChild(newnode);
	}

	rem(newnode);
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
	if(input.value==""){
		alert('请输入数值');
		return false;
	}
	var queue=document.getElementById('queue');
	var last=document.createElement('li');
	last.innerHTML=input.value;
	queue.appendChild(last);
	rem(last);
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
	    // line.splice(len,1);
        node.parentNode.removeChild(node);
	})
	
}
// function initremove(){
// 	var x=document.getElementsByTagName("li");
// 	console.log(x)
// 	for(i=0;i<x.length;i++){
// 		x[i].addEventListener('click',function(){remove(this)},false);
// 	}
// }
window.onload=function(){
	document.getElementById('left-in').addEventListener('click',function(){leftIn()},false);
	document.getElementById('left-out').addEventListener('click',function(){leftOut()},false);
	document.getElementById('right-in').addEventListener('click',function(){rightIn()},false);
	document.getElementById('right-out').addEventListener('click',function(){rightOut()},false);
	

}
