// 功能   要实现IE低版本里面适配getClass
function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}
		else{			
			var objs=obj.getElementsByTagName("*");
			var arr=[];
			for(i=0;i<objs.length;i++){
                if (getmoreClass(classname,objs[i])){ 
				     arr.push(objs[i])
			   }
			}
			return arr;
		}
		
	}

 function getmoreClass(classname,obj){
 	var classStr=obj.className;
 	var classArr=classStr.split(" ");
 	for(var i=0;i<classArr.length;i++){
 		if(classArr[i]==classname){
 			return true;
 		}
 		return false;
 	}
 }




function $(val,obj){
    if(typeof val=="string"){
        var obj=obj||document;
    val=val.replace(/^\s*|\s*$/g,"");
    if(val.charAt(0)=="#"){
        return document.getElementById(val.slice(1));
        }else if(val.charAt(0)=="."){
            return getClass(val.slice(1),obj);
        }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
            return obj.getElementsByTagName(val)    
      }
    }else if(typeof val=="function"){
        window.onload=function(){
            val();
        }
    }
	
}




// 实现 currentStyle在ff不兼容
function getStyle(obj,style){
	//ie支持
	if(obj.currentStyle){
		return obj.currentStyle[style];
		// ff支持
	}else if(getComputedStyle(obj,null)){
		return getComputedStyle(obj,null)[style]
	}
}



// 实现IE不支持textContent
function getText(obj,val){
	if (val!=undefined) {
      if(obj.textContent){
		  return obj.textContent=val;
	    }else{
		    return obj.innerText=val;
	    }  
	}else{
	if(obj.textContent){
		return obj.textContent;
	}else{
		return obj.innerText;
	}
}
}


function getChild(){
   var obj=obj||"no"
   var kids=obj.childNodes;
   var arr[];
   for(var i=0;i<kids.length;i++){
   	if(type=="no"){
   		if(kids[i].nodeType=="1"){
   			arr.push(kids[i]);
   		}
   	}else if(type=="yes"){
   		if(kids[i].nodeType=="1"||kids[i].nodeType=="3"&&kids[i].odeValue.replace(/^\s*|\*$/g,"")){
   			arr.push(kids[i]);
   		}
   	}
   }
   return arr;	
}