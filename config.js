/* =========================================================
   不動産比較ラボ 設定ファイル
   ここの2か所だけ書き換えればOKです
   ========================================================= */
window.SITE_CONFIG = {
  // ① GAS(Google Apps Script)のウェブアプリURL
  //    例: 'https://script.google.com/macros/s/xxxxxxxx/exec'
  GAS_ENDPOINT: 'https://script.google.com/macros/s/AKfycbw4udEAsEnW514df6hCfmqF5sKsFHCCoKCJy8pz5w1PH8d_Qlau6FSSAfkqGrS2FPed/exec',

  // ② MetaピクセルID(数字だけ)
  //    例: '123456789012345'
  META_PIXEL_ID: '',

  // ③ 会社HPのURL(空欄なら非表示)
  COMPANY_URL: 'https://ik-info.com/',

  // ④ InstagramのURL(空欄なら非表示) 例: 'https://www.instagram.com/xxxx/'
  INSTAGRAM_URL: 'https://www.instagram.com/kenchan_fp/',

  // ⑤ 代表者の顔写真(サイトに置いた画像ファイル名。空欄ならイニシャル表示) 例: 'ihara.jpg'
  PROFILE_PHOTO: 'ihara.jpg'
};

/* ---------- Metaピクセル(IDが入っている時だけ動きます) ---------- */
(function () {
  var id = window.SITE_CONFIG.META_PIXEL_ID;
  if (!id) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', id);
  fbq('track', 'PageView');

  // 完了ページ(thanks.html)では、フォーム送信直後の時だけ「Lead」を送る
  if (window.TRACK_LEAD) {
    var submitted = false;
    try { submitted = sessionStorage.getItem('lp_submitted') === '1'; sessionStorage.removeItem('lp_submitted'); } catch (e) {}
    if (submitted) fbq('track', 'Lead');
  }
})();
