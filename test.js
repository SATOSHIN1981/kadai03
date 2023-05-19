
let janken_judge;

// ボタンを押したらBGMが流れる
const kakegoe_start = new Audio('bgm/127620131788030.mp3')
$('#button_start').click(function(){
    kakegoe_start.play()
    $("#judgment").attr('src',"")
})

// ボタンの表示・非表示
const startbutton = document.getElementById('button_start') 
    // なんか、手を非表示にできる方法はみつからん。画像のクラス名、onclick名、divの名前でやってみたけど表示され続けてしまう。
// const handsbutton = document.getElementById('gamepad') 


// ストップウォッチ１　同時に手を出す判定。
let startTime;
let hands_time;
let tatakabu_time; 

let judgment_time1;
let judgment_time1_s;

let judgment_time2;
let judgment_time2_s;

    // 1)スタートを押した時刻の取得
    $('#button_start').click(function(){
    startTime=Date.now();


    // startbutton.disabled=true;
    // handsbutton.disabled=false;
    })
    // ２）手を押した時刻の取得
    $('.select_hand').click(function(){
        hands_time=Date.now();

        // startbutton.disabled=false;
        // handsbutton.disabled=true;
 
        // 2-2）手を押したときに、２つの時刻からの判定
   
        judgment_time1=new Date(hands_time - startTime);
        judgment_time1_s=(judgment_time1.getMilliseconds() + judgment_time1.getSeconds()*1000) ;

        console.log(judgment_time1_s,"手を出す時間")
    })
    // 3) tatakabuした時間の取得
    $('.select_tatakabu').click(function(){
        tatakabu_time=Date.now();

        // startbutton.disabled=false;
        // handsbutton.disabled=true;
 
        // 2-2）手を押したときに、２つの時刻からの判定
   
        judgment_time2=new Date( tatakabu_time - hands_time);
        judgment_time2_s=(judgment_time2.getMilliseconds() + judgment_time2.getSeconds()*1000) ;
        console.log(judgment_time2_s,"たたくの時間");
    })




// gu choki pa のどれかをクリックしたら、ランダムでコンピュータの手を算出
function p_hands(p_select){
    var random = Math.floor(Math.random()*3 + 1)
    console.log(random,"ランダムで数字出せるかな")


// あなたの手を表示

if(p_select === 1){
    $("#u_hands").attr('src',"img/janken/janken_gu.png")

    }
    else if(p_select === 2 ){
    $("#u_hands").attr('src',"img/janken/janken_choki.png")

    }
    else if(p_select === 3 ){
    $("#u_hands").attr('src',"img/janken/janken_pa.png")
    }

// コンピュータの手を表示
    if(random === 1){
    console.log("PCはぐー")
    $("#pc_hands").attr('src',"img/janken/janken_gu.png")


    }
    else if(random === 2 ){
    console.log("PCはちょき")
    $("#pc_hands").attr('src',"img/janken/janken_choki.png")

    }
    else if(random === 3 ){
    console.log("PCはぱー")
    $("#pc_hands").attr('src',"img/janken/janken_pa.png")
    }

// 勝ち負けの判断（じゃんけん）

    // if(random === p_select){
    // console.log("引き分け")
    // $("#judgment").attr('src',"img/winlose/pose_draw.jpeg")

   

    // }
    // else if(random === 1 && p_select === 3 ){
    // console.log("勝ち")
    // $("#judgment").attr('src',"img/winlose/pose_win_boy.png")
    

    // }

    // else if(random === 2 && p_select === 1 ){
    //     console.log("勝ち")
    //     $("#judgment").attr('src',"img/winlose/pose_win_boy.png")
       

    // }
    // else if(random === 3 && p_select === 2 ){
    //     console.log("勝ち")
    //     $("#judgment").attr('src',"img/winlose/pose_win_boy.png")
    
  
    // }
    // else {
    // console.log("負け")
    // $("#judgment").attr('src',"img/winlose/pose_lose_boy.png")
    // }

// 勝ち負けの判断（たたいてかぶって）
    if(judgment_time1_s >= 5000 ){
        janken_judge = 3;
        console.log("遅い")
        $("#judgment").attr('src',"img/winlose/character_turtle_ko.png")
    }
    else if(random === p_select){
    janken_judge = 2;
    console.log("じゃんけん引き分け")
    $("#judgment").attr('src',"img/winlose/pose_draw.jpeg")
    // $("#judgment").attr('scr',"img/winlose/character_turtle_ko.png")
        // じゃんけんで引き分けなら、じゃんけんをリピートすべきなんだろうけど。。。
   
    }
    else if(random === 1 && p_select === 3 || random === 2 && p_select === 1 || random === 3 && p_select === 2){
    janken_judge = 1;
        console.log(janken_judge,"じゃんけん勝ち")
   

     }

  
    else {
        janken_judge = 0;
    console.log(janken_judge,"じゃんけん負け")
   


    }

}

function p_tatakabu(p_tatakabu_select){
     
    if(judgment_time2_s <= 2000 && janken_judge==1 && p_tatakabu_select ==1  ){
        console.log("勝ち")
        $("#judgment").attr('src',"img/winlose/pose_win_boy.png")
    }
    else if(janken_judge==0 && p_tatakabu_select ==1){
        console.log("選択ミス・負け")
        $("#judgment").attr('src',"img/winlose/pose_lose_boy.png")
    }
    else if(judgment_time2_s >= 2000 && janken_judge==0 && p_tatakabu_select ==2 ){
        console.log("一本")
        $("#judgment").attr('src',"img/winlose/pose_lose_boy.png")
    }
    else if(janken_judge==2 && p_tatakabu_select ==1  ){
        console.log("選択ミス・あいこ")
        $("#judgment").attr('src',"img/winlose/pose_lose_boy.png")
    }
    else {
    $("#judgment").attr('src',"img/winlose/pose_draw.jpeg")
    console.log("引き分け")
    }

    // なんか、時間の制限はかかっていない気がするんだのなぁ。


}

    



