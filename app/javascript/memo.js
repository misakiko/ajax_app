const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    XHR.open("POST", "/postss", true);
    // 非同期で使うメソッド open
    XHR.responseType = "json";
    // レスポンスの型  
    XHR.send(formData);
    // formdataに代入されているフォームに入力した値を送信する
    XHR.onload = () => {
      // レスポンスの受信に成功
      // console.log(XHR.response);
        // レスポンスの内容確認
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        };
        // レスポンスに問題があったとき
      const list = document.getElementById("list"); 
      // 新しいメモを挿入するための要素取得 listに格納 
      const formText = document.getElementById("content");
      // 投稿するたびにフォームの値リセット
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
        // ある要素の指定箇所にhtml挿入
        formText.value = "";
    };
  });
 };
 window.addEventListener('load', post);
//  事前に読み込む post 
// windowでページ読み込んで関数post実行 先頭のpostにいく
 