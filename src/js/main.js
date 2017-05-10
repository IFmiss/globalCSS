import {foo,bbb} from "./a";  
import {ccc as showArryList} from "./a";
require('../global/css/global.css');
require('../global/css/testColor.css');

import myHeader from "../components/header/header.js";
import myFooter from "../components/footer/footer.js";


// function aaa(){
// 	alert(1);
// }
// foo();
// bbb();
// showArryList();


const header = function(){
	var domHeader = document.getElementById('header');
	var header = new myHeader();
	domHeader.innerHTML = header.tpl;
}

new header();

const footer = function(){
	var domFooter = document.getElementById('footer');
	var footer = new myFooter();
	domFooter.innerHTML = footer.tpl;
}
new footer();