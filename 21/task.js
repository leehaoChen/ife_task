function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false)
	}else{
		if(ele.attachEvent)
			ele.attachEvent('on'+event,handler);
	    else{
		    ele['on'+event]=handler;
	      }
    }
}
var taginput=document.getElementById('tag');
var tagshow=document.getElementById('tagshow');
var hobbyinput=document.getElementById('hobby');
var hobbyshow=document.getElementById('hobbyshow');
function keyshow(e){
	var  str=taginput.value;
	reg=/[,，\s\n]/;
	var tagchild=tagshow.childNodes;
	var s=str.substr(str.length-1,1);
	if (e.keyCode==13&&str.trim()!=""){
        for(i=0;i<tagchild.length;i++){
        	if(str.trim()==tagchild[i].innerHTML){ taginput.value="";  return false;}
        }
		var tagli=document.createElement('li');
		tagli.innerHTML=str.trim();
		rm(tagli);
		tagshow.appendChild(tagli);
        taginput.value="";
	}
	if(reg.test(s)){
		var tagli=document.createElement('li');
		var si=str.substr(0,str.length-1).trim();
		for(i=0;i<tagchild.length;i++){
        	if(si==tagchild[i].innerHTML){ taginput.value=""; return false;}
        }
		if(si.trim()==""){taginput.value="";return false};
		tagli.innerHTML=si;
		rm(tagli);
		tagshow.appendChild(tagli);
		taginput.value="";
	}
	while(tagchild.length>10){
		tagshow.removeChild(tagshow.firstChild);
	}
}
function hshow(){
	var s=hobbyinput.value;
	console.log(s);
	var str=/[.,。，、\s\n\t]/;
	var hstr=s.split(str);
	var hobbychild=hobbyshow.childNodes;
	for(var i=0;i<hstr.length;i++){
		var oli=document.createElement('li');
		if(hstr[i].trim()!=""){
			oli.innerHTML=hstr[i].trim();
			rm(oli);
			hobbyshow.appendChild(oli);
	}   }
	while(hobbychild.length>10){
        hobbyshow.removeChild(hobbyshow.firstChild)
	}
	for(var i=0;i<hobbychild.length-1;i++){
		for(j=i+1;j<hobbychild.length;j++){
             if (hobbychild[i].innerHTML==hobbychild[j].innerHTML){
             	hobbyshow.removeChild(hobbychild[i])
             }
		}
	}

}
function changsty(e){
   var s=e.target.innerHTML;
   e.target.innerHTML='点击删除:'+s;
   e.target.style.backgroundColor='red';
}
function backsty(e){
	var s=e.target.innerHTML.substring(5);
    e.target.innerHTML=s;
    e.target.style.backgroundColor="#ccc";
}
function del(e){
	var s=e.target;
	s.parentNode.removeChild(s);
}
function rm(ele){
    addEventHandler(ele,'mouseover',changsty);
    addEventHandler(ele,'mouseout',backsty);
    addEventHandler(ele,'click',del);
}

window.onload=function(){
	
   addEventHandler(document.getElementById('tag'),'keyup',keyshow);
   addEventHandler(document.getElementById('hobbybtn'),'click',hshow);
}
