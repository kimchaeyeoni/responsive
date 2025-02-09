$(document).ready(function(){
  
  const mobSubBtn = $('.subNav .sub_menu .depth1 > li');
  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });

  // Desktop Navigation________________________
  /* 메인 메뉴에 오버를 하면 서브가 나오고 이 상태에서 검색버튼을 누르면 검색창이 나오고,
  검색창이 나왔을 때는 메뉴에 오버를 했을 때 서브메뉴가 안나오게 함 */
  const BODY = $("body");
  const schBtn = $(".sch_btn");  //검색버튼
  const hNavBtn = $(".h_nav");  //메인메뉴 전체
  const subNav = $(".subNav");  //서브메뉴 전체
  const schWrap = $(".search_wrap");  //사용자가 입력할 수 있는 검색창

  //서브 메뉴와 검색창 둘 중에 하나만 나오게 조건을 만들기 위함
  let hNavIs = false;
  let schWrapIs = false;

  hNavBtn.mouseenter(hNav);
  subNav.mouseleave(hNav_reset);

  function hNav(){
    if(!schWrapIs && !hNavIs){  //검색창과 서브메뉴가 나와있지 않았을 때
      subNav.slideDown(function(){
        BODY.addClass('dOpen');
      });
      hNavIs = true;  //서브메뉴가 나와있는 상태에서는 true로 변경
    };
  };

  function hNav_reset(){
    if(hNavIs){  //메뉴가 나와있는 상태라면(true)
      subNav.slideUp(function(){
        BODY.removeClass('dOpen');
      });
      hNavIs = false;
    };
  };

  //Search
  schBtn.click(function(){
    if(!schWrapIs){ //false라면 (schWrapIs 나오지 않았으면)
      sch();
    }else{ //나왔을 때
      sch_reset();
    };
  });

  function sch(){
    schWrap.slideDown();  //검색 입력박스 나오게 함
    BODY.addClass('sOpen'); //클래스 불러옴
    schWrapIs = true;
    hNav_reset();  //검색창이 나오면 메뉴는 들어가야 함
  };

  function sch_reset(){
    schWrap.slideUp();
    BODY.removeClass('sOpen');
    schWrapIs = false;
  };

  //브라우저 크기가 변경되었을 때 초기화
  $(window).on('load resize', function(){
    let w = $(window).innerWidth();
    if(w < 1200){
      hNav_reset();
      sch_reset();
      subNav.removeAttr('style');
    };
  });
  
});