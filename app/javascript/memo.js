function post (){
  // 関数宣言
  const submit = document.getElementById("submit");
  // submit要素（投稿するボタン）をhtmlから取得してsubmit変数に代入
  submit.addEventListener("click", (e) => {
    // イベント発火 クリックしたら〜
    e.preventDefault();
    // 元々あるイベントの無効化 ブラウザからリクエストを消して1回のリクエストにする
    const form = document.getElementById("form");
    // フォーム自体の要素を取得してform変数に代入する
    const formData = new FormData(form);
    // フォームに入力された値を取得する 新しいオブジェクト
    const XHR = new XMLHttpRequest();
    // 非同期通信 xhr変数に代入
    XHR.open("POST", "/posts", true);
    // 非同期で使うメソッド open
    XHR.responseType = "json";
    // レスポンスの型  
    XHR.send(formData);
    // formdataに代入されているフォームに入力した値を送信する
  });

 };
 
 window.addEventListener('load', post);
//  事前に読み込む post 
// windowでページ読み込んで関数post実行 先頭のpostにいく
 