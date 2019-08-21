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
