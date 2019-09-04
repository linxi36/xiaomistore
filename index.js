var tabs = document.getElementById('tabs').getElementsByTagName("li");
// console.log(tabs);
var fix = document.getElementsByClassName("main-time")[0];
// console.log(fix);
for(i =0; i<tabs.length;i++){
    tabs[i].onclick = showList;
}
function showList(){
    for(var i =0;i<tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "select";
            lists[i].className="clearfixed active";
            console.log(lists[i]);
        }else{
        tabs[i].className = "";
        lists[i].className = "clearfixed";   
        }
    }
}
var lists = document.getElementsByClassName("clearfixed");
console.log(lists);

//注意兼容性的问题
window.onscroll = function scroll() {
    var post = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // console.log(post);
    if(post >= 260){
        fix.className = "main-time main-time-navfixed"; 
    }else{
        fix.className = "main-time"; 
        
    }
}