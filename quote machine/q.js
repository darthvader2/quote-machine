
	var q1='Frankly, my dear, I dont give a damn.';
	var q2='Im the king of the world!';
	var q3 ='I feel the need - the need for speed!';
	var m=[q1,q2,q3];
	var colors=['#ab47bc','#c8c3cc','#563f46','#8ca3a3','#f4a688'];
	function random_item(m,colors)
{
  
return m[Math.floor(Math.random()*m.length)];
     
}

function quote(){
	document.getElementById("newquote").innerHTML =random_item(m) ;
	document.getElementById("newquote").style.color=random_item(colors);
	document.getElementById("body").style.background=random_item(colors);
    
    
}

