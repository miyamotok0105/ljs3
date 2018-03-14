//一件プロパティを追加できてるように見える。
//しかし一時的に作成されたstringオブジェクトに追加してるだけなので、一時オブジェクトがすぐに破棄される。
const s = "hello";
s.rating = 3; // エラーなし...成功？
console.log(s.rating); // undefined
