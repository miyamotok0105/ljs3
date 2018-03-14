$(document).ready(function() {
  'use strict';
  //グローバルスコープ
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  /* ここで描画する */
// #@@range_begin(list1)  本に表示されている部分の始まりを示します
//円を描画する
  let c = Shape.Circle(200, 200, 50);
  c.fillColor = 'red';
// #@@range_end(list1)  本に表示されている部分の終わりを示します

  paper.view.draw();

});
