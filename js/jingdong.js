window.onload=function(){
	var banner=getClass("bannermiddle")[0];
	var img=getClass("banner-pic")
	var cir=getClass("circle")
	var left=getClass("banner-zuo")[0];
	var right=getClass("banner-you")[0];
	var width=parseInt(getStyle(banner,"width"))	
	var n=0;
	var t=setInterval(con,2000)
	function con(){
		n++;
		if(n>img.length-1){
			n=0;
		}
		for(var i=0;i<img.length;i++){	
			img[i].style.display="none";
            cir[i].style.background=" #3E3E3E"
		}  
		img[n].style.display="block";
		cir[n].style.background="#B61B1F" 
		right.style.left=width+"px";
		left.style.left=-width+"px";
		img[n].onmouseover=function(){
		    clearInterval(t);
		    right.style.left=(width-28)+"px"
		    left.style.left=0+"px"

		}
		img[n].onmouseout=function(){
			t=setInterval(con,2000)
		}
	}
	for(var j=0;j<cir.length;j++){
		cir[j].index=j;		
		cir[j].onmouseover=function(){
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3E3E3E"; 
                img[i].style.display="none"
			} 
			cir[this.index].style.background="#B61B1F" ; 
			img[this.index].style.display="block" 
			n=this.index;
	    }
             
	}


	right.onclick=function(){
	
	    con();
	}
	left.onclick=function(){
		n--;
		if(n<0){
			n=img.length-1;
		}
		for(var i=0;i<img.length;i++){	
			img[i].style.display="none";
            cir[i].style.background=" #3E3E3E"
		}  
		img[n].style.display="block";
		cir[n].style.background="#B61B1F"
		n=tis.index	;	
	}
	// 十二楼轮播左
	var box=getClass("life-left-top")[0];
	var pic=getClass("xiaomi")
    var round=getClass("round")
    var zuo=getClass("beautiful-left")[0];
    var you=getClass("beautiful-right")[0];    
	var now=0;
	var following=0;
	var flag=true;
	var kuan=parseInt(getStyle(box,"width"))
	var time=setInterval(move,2000)
	function move(){
		  following=now+1;
          if(following>=pic.length){
            following=0;
          }
          pic[following].style.left=kuan+"px"
          animate(pic[now],{left:-kuan},600,Tween.Linear);
          round[now].style.backgroundColor="#3E3E3E"
          animate(pic[following],{left:0},600,Tween.Linear);          
          round[following].style.backgroundColor="#B61B1F"     
          now=following;
		  you.style.left=kuan+"px"
		  zuo.style.left=-kuan+"px"          
          pic[now].onmouseover=function(){
		    clearInterval(time);
		    you.style.left=(kuan-28)+"px"
		    zuo.style.left=0+"px"

		}
		pic[now].onmouseout=function(){
				time=setInterval(move,2000)
		}
	}
	
	you.onclick=function(){
	
	    move();
	}
	zuo.onclick=function(){
		 following=now-1;
         if(following<0){
          following=pic.length-1;
         }
         pic[following].style.left=-kuan+"px"
         animate(pic[now],{left:kuan},600,Tween.Linear)
         animate(pic[following],{left:0},600,Tween.Linear)
         round[now].style.backgroundColor="#3E3E3E"
         round[following].style.backgroundColor="#B61B1F"
         now=following;
	}
	for(var j=0;j<round.length;j++){
		round[j].index=j;
		round[j].onmouseover=function(){
		 
			if(this.index>now){
				if(!flag){
                   return;
				}
				flag=false;
				for(var i=0;i<round.length;i++){
					pic[following].style.left=kuan+"px"				
					  round[now].style.backgroundColor="#3E3E3E";
			         animate(pic[now],{left:-kuan},600,Tween.Linear);

			     }        
					 round[this.index].style.backgroundColor="#B61B1F" 
					 animate(pic[this.index],{left:0},600,Tween.Linear);         
					 now=this.index;

			       
			}
			if(this.index<now){
				if(!flag){
                   return;
				}
				flag=false;
				for(var i=0;i<round.length;i++){
					pic[following].style.left=-kuan+"px"				
					  round[now].style.backgroundColor="#3E3E3E";
			         animate(pic[now],{left:kuan},600,Tween.Linear);

			     }        
					 round[this.index].style.backgroundColor="#B61B1F" 
					 animate(pic[this.index],{left:0},600,Tween.Linear);         
					 now=this.index;
					 
			       
			}
                
               
		}
		
	}
  

}

		 

