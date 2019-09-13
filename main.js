//header导航栏改变背景颜色并且显示一个导航栏

//关闭手机淘宝二维码
function closeSjtb() {
    document.getElementsByClassName('head-code')[0].style.display = 'none';
}

//中国大陆鼠标事件
function zgdlOver(my) {
    my.style.backgroundColor = '#ffffff';
    document.getElementById('hidNav').style.display = 'block';
}
function zgdlOut(my) {
    my.style.backgroundColor = '#f5f5f5';
    document.getElementById('hidNav').style.display = 'none';
}
function hidnavOver(my) {
    my.style.display = 'block';
    document.getElementsByClassName('zgdl')[0].style.backgroundColor = '#ffffff';
} 
function hidnavOut(my) {
    my.style.display = 'none';
    document.getElementsByClassName('zgdl')[0].style.backgroundColor = '#f5f5f5';
}

//我的淘宝鼠标事件
function content1Over(my) {
    my.style.backgroundColor = '#ffffff';
    document.getElementById('mytaobao').style.display = 'block';
}
function content1Out(my) {
    my.style.backgroundColor = '#f5f5f5';
    document.getElementById('mytaobao').style   .display = 'none';
}
function mytaobaoOver(my) {
    my.style.display = 'block';
    document.getElementsByClassName('content1')[0].style.backgroundColor = '#ffffff';
} 
function mytaobaoOut(my) {
    my.style.display = 'none';
    document.getElementsByClassName('content1')[0].style.backgroundColor = '#f5f5f5';
}

//收藏夹鼠标事件
function hidstarOver(my) {
    my.style.backgroundColor = '#ffffff';       
    document.getElementsByClassName('hidStar')[0].style.display = 'block';
}
function hidstarOut(my) {
    document.getElementsByClassName('hidStar')[0].style.display = 'none';
    my.style.backgroundColor = '#f5f5f5';
    
}
function hidstarOver2(my) {
    my.style.display = 'block';
    document.getElementsByClassName('content3')[0].style.backgroundColor = '#ffffff';
    // document.getElementsByClassName('hidStar')[0].style.display = 'block';
}
function hidstarOut2(my) {
    document.getElementsByClassName('content3')[0].style.backgroundColor = '#f5f5f5';
    my.style.display = 'none';
}

//卖家中心鼠标事件
function content5Over(my) {
    my.style.backgroundColor = '#ffffff';       
    document.getElementsByClassName('hidMjzx')[0].style.display = 'block';
}
function content5Out(my) {
    document.getElementsByClassName('hidMjzx')[0].style.display = 'none';
    my.style.backgroundColor = '#f5f5f5';
    
}
function hidmjzxOver(my) {
    my.style.display = 'block';
    document.getElementsByClassName('content5')[0].style.backgroundColor = '#ffffff';
}
function hidmjzxOut(my) {
    document.getElementsByClassName('content5')[0].style.backgroundColor = '#f5f5f5';
    my.style.display = 'none';
}

//联系客服鼠标事件
function content6Over(my) {
    my.style.backgroundColor = '#ffffff';       
    document.getElementsByClassName('hidLxkf')[0].style.display = 'block';
}
function content6Out(my) {
    document.getElementsByClassName('hidLxkf')[0].style.display = 'none';
    my.style.backgroundColor = '#f5f5f5';
    
}
function hidlxkfOver(my) {
    my.style.display = 'block';
    document.getElementsByClassName('content6')[0].style.backgroundColor = '#ffffff';
}
function hidlxkfOut(my) {
    document.getElementsByClassName('content6')[0].style.backgroundColor = '#f5f5f5';
    my.style.display = 'none';
}

// 网址导航鼠标事件
function content7Over(my) {
    my.style.backgroundColor = '#ffffff';       
    document.getElementsByClassName('hidWzdh')[0].style.display = 'block';
}
function content7Out(my) {
    document.getElementsByClassName('hidWzdh')[0].style.display = 'none';
    my.style.backgroundColor = '#f5f5f5';
    
}
function hidwzdhOver(my) {
    my.style.display = 'block';
    document.getElementsByClassName('content7')[0].style.backgroundColor = '#ffffff';
}
function hidwzdhOut(my) {
    document.getElementsByClassName('content7')[0].style.backgroundColor = '#f5f5f5';
    my.style.display = 'none';
}

//下一张图片按钮
var i=1;
function nextBtn(){
    if(i<4){
        i++;
    }else{
        i=1;
    }
    document.getElementById('maintopleft').style.backgroundImage = 'url(img/qhst'+i+'.png)';
    
}
//上一张图片按钮
function preBtn(){
    if(i==1){
        i=4;
    }else{
        i--;
    }
    document.getElementById('maintopleft').style.backgroundImage = 'url(img/qhst'+i+'.png)';
}
var theTimer = setInterval(nextBtn,8000);
window.onload = nextBtn;

//显示按钮
function showbtn() { 
    document.getElementById('leftBtn').style.display = 'block';
    document.getElementById('rightBtn').style.display = 'block';
}
function hidbtn() { 
    document.getElementById('leftBtn').style.display = 'none';
    document.getElementById('rightBtn').style.display = 'none';
}

//
var nextBtnValue2=1;
function floatBtn(my) {
    switch (my) {
        case 1:
            //上一个图片按钮
            if(nextBtnValue2==1){
                nextBtnValue2 = 6;
            }else{
                nextBtnValue2--;
            }
            document.getElementById('mainTwoPic').style.backgroundImage = 'url(img/cen_left_bot/'+nextBtnValue2+'.png)';
            break;
        case 2:
            //下一张图片按钮
            if(nextBtnValue2==6){
                nextBtnValue2 = 1;
            }else{
                nextBtnValue2++;
            }
            document.getElementById('mainTwoPic').style.backgroundImage = 'url(img/cen_left_bot/'+nextBtnValue2+'.png)';            
        default:
            break;
    }
}
//显示按钮2
function controlBtn(my) {
    switch (my) {
        //移入div
        case 1:
            document.getElementById('leftBtn2').style.display = 'block';
            document.getElementById('rightBtn2').style.display = 'block';
            break;
        //移出div
        case 2:
            document.getElementById('leftBtn2').style.display = 'none';
            document.getElementById('rightBtn2').style.display = 'none';
            break;

        default:
            break;
    }
}

// 下一张图片按钮2
// var nextBtnValue2=1;
// console.log(nextBtnValue2);
// function nextBtn2(){
//     if(i<5){
//         nextBtnValue2++;
//     }else{
//         nextBtnValue2=1;
//     }
//     document.getElementsByClassName('main-twopics')[0].style.backgroundImage = 'url(img/cen_left_bot/'+nextBtnValue2+'.png)';
// }
//上一张图片按钮2
// function preBtn2(){
//     clearTimeout(theTimer);
//     if(i==1){
//         i=4;
//     }else{
//         i--;
//     }
//     document.getElementsByClassName('main-top-left')[0].style.backgroundImage = 'url(img/qhst'+i+'.png)';
// }
// var theTimer = setInterval('nextBtn()',8000);
// window.onload = nextBtn();

// //显示按钮2
// function showbtn2() { 
//     document.getElementById('leftBtn').style.display = 'block';
//     document.getElementById('rightBtn').style.display = 'block';
// }
// function hidbtn2() { 
//     document.getElementById('leftBtn').style.display = 'none';
//     document.getElementById('rightBtn').style.display = 'none';
// }