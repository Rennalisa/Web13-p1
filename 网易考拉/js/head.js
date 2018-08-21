window.onload=function(){
	/*头部菜单*/
	var headLis=document.getElementsByClassName("head_div_daohang_ul2_li");
	for (var i=0; i<headLis.length; i++) {
		headLis[i].onmouseover=function(){
			this.style.backgroundColor="white";
			this.firstElementChild.style.color="#ff1e32";
			
		}
		headLis[i].onmouseout=function(){
			this.style.backgroundColor="black";
			this.firstElementChild.style.color="white";
			
		}
	}
	/*二级菜单*/
	var yijiLis=document.getElementsByClassName("body_div_div3_div1_div1_ul_li1");
	for (var i=0; i<yijiLis.length; i++) {
		if(i !=0 ){
			yijiLis[i].style.display="none";
		}
		yijiLis[i].onmouseover=function(){
			for (var j=0; j<yijiLis.length; j++) {
				if(j !=0 ){
					yijiLis[j].style.display="block";
				}
			}
			this.style.backgroundColor="white";
			this.firstElementChild.nextElementSibling.style.color="#ff1e32";
			this.lastElementChild.style.display="block";
		}
		yijiLis[i].onmouseout=function(){
			for (var j=0; j<yijiLis.length; j++) {
				if(j !=0 ){
					yijiLis[j].style.display="none";
				}
			}
			this.style.backgroundColor="#ff1e32";
			this.firstElementChild.nextElementSibling.style.color="white";
			this.lastElementChild.style.display="none";
		}
	}
	
	/*轮播图*/
	var imgArr=["url(img/lun1.jpg)","url(img/lun2.jpg)","url(img/lun3.jpg)","url(img/lun4.jpg)","url(img/lun5.jpg)"];
	var i=0;
	var pic=document.getElementById("body_div_div3_div1_div2");
	var qiehuan=function(){
		pic.style.background=imgArr[i];
		i++;
		if(i>4){
			i=0;
		}
	}
	
	var timer=setInterval(qiehuan,2000);
	
}
