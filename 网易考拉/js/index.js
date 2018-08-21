window.onload=function(){
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
	
	var erjiLis=document.getElementsByClassName("body_div_div3_div1_div1_ul_li1");
	for (var i=0; i<erjiLis.length; i++) {
		erjiLis[i].onmouseover=function(){
			this.style.backgroundColor="white";
			this.firstElementChild.nextElementSibling.style.color="#ff1e32";
			
			this.lastElementChild.style.display="block";
		}
		erjiLis[i].onmouseout=function(){
			this.style.backgroundColor="#ff1e32";
			this.firstElementChild.nextElementSibling.style.color="white";
			this.lastElementChild.style.display="none";
		}
	}
	
	
}
