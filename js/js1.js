// js 中实现鼠标选悬停到菜单栏，菜单条目显示

//此函数实现了 鼠标点击第一次菜单显示，鼠标点击第二次菜单隐藏
var flag = true  //全局变量，开关按钮，用于判断当前菜单是不是显示状态
function show_menu(){
	var title1 = document.getElementById("title");
	if(flag){
		title1.style.display = "block";
		flag = false; //表示菜单栏当前是显示状态
	}else{
		title1.style.display = "none";
		flag = true; // 表示菜单栏当前是隐藏状态
	};

};

// 用onmouseleave设置鼠标悬停事件
function show_menu1(){
	var title1 = document.getElementById("title");
	title1.style.display = "none";
	flag = true;
}