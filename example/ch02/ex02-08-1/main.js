$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  //クリック検知
  //ユーザーからの入力は非同期
  //Paper.jsではtoolオブジェクトがユーザーからの入力を処理する。
  // #@@range_begin(list1) 本に表示されている部分の始まりを示します
  let tool = new Tool();
  //無名関数をセット
  // tool.onMouseDown = function(event) {
  //   let c = Shape.Circle(event.point.x, event.point.y, 50);
  //   c.fillColor = 'green';
  // };
  //イベントの貼り付けは上書きされる
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 10);
    c.fillColor = 'red';
  };
  // #@@range_end(list1) 本に表示されている部分の終わりを示します
});
