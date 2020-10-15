var myBirthTime = new Date(1985, 03, 04, 00, 00);
function updateParagraph(){
  var now = new Date();
  // .getTime() で1970年１月1日00:00:00からのミリ秒を取得
  var seconds = (now.getTime() - myBirthTime.getTime()) /1000;
  document.getElementById('birth-time').innerText =
  // バッククォートで文字列囲むと${}で変数を埋め込める
    `生まれてから${seconds} 秒経過`;
}
setInterval(updateParagraph, 50);