$(function(){
  var banner=$(".middle-banner")[0];
  var imgs=$(".banner-img");
  var left1=$(".banner-left")[0];
  var right1=$(".banner-right")[0];
  var cir1=$(".circle1-li");
  var n=0;
  var next=0;
  var t=setInterval(move,3000);
  function move(){
  	next=n+1;
  	if(next>=imgs.length){
     next=0;
  	}
  	animate(imgs[n],{opacity:0},600)
  	animate(imgs[next],{opacity:1},600);
  	cir1[n].style.background="#3E3E3E";
    cir1[next].style.background="#B61B1F";
    n=next;
  }
   banner.onmouseover=function(){
   	  clearInterval(t);
      left1.style.display="block";
      right1.style.display="block";
   }
   banner.onmouseout=function(){
   	  t=setInterval(move,3000);
      left1.style.display="none";
      right1.style.display="none";
   }
   left1.onclick=function(){
   	next=n-1;
  	if(next<0){
     next=imgs.length-1;
  	}
  	animate(imgs[n],{opacity:0},600)
  	animate(imgs[next],{opacity:1},600);
  	cir1[n].style.background="#3E3E3E";
    cir1[next].style.background="#B61B1F";
    n=next;
   }
   right1.onclick=function(){
   	move();
   }

   for(var i=0;i<cir1.length;i++){
   	cir1[i].index=i;
   	cir1[i].onclick=function(){
         for(var i=0;i<imgs.length;i++){
           animate(imgs[i],{opacity:0},600)
           cir1[i].style.background="#3E3E3E"
         } 
         animate(imgs[this.index],{opacity:1},600)
         cir1[this.index].style.background="#B61B1F"
     }
   }
  var bags=$(".bags-2-m")[0];
  var img1s=$(".floor2");
  var cir2=$(".circle2-li");
  var  width1=parseInt(getStyle(bags,'width'));
  var left2=$(".bag-left")[0];
  var right2=$(".bag-right")[0];
  var n1=0;
  var next1=0;
  var t1=setInterval(move1,3000);
  function move1(){
    next1=n1+1;
    if(next1>=img1s.length){
      next1=0;
    }
      img1s[next1].style.left=width1+"px";
      animate(img1s[n1],{left:-width1},600);
      animate(img1s[next1],{left:0},600);
      cir2[n1].style.background="#6e6e6e";
      cir2[next1].style.background="#B61B1F";
      n1=next1;
  }
  left2.onclick=function(){
      next1=n1-1;
      if(next1<0){
        next1=img1s.length-1;
      }
        img1s[next1].style.left=-width1+"px";
        animate(img1s[n1],{left:width1},600);
        animate(img1s[next1],{left:0},600);
        cir2[n1].style.background="#6e6e6e";
        cir2[next1].style.background="#B61B1F";
        n1=next1;
  }
  right2.onclick=function(){
    move1();
  }
  for(var i=0;i<cir2.length;i++){
    cir2[i].index=i;
    cir2[i].onclick=function(){
      if(this.index>n1){
      img1s[next1].style.left=width1+"px";
      animate(img1s[n1],{left:-width1},600);
      animate(img1s[this.index],{left:0},600);
      cir2[n1].style.background="#6e6e6e";
      cir2[this.index].style.background="#B61B1F";
      }else if(this.index<n1){
        img1s[next1].style.left=-width1+"px";
        animate(img1s[n1],{left:width1},600);
        animate(img1s[this.index],{left:0},600);
        cir2[n1].style.background="#6e6e6e";
        cir2[this.index].style.background="#B61B1F";
      }
      n1=this.index;
      next1=this.index;
    }
  }
  bags.onmouseover=function(){
    clearInterval(t1);
    left2.style.display="block";
    right2.style.display="block"
  }
  bags.onmouseout=function(){
    t1=setInterval(move1,3000)
    left2.style.display="none";
    right2.style.display="none"
  }
  // var beauty=$(".beauty2-t")[0];
  // var img2s=$(".beautyt-turn");
  // var cir3=$(".circle3-li");
  // var  width2=parseInt(getStyle(beauty,'width'));
  // var left3=$(".beauty-left")[0];
  // var right3=$(".beauty-right")[0];
  // var n2=0;
  // var next2=0;
  // var t2=setInterval(move1,3000);
  // function move2(){
  //   next2=n2+1;
  //   if(next2>=img1s.length){
  //     next2=0;
  //   }
  //     img2s[next2].style.left=width2+"px";
  //     animate(img1s[n2],{left:-width2},600);
  //     animate(img1s[next2],{left:0},600);
  //     cir3[n2].style.background="#6e6e6e";
  //     cir3[next2].style.background="#B61B1F";
  //     n2=next2;
  // }
  // left3.onclick=function(){
  //     next2=n2-1;
  //     if(next2<0){
  //       next2=img1s.length-1;
  //     }
  //       img1s[next2].style.left=-width2+"px";
  //       animate(img2s[n2],{left:width2},600);
  //       animate(img2s[next2],{left:0},600);
  //       cir2[n2].style.background="#6e6e6e";
  //       cir2[next2].style.background="#B61B1F";
  //       n1=next2;
  // }
  // right3.onclick=function(){
  //   move2();
  // }
  // for(var i=0;i<cir3.length;i++){
  //   cir3[i].index=i;
  //   cir3[i].onclick=function(){
  //     if(this.index>n1){
  //     img1s[next2].style.left=width1+"px";
  //     animate(img2s[n2],{left:-width2},600);
  //     animate(img2s[this.index],{left:0},600);
  //     cir3[n2].style.background="#6e6e6e";
  //     cir3[this.index].style.background="#B61B1F";
  //     }else if(this.index<n1){
  //       img2s[next2].style.left=-width1+"px";
  //       animate(img2s[n2],{left:width1},600);
  //       animate(img2s[this.index],{left:0},600);
  //       cir3[n2].style.background="#6e6e6e";
  //       cir3[this.index].style.background="#B61B1F";
  //     }
  //     n2=this.index;
  //     next2=this.index;
  //   }
  // }
  // bags.onmouseover=function(){
  //   clearInterval(t2);
  //   left3.style.display="block";
  //   right3.style.display="block"
  // }
  // bags.onmouseout=function(){
  //   t2=setInterval(move2,3000)
  //   left3.style.display="none";
  //   right3.style.display="none"
  // }
   var car=$(".picture-right")[0];
   var carBack=$(".picture-turn")[0];
   var width4=parseInt(getStyle(carBack,"width"))
   var left4=$(".picturn-turn-left")[0];
   var right4=$(".picturn-turn-right")[0];
   function move4(){
        animate(carBack,{left:-1000},600,function(){
          var first=getFirst(carBack,"no");
          carBack.appendChild(first);
          carBack.style.left=0;
        })      
   }
   car.onmouseover=function(){
    left4.style.display="block";
    right4.style.display="block";
   }
   car.onmouseout=function(){
    left4.style.display="none";
    right4.style.display="none";
   }
   right4.onclick=function(){
      move4();
   }
   left4.onclick=function(){
       var last=getLast(carBack);
       var first=getFirst(carBack);
       insertBefore(last,first)
       carBack.style.left="-1000px"
       animate(carBack,{left:0},600)
   }
   var dayPic=$(".day-pic");
      for(var i=0;i<dayPic.length;i++){
          dayPic[i].index=i;
          dayPic[i].onmouseover=function(){
            animate(dayPic[this.index],{left:-10},600);
          }
          dayPic[i].onmouseout=function(){
            animate(dayPic[this.index],{left:1},600);
          }
       }
   var dayPicFirst=$(".day-pic-first")[0];
      dayPicFirst.onmouseover=function(){
        animate(dayPicFirst,{left:20},600);
      }
      dayPicFirst.onmouseout=function(){
        animate(dayPicFirst,{left:30},600);
      }
      var lefts=$(".banner-nav");
      for(var i=0;i<lefts.length;i++){ 
         lefts[i].index=i;
         hover(lefts[i],function(){
           var rights=$(".banner-more",this);
           for(var i=0;i<rights.length;i++){
             rights[i].style.display="block";
             lefts[this.index].style.background="#F7F7F7";
           }
         },function(){
           var rights=$(".banner-more",this);
           for(var i=0;i<rights.length;i++){
             rights[i].style.display="none";
             lefts[this.index].style.background="#C81623";
           }
       })
     }
     var research_nav=$(".research-nav");
     var research_pic=$(".research-pic");
     var research_zi=$(".research-zi");
     for(var i=0;i<research_nav.length;i++){
          research_nav[i].index=i;
          research_nav[i].onmouseover=function(){
                 research_nav[this.index].style.background="#CB1C39";
                 research_zi[this.index].style.display="block";
                 animate(research_zi[this.index],{right:35},300);

           }
         research_nav[i].onmouseout=function() {
            research_zi[this.index].style.display="none";
           research_nav[this.index].style.background="#ededed"; 
            animate(research_zi[this.index],{right:-35},300);console.log(research_zi[this.index])
         }
     }
      var floor=$(".floor");
      console.log(floor)
      var floorLis=$(".guding-nav");
      var gudingPic=$(".guding-pic");
      var gudingZi=$(".guding-zi");
      var floorNav=$(".guding")[0]; 
      var back1=$(".special")[0];
      var flag=true;
      var now;
      var cHeight=document.documentElement.clientHeight;
      for(var i=0;i<floor.length;i++){
            floor[i].h=floor[i].offsetTop;
          window.onscroll=function(){
            var obj=document.body.scrollTop?document.body:document.documentElement;
            var top=obj.scrollTop;
              if (top>=floor[0].h) {
                    floorNav.style.display="block";
                    var navHeight=floorNav.offsetHeight;
                     floorNav.style.top=(cHeight-navHeight)/2+"px";              
              }else if(top<floor[0].h-300){
                floorNav.style.display="none";  
              }
              for(var i=0;i<floor.length;i++){
                if(top>=floor[i].h){
                  for(var j=0;j<floorLis.length;j++){
                          gudingZi[j].style.display="none";
                          gudingPic[j].style.display="block";
                  }
                  gudingPic[i].style.display="none";
                  gudingZi[i].style.display="block";
                  now=i;
                }
              }
              for(var i=0;i<floorLis.length;i++){
            floorLis[i].index=i
            floorLis[i].onclick=function(){
              animate(document.body,{scrollTop:floor[this.index].h},100);
              animate(document.documentElement,{scrollTop:floor[this.index].h},100);
              now=this.index;
            }
              floorLis[i].onmouseover=function(){
              gudingPic[this.index].style.display="none";
                  gudingZi[this.index].style.display="block";
               
             }
               floorLis[i].onmouseout=function(){
                if(this.index==now){
                  return;
                }
                 gudingZi[this.index].style.display="none";
                       gudingPic[this.index].style.display="block";
             }
          }       
          back1.onclick=function(){
            animate(document.body,{scrollTop:0},100);
            animate(document.documentElement,{scrollTop:0},100)
          }
        }
      }
})       
         