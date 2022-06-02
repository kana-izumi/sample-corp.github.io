new WOW().init();

// スワイパー
var swiper = new Swiper(".mySwiper", {
  speed: 400,
  spaceBetween: 24,
  width: 274,
  loop: true,
  loopedSlides: 6,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
      width: 400,
    }
  }
  });

// アコーディオン
$('.qa__box-q').on('click',function(){
    $(this).next().slideToggle();
    $(this).children('.qa__box-icon').toggleClass('is-open');
  })

  // ドロワーメニュー
$('.drawer__icon').on('click' , function(e){
  e.preventDefault();

  $('.drawer__icon').toggleClass('is-active');
  $('.drawer__content').toggleClass('is-active');
  $('.drawer__background').toggleClass('is-active');
return false;
});

// ページ内スクロール
// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
  let header = $(".header").innerHeight();
  let speed = 300;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  let position = $(target).offset().top - header;
  $("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

// ページ内スムーススクロール
$(function () {
  const pageTop = $(".to-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100pxスクロールしたら発火
      pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500 // 500ミリ秒かけてページトップに戻る
    );
    return false;
  });
});

// googleForm
let $form = $( '#js-form' )
$form.submit(function(e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function() {
        //送信に成功したときの処理
        $form.slideUp()
        $(' #js-success' ).slideDown()
      },
      200: function() {
        //送信に失敗したときの処理
        $form.slideUp()
        $(' #js-error' ).slideDown()
      }
    }
  });
  return false;
});

// formの入力確認
let $submit = $( '#js-submit' )
$( '#js-form input , #js-form textarea' ).on( 'change' , function(){
  if (
    $( '#js-form input[type="text"]' ).val !== "" &&
    $( '#js-form input[name="entry.1900588008"]' ).prop('checked') === true
  ) {
    // 全て入力された時
    $submit.prop( 'disabled' , false)
    $submit.addClass( 'active' )
  } else {
    // 入力されていない時
    $submit.prop( 'disabled' , true)
    $submit.removeClass( 'active' )
  }
});