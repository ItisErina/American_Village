let mySwiper06 = new Swiper ('#swiper06', {
  autoplay: {
    delay: 2000,
  },
  
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// ハンバーガーメニュー
// $(".openbtn").click(function () {
//   $(this).toggleClass('active');
// });
$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});