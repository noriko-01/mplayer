//プレイリスト取得
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
  //clickイベントを設定
listitems[i].addEventListener('click',
  (e)=>{
    var li=e.target;
    var file = li.getAttribute('date-file');
    var audio = document.querySelector('audio');
    audio.setAttribute('src',file);
    audio.play();
    //activeな項目を変更
    var activeli =document.querySelector('.active');
    activeli.className = '';
    li.className = 'active';
  }
);
}
//再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');
audio.addEventListener('play',
(e)=>{
  var img = document.querySelector('img');
  img.setAttribute('src','stop.png');
}
);
audio.addEventListener('pause',
(e)=>{
  var img = document.querySelector('img');
  img.setAttribute('scr','play.png');
}
);
