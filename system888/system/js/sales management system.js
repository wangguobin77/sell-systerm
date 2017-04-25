var arr=[
    {name:'zhangsan',pad:12345678},
    {name:'shoudian',pad:77777777}
]
var img=document.querySelector('.img');
var login=document.querySelector('.dl');
var shuru=document.querySelector('.shuru');
var mm=document.querySelector('.mm');
var sricon=document.querySelector('.sricon');
var sr=document.querySelector('.sr');
var user=document.querySelector(".user");
var pwd=document.querySelector(".pwd");

var flag=true;

login.addEventListener('touchstart',function(){
	 flag=!flag;
	  if(flag==true){
        this.style.background="#348ce3";
    }else{
        this.style.background="#4399FC";
    }
	


})
user.addEventListener('focus',function(){;
        sricon.style.color="#000";
        sricon.style.opacity=1;
        shuru.style.background="#fff";
        shuru.style.opacity=1;
        this.style.color="#000 !important" ;
})

user.addEventListener('blur',function(){
        // shuru.style.background="#5A7195";
        shuru.style.opacity="0.8";
        sricon.style.color="#000";
        sricon.style.opacity=1;
        var str=this.value;
        for(var i=0;i<arr.length;i++){
        if(str!=arr[i].name){
            img.style.opacity=1;
            pwd.disabled='disabled';
        }else{
            pwd.disabled='';
            img.style.opacity=0;
            img.value="输入正确";
            return;
        }
    }
      
    


})

pwd.addEventListener('focus',function(){
        sr.style.color="#000";
        sr.style.opacity=1;
        mm.style.background="#fff";
        mm.style.opacity=1;

    

})

pwd.addEventListener('blur',function(){
        // mm.style.background="#5A7195";
        mm.style.opacity="0.8";
        sr.style.color="#000";
        sr.style.opacity=1;
})

