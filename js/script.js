let funcObj = {
  f_0:function(){
    const tl = gsap.timeline();
    tl.to("#section2 .s2_img", {
      opacity: 1,
    });
    tl.to("#section2 .s2_con", {
      opacity: 1,
      stagger: 0.5,
      x: -15
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to("#section3 .rel", {
      opacity: 1,
      stagger: 0.3,
      x: 20
    });
    tl.to("#section3 .s3_con .s3_con_box", {
      opacity: 1,
      stagger: 0.7,
      y: -30
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to("#section4 .rel", {
      opacity: 1,
      stagger: 0.3,
      x: -20
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to("#section5 .rel", {
      opacity: 1,
      stagger: 0.3,
      x: 20
    });
    tl.to("#section5 .s5_con img", {
      opacity: 1,
      stagger: 0.7,
      y: -30
    });
  },
  f_4:function(){
    const tl = gsap.timeline();
    tl.to("#section6 .rel", {
      opacity: 1,
      stagger: 0.3,
      x: 30
    });
    tl.to("#section6 .s6_con .s6_bg .s6_rn img", {
      opacity: 1,
      stagger: 0.7,
      y: -30
    });
  },
  f_5:function(){
    const tl = gsap.timeline();
    tl.to("#section7 .rel", {
      opacity: 1,
      stagger: 0.3,
      x: 30
    });
  },
  
};

let section = document.querySelectorAll('section');

funcObj['f_0']();

window.addEventListener('scroll', function(){
  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;
  //console.log(scroll,outHeight);

  for(let i = 0; i < section.length; i++){
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        console.log(i);
    }
  };
});

// JQurey_____________________start
$(document).ready(function(){


  //(2) mobile Menu
  $(".nav_btn").click(function(){
    $(this).toggleClass("nactive");
    $(".sub_list").stop(true,true).slideToggle("fast");
  });

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  
});
// JQurey_____________________end