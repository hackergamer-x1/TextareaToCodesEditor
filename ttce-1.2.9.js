/*

TextareaToCodesEditor is a JavaScript to turn any Textarea To Codes Editor.

This editor contains some useful functionalities:

- LineNumbers : lines are numbered and their numbers are showed next to the selected textarea.
- MenuBar : menubar is placed at the top of the selected textarea and contains many buttons to edit texts and codes.
- TextColor : you can personalize the textarea's text color in TTCE's config.
- Width : you can personalize the textarea's width in TTCE's config.
- Height : you can personalize the textarea's height in TTCE's config.
- InsertTagButtons : if you are writing a HTML/XML... code, many buttons well be added to the MenuBar, and any button have a text into him(e.g. html/head/body...) and when you click on a button a tag with the text into the clicked button well be added to the selected textarea to edit codes easily and fastest.



*/




function TTCE(){return new TextareaToCodesEditor();}



 uconfig = TTCEconfig;


TTCE.init = function init(config_params){ uconfig = config_params;
};




       
var textarea_qs = uconfig.textarea;
var ta = document.querySelector(textarea_qs);
var p = ta.parentElement;
var emptyvar = "";



/* function TTCE_on(uconfig){
*/

if(uconfig.DefaultText !== null){

ta.innerHTML = uconfig.DefaultText;

}





 if(uconfig.TextColor !== null){

ta.style.color = uconfig.TextColor;

}


 if(uconfig.width !== null){

ta.style.width = uconfig.width;

}



 if(uconfig.height !== null){

ta.style.height = uconfig.height;

}







if(uconfig.AddNewClass !== null){

ta.classList.add(uconfig.AddNewClass);

}








if(uconfig.MenuBar !== false){

function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}
function getMenuBarButtons(){
var mbbuttons = "<div id='mbbuttons2'><center>";
if(uconfig.MenuBar.buttons.match("saver")){mbbuttons += '<button onclick="save();lssuct();"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAeFBMVEUAAAAEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzMEJzOh+cBIAAAAKHRSTlMAP3+BKXVxJf9T6+Ktb6N2foUAjped7uWkXWVZc2wmIrH+qVxUApx0F3draQAAALZJREFUWMPt1scOwjAMgOHULANll9EySpnv/4YQKiGjEmLJHAj1f0sOnxLJimKMpmmVIrA1muWqBaS23en4AMBH3XLVQ1Lf7sQDITDEkRTAsRTAiZnKAJx9EFgAJm6BB+DcKbwCCwosCYAr3gnSjLSmAG5YQLUnAL8ObHfvy/c8oEBvnhMo8AXgAM5i2SAZcwwEOJ2dpeJRLoKYA/kVkszZpS6D5HoT711rMkhBAxEwi/RPrf1dNzEQM/CsudPJAAAAAElFTkSuQmCC" style="width: 15px;height: 15px;"></img> </button>';}
 if(uconfig.MenuBar.buttons.match("run")){mbbuttons += '<button onclick="runcode()"><img src=" data:image/png;base64,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" style="width: 15px;height: 15px;"></img> </button>';}
if(uconfig.MenuBar.buttons.match("run")){mbbuttons += '<button onclick="addTabulation()"><img src="data:image/png;base64,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" style="width: 15px;height: 15px;"></img></button>';}
if(uconfig.MenuBar.buttons.match("copybtn")){mbbuttons += '<button onclick="copy()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAP1BMVEX///////////////////////////////////////////////////////////////////////////////////81m6ZbAAAAFXRSTlMAHW+APfT/zv1+TgGvTcB9/kw8qxyRze9qAAAAdElEQVQ4y+3UyxJAMAwF0FKuR1DF/38rM1Z5qFoa7vp0mswkcS43RelVpKlq6EjUIAO1wP13xjudJ0j32PUkkNnjQByZPWLkyOhxAgJHRvn+ePejj6Bz7G/Q5aS/A83pRUicDUSOFms5VxIVbGrNQ6TsQ+h2zNQJxErt4DUAAAAASUVORK5CYII=" style="width: 15px;height: 15px;"></img></button>';}
 if(uconfig.MenuBar.buttons.match("cutbtn")){mbbuttons += '<button onclick="cut()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAqFBMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VRVRbAAAAOHRSTlMABm3J88hsG9D/zhpggCAF+G4QcPlrxxHyEnL6nUCKjIGOgoMIzcuifx3UfXwOnPbMccoH0s/Rb54Zp1QAAAEXSURBVDjLzZNrW8IwDIXTbYAHrO4ODBBFwOuc4O3//zPTMWCTpV/xfMnT9n3SNskhOoOU43pep6tsTO8CpfqD5v6lNrra5akYpq7rjC739G7hAH4QhlEMJBJDLhCYGAGpxJAHhCYOgZHEHKAxXysx1AEiE7PjdScMdYE4Go6zCTCVGFJ9HKQFhmjQpGZtDOdK0pGfTveHuo05+ZKWmRo1s7WaqZu5LY3RLTC/g51aNCrRrvs/9Wpqma38yfqhPH7U7dTT8zHFi1DwZY15ldrC3feTPA94Mt/EBq+qsQ0AVxwVH8hNDG1DV4MKcXzfKyNsgK1oBHZJzJba8MMd0VIfn/sCfCnRnNT7rhiLzTnXz7ooto6if6Ff+0IYfu5ZmEYAAAAASUVORK5CYII=" style="width: 15px; height: 15px;"></img></button>';}
if(uconfig.MenuBar.buttons.match("pastbtn")){mbbuttons += '<button onclick="paste()" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAb1BMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+pUA8cAAAAJXRSTlMAPrz19j1X/f/8VAzv7QvO0hga0/48HfSFhhxv1YBAcfIbzcw64my8FQAAAINJREFUOMvt08kOgyAQgOHRahm7uVCrleLWvv8z2pCyReRKmvgdCAx/uAFgi+JDEqfgdST4lZ18zfmCwvXmuExzgj9FWVG5v+e1bh4NKi3AU5+aTkVMT5FW3cs4MhVxRC5WE5fzkFHPLb0zWtujPfqDaMBNzPnNbeOk361n4krI+wMBLEc3Gfso9IUkAAAAAElFTkSuQmCC" style="width: 15px; height: 15px;"></img> </button>';} if(uconfig.MenuBar.buttons.match("selectall")){mbbuttons += '<button onclick="selAll();" > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAJ1BMVEX///9GRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkbUIPoDAAAADXRSTlMAAP+xt1G9yfack4d4sSA+PwAAAGxJREFUSMdjYBgFwwMwogHqaWACA5AGJqyAcg0gLRAnDVINaKFEEw3MEG1AkoUoDaxMcA1MrMRoYEPSwM5AbCgxInFGNQyYBg6gBg5SchwnUAMXCRq4wamVB7eTYKUG0RloRGsgsTAeBUMDAAArrQVfBiyHKAAAAABJRU5ErkJggg==" style="width: 15px; height: 15px;"></img> </button>';}
if(uconfig.MenuBar.buttons.match("deleteselection")){mbbuttons += '<button btnact="Delete" onclick="delSel()" > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEX///8DqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQOj8G9AAAAE3RSTlMACnqAfQ++/8mQCBAJ2Eb4JXd4mKXyTAAAAFZJREFUOMtjYBjsgJGJGQxYWPGoYWOHAg6sqpjZsQBOmini4sYCeDBdhQG4MJ2OaRv3qKJRRfRWhJl6GXjR1fBiyXl8/Khq+Pmw5U8BQU4kICQwuEskAG5rDt33iwynAAAAAElFTkSuQmCC" style="width: 15px; height: 15px;"></img> </button>';} if(uconfig.MenuBar.buttons.match("deleteall")){mbbuttons += '<button  onclick="delAll()" >Delete All</button>';}

if(uconfig.MenuBar.buttons.match("undo")){mbbuttons += '<button onclick="undo();"> <svg style="width: 15px;height: 15px;" style="width: 15px;height: 15px;" viewBox="0 0 24 24"><path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9 C18.9,10.8,14.7,8.7,10.4,9.4z"></path></svg> </button>';}

if(uconfig.MenuBar.buttons.match("redo")){mbbuttons += '<button id="redo" onclick="redo()"> <svg style="width: 15px;height: 15px;" viewBox="0 0 24 24" ><path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6 C5.1,10.8,9.3,8.7,13.6,9.4z"></path></svg> </button>';}

 if(uconfig.MenuBar.buttons.match("deleteall")){mbbuttons += '<button onclick="lcflsttr()">Load Last Text From localStorage</button>';}

if(uconfig.InsertTagButtons == true){mbbuttons += '<div id="insertTagButtons"><button onclick="inserttag(0)">html</button> <button onclick="inserttag(1)">head</button> <button onclick="inserttag(2)">script</button> <button onclick="inserttag(3)">br</button> <button onclick="inserttag(4)">bold</button> <button onclick="inserttag(5)">title</button> <button onclick="inserttag(6)">base</button> <button onclick="inserttag(7)">body</button> <button onclick="inserttag(8)">p</button> <button onclick="inserttag(9)">h1</button> <button onclick="inserttag(10)">h2</button> <button onclick="inserttag(11)">h3</button> <button onclick="inserttag(12)">h4</button> <button onclick="inserttag(13)">h5</button> <button onclick="inserttag(14)">h6</button> <button onclick="inserttag(15)">input</button> <button onclick="inserttag(16)">textarea</button>  <button onclick="inserttag(17)">link (stylesheet,feed....)</button>           <button onclick="inserttag(18)">a (link to...)</button> <button onclick="inserttag(19)">xml</button> </div>                                        <style> #insertTagButtons{                    border: 0.992px solid blue; width: ' + ta.style.width + 'px;display: none;                     } </style>';}

mbbuttons += "</div><style>#mbbuttons2 button{background-color: blue;color: #FFF;border: 1px black solid;}</style></center>";


var opentag = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>", "?>" ];

var ct = 0;

function inserttag(tagnum){
ct = tagnum;
ta.innerHTML += opentag[ct] + closetag[ct];
}


function undo(){ta.focus();document.execCommand("undo");} 
function redo(){ta.focus();document.execCommand("redo");} 

function selAll(){ta.select();}

function delAll(){ta.select();document.execCommand("delete");}


function copy(){ta.select();document.execCommand("Copy");}
function cut(){ ta.select(); document.execCommand("Cut");}

function paste(){ ta.focus(); document.execCommand("Paste");}



 function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


var opentag = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>", "?>" ];

var ct = 0;

function inserttag(tagnum){
ct = tagnum;
ta.innerHTML += opentag[ct] + closetag[ct];
}


ta.addEventListener('change',save());


function addTabulation(){ta.innerHTML += "\t";}
function save(){lssuct();}
 
function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


function emptyTA(vl){
ta.innerHTML = "";
}






return mbbuttons;
}






function addTabulation(){ta.innerHTML += "\t";}
function save(){lssuct();}





ta.addEventListener('change',save());
var mbarea = document.createElement("div");
mbarea.style.width = ta.style.width;
mbarea.innerHTML = getMenuBarButtons();
mbarea.id = "mbareawjs";
var mbstyle = "<style> #"+ mbarea.id + "{border: 0.5px solid blue; width: " + ta.style.width + 50 + "px; }</style>";
mbarea.style.width = ta.style.width;
mbarea.style.position = ta.style.position;
document.write(mbstyle);
mbarea.style.width = ta.style.width + 50;
mbarea.style.border = "0.9px solid blue";
p.insertBefore(mbarea, ta);
function rsmb(){
mbarea.style.width = ta.style.width;
}
rsmb(); rsmb();
rsmb(); rsmb();
rsmb();
setInterval(rsmb,0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
setTimeout(rsmb,2);

}




var opentag = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>", "?>" ];

var ct = 0;

function inserttag(tagnum){
ct = tagnum;
ta.innerHTML += opentag[ct] + closetag[ct];
}


function undo(){ta.focus();document.execCommand("undo");} 
function redo(){ta.focus();document.execCommand("redo");} 

function selAll(){ta.select();}

function delAll(){ta.select();document.execCommand("delete");}


function copy(){ta.select();document.execCommand("Copy");}
function cut(){ ta.select(); document.execCommand("Cut");}

function paste(){ ta.focus(); document.execCommand("Paste");}



 function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


var opentag = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>", "?>" ];

var ct = 0;

function inserttag(tagnum){
ct = tagnum;
ta.innerHTML += opentag[ct] + closetag[ct];
}


ta.addEventListener('change',save());


function addTabulation(){ta.innerHTML += "\t";}
function save(){lssuct();}
 
function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


function emptyTA(vl){
ta.innerHTML = "";
}




if(uconfig.InsertTagButtons == true){

document.write("<style>#InsertTagButtons{display: block;}</style>");


var opentag = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>", "?>" ];

var ct = 0;

function inserttag(tagnum){
ct = tagnum;
ta.innerHTML += opentag[ct] + closetag[ct];
}


function undo(){ta.focus();document.execCommand("undo");} 
function redo(){ta.focus();document.execCommand("redo");} 

function selAll(){ta.select();}

function delAll(){ta.select();document.execCommand("delete");}


function copy(){ta.select();document.execCommand("Copy");}
function cut(){ ta.select(); document.execCommand("Cut");}

function paste(){ ta.focus(); document.execCommand("Paste");}



 function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


var opentag = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>", "?>" ];

var ct = 0;

function inserttag(tagnum){
ct = tagnum;
ta.innerHTML += opentag[ct] + closetag[ct];
}


ta.addEventListener('change',save());


function addTabulation(){ta.innerHTML += "\t";}
function save(){lssuct();}
 
function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


function emptyTA(vl){
ta.innerHTML = "";
}












}



if(uconfig.MenuBar.buttons.match("run")){

function runcode(){
 

var riqs = uconfig.RunCode.RunIframe;
var ioex = document.querySelector(riqs);

var ucs = "data:text/html," + ta.innerHTML;
ioex.tagName = "div";

}

}






var opentag2 = ["<html>", "<head>", "<scri" + "pt>" ,"<br>", "<b>", "<title>", "<base>", "<body>", "<p>","<h1>" ,"<h2>" ,"<h3>" ,"<h4>" ,"<h5>" ,"<h6>" ,"<input" ,"<textarea>" ,"<link rel='relationType' href='link to the file'" ,"<a href='link'>" ,"<?xml version='1.0' encoding='UTF-8'" ];

var closetag2 = ["</html>", "</head>", "</scri" + "pt>" ,"</br>", "</b>", "</title>", "</base>", "</body>", "</p>","</h1>" ,"</h2>" ,"</h3>" ,"</h4>" ,"</h5>" ,"</h6>" ,">" ,"</textarea>" ,">" ,"</a>" ,"?>" ];

var ct2 = 0;

function instag(tagnum){
ct2 = tagnum;
ta.innerHTML += opentag2[ct2] + closetag2[ct2];
}


 function lasttxtsave(uta){
 window.localStorage.setItem("lasttext",uta.innerHTML);
}

function lasttextload(uta){
uta.innerHTML = window.localStorage.lasttext;
}


if(uconfig.LineNumbers == true || uconfig.LineNumbers == "true"){
var lnarea = document.createElement("textarea");
lnarea.style.width = "35px";
lnarea.style.overflow = "hidden";
lnarea.style.height = ta.style.height;
lnarea.setAttribute("readonly",true);
lnarea.innerHTML = "1 \r\n";
lnarea.id = "lnareawjs";
p.insertBefore(lnarea, ta);
var lnstyle = "<style> #"+ lnarea.id + "{height: " + ta.style.height + "px;color: grey;background-color : lightgrey;text-align: right;} </style>";
document.write(lnstyle); 
ta.addEventListener('keyup',lnref(ta,lnarea));
ta.addEventListener('copy',lnref(ta,lnarea));
ta.addEventListener('paste',lnref(ta,lnarea));
ta.addEventListener('cut',lnref(ta,lnarea));
ta.addEventListener('keydow',rstr());
setInterval(rstr,0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
setInterval(lnr,0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
lnarea.style.height = ta.style.height;
lnarea.style.border = "1px solid grey";
lnarea.style.resize = "none";
rstr();
function lnr(){ lnref(ta,lnarea); }
function rstr(){
lnarea.style.height = ta.style.height;
}
function lnref(a,b){
var v = a;
var l = v.value.split("\n").length;
var n = "";
for(var i = 0 ;i < l ; i++){n += (i + 1) + "\n";b.innerHTML = n;s(a,b);}}
function s(c,w){
w.scrollTop = c.scrollTop;
w.style.height = c.style.height;
}
lnref(ta,lnarea);
p.insertBefore(lnarea, ta);
ta.addEventListener('keyup',lnref(ta,lnarea));
ta.addEventListener('copy',lnref(ta,lnarea));
ta.addEventListener('paste',lnref(ta,lnarea));
ta.addEventListener('cut',lnref(ta,lnarea));

}




if(uconfig.MenuBar.IsHidden == true){
document.write("<style>#mbareawjs{ display: none;}</style>");
}


 function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


ta.addEventListener('change',save());


function addTabulation(){ta.innerHTML += "\t";}
function save(){lssuct();}
 
function lssuct(){
 window.localStorage.setItem("lasttext",ta.innerHTML);
}
function lcflsttr(){
ta.innerHTML = window.localStorage.lasttext;
}


function emptyTA(vl){
ta.innerHTML = "";
}




