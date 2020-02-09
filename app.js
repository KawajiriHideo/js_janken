alert("PK戦を始めましょう！")
$(".top").css("text-align","center");

$(".upper").css("display","flex");
// $(".upper").css("padding","50px 490px 0px 490px");
$(".upper").css("max-width","50%");
$(".upper").css("margin","0 auto");
$(".upper").css("justify-content","space-between");

$(".bottom").css("display","flex");
// $(".bottom").css("padding","50px 490px 0px 490px");
$(".bottom").css("max-width","50%");
$(".bottom").css("margin","0 auto");
$(".bottom").css("justify-content","space-between");

$(".question").css("text-align","center");
$(".question").css("font-size","20px");


$("p").css("margin","50px");
$("p").css("border-style","solid")
$("p").css("border-color","green")
$("p").css("padding","10px 50px")

$(function(){
    // マウスを乗せたら発動
    $("p").hover(function(){
    // マウスを乗せたら色が変わる
    $(this).css("background","green");
    }, function(){
    // 元の色に戻る
    $(this).css("background","");
});
});


// border: 2px;
//     border-style: solid;
//     border-color: blue;
//     padding: 10px 50px;
//     transition: 4s;
//     color: blue;

// クリック動作ここから

// 左上をクリックしたら
$(".a").on("click", function(){
    // クリックしたら結果の前に画像を表示したい
    $("top").html('<img src="img/kick.png" max-width="50%" height="400px">' )
    // 結果の表示のされかた
    $(".top").fadeOut(3000);
    var random = Math.floor( Math.random() *7);
    if(random==0){
        $(".top").html('<img src="img/miss2.png" max-width="50%" height="400px">')
    }
    else if(random==1) {
        $(".top").html('<img src="img/save.png" max-width="50%" height="400px">')
    }
    else if(random==2) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==3) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==4) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==5) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==6) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
})
// 上をクリックしたら
$(".b").on("click", function(){
    $(".top").fadeOut(3000);
    var random = Math.floor( Math.random() *7);
    if(random==0){
        $(".top").html('<img src="img/miss2.png" max-width="50%" height="400px">')
    }
    else if(random==2) {
        $(".top").html('<img src="img/save.png" max-width="50%" height="400px">')
    }
    else if(random==1) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==3) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==4) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==5) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==6) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
})
// 右上をクリックしたら
$(".c").on("click", function(){
    $(".top").fadeOut(3000);
    var random = Math.floor( Math.random() *7);
    if(random==0){
        $(".top").html('<img src="img/miss2.png" max-width="50%" height="400px">')
    }
    else if(random==3) {
        $(".top").html('<img src="img/save.png" max-width="50%" height="400px">')
    }
    else if(random==1) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==2) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==4) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==5) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==6) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
})
// 左下をクリックしたら
$(".d").on("click", function(){
    $(".top").fadeOut(3000);
    var random = Math.floor( Math.random() *7);
    if(random==0){
        $(".top").html('<img src="img/miss2.png" max-width="50%" height="400px">')
    }
    else if(random==4) {
        $(".top").html('<img src="img/save.png" max-width="50%" height="400px">')
    }
    else if(random==1) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==2) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==3) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==5) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==6) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
})
// 下をクリックしたら
$(".e").on("click", function(){
    $(".top").fadeOut(3000);
    var random = Math.floor( Math.random() *7);
    if(random==0){
        $(".top").html('<img src="img/miss2.png" max-width="50%" height="400px">')
    }
    else if(random==5) {
        $(".top").html('<img src="img/save.png" max-width="50%" height="400px">')
    }
    else if(random==1) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==2) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==3) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==4) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==6) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
})
// 右下をクリックしたら
$(".f").on("click", function(){
    $(".top").fadeOut(3000);
    var random = Math.floor( Math.random() *7);
    if(random==0){
        $(".top").html('<img src="img/miss2.png" max-width="50%" height="400px">')
    }
    else if(random==6) {
        $(".top").html('<img src="img/save.png" max-width="50%" height="400px">')
    }
    else if(random==1) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==2) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==3) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==4) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
    else if(random==5) {
        $(".top").html('<img src="img/goal3.png" max-width="50%" height="400px">')
    }
})
    // ここから上にif文をコピペする。

    // 結果が出たら最初に戻る
    // alert("再読み込みしてくださいm(_ _)m")
