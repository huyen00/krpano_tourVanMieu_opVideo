$(document).ready(function(){
    // $(".guide").hide();
    $(".close").click(function(){
      $(".guide").hide();
    });
    $(".guide").click(function(){
        $(".guide").hide();
    });
    $("#icon_guide").click(function(){
        $(".guide").show();
    });
  });
  // click info
  $(".close").click(function(){
    $(".info").hide();
  });
  $(".info").click(function(){
      $(".info").hide();
  });
  $("#icon_info").click(function(){
      $(".info").show();
  });

  // click video
  $(document).ready(function(){
    // $(".video").hide();
    $(".close").click(function(){
      $(".video").hide();
    });
    $(".video").click(function(){
        $(".video").hide();
    });
    $("#icon_video").click(function(){
        $(".video").show();
    });
  });
  // click form
  $(document).ready(function(){
    // $(".form").hide();
    $(".close").click(function(){
      $(".form").hide();
    });
    $(".form").click(function(){
        $(".form").hide();
    });
    $("#icon_form").click(function(){
        $(".form").show();
    });
  });
 
// hs
  $(document).ready(function(){
    $(".form").hide();
    $(".info_toancanh").click(function(){
      $(".form").hide();
    });
    $(".form").click(function(){
        $(".form").hide();
    });
    $("info_toancanh").click(function(){
        $(".form").show();
    });
  });
  
  // xử lý voice 
  (function ($) {
    embedpano({
        xml: "tour.xml",
        target: "pano",
        html5: "only",
        mobilescale: 1.0,
        passQueryParameters: true,
        onready: krpanoReady
    });

    function krpanoReady(krpano) {
      $("#icon_unmute").hide();
        $("#icon_unmute").on("click", function (e) {
            e.preventDefault();

            console.log(krpano);
            $("#icon_mute").show();
          
            $("#icon_unmute").hide();
      

            krpano.call("resumesound()");
        });
        $("#icon_mute").on("click", function (e) {
          e.preventDefault();

          console.log(krpano);
          $("#icon_unmute").show();
        
          $("#icon_mute").hide();
     
          krpano.call("pause_sound()");
          
          
      });
      // xu ly VR
      $("#icon_VR").on("click", function(e){
        krpano.call("webvr.enterVR()");
      })
      // xu ly scene
      
      $("#icon_back").on("click",function(e){
        krpano.call("back_scene()");
      });
      // xu ly show/hide hotspot
      $("#hotspot_open").hide();
      $("#hotspot_Close").on("click",function(e){
        $("#hotspot_open").show();
        $("#hotspot_Close").hide();
        krpano.call("hideallhotspots()");
      });
      $("#hotspot_open").on("click",function(e){
        $("#hotspot_open").hide();
        $("#hotspot_Close").show();
        krpano.call("showallhotspot()");
      });
      $(".slick-slide.slick-current").click(function(e){
        // $(".slick-slide").addclass("slick-current");
     
        krpano.call("loadscene_with_name()");
       
      });
      // xu ly active khi click
    $(".item-thumbs").click(function(e){
      var link_scene = $(this).attr('id');
      console.log(link_scene);
     
      var elems = document.querySelectorAll(".active");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active");
        
      });
      $(this).addClass("active");
   
      krpano.call("load_scene(" +link_scene + ")");
     
    });
    // xu ly minimap
    $(".panWrapper").mousedown(function(e){
      e.preventDefault();
    
     $(".panWrapper").hide();
      krpano.call("showmap()");
      
    });
   

     
    }
})(jQuery);

  // xử lý fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
// xử lý share link
const button = document.querySelector('#icon_sharelink')
button.onclick = () => {
  navigator.clipboard.writeText(window.location.href);
}

// xử lý quay trở lại scene trước
function changepano(panoName)
{
var krpano = document.getElementById("krpanoSWFObject1");
krpano.call("loadscene(" + panoName + ");");
}

$('.list-thumbs').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 7,
  prevArrow: "<i class='fas fa-angle-left prev_arrow arrow'></i>",
 
  nextArrow:"<i class='fas fa-angle-right next_arrow arrow'></i>",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// xư lý thumbs list
$(document).ready(function(){
  // $(".icon_thumbs").removeClass('icon_thumbs_rotate')
  $(".icon_thumbs_bottom").hide();
  $(".icon_thumbs").click(function(){
    $(".list-thumbs").toggle();
    $(".icon_thumbs").hide();
    $(".icon_thumbs_bottom").show();
  });
  // $(".icon_thumbs_bottom").hide();
  $(".icon_thumbs_bottom").click(function(){
    $(".list-thumbs").toggle();
    $(".icon_thumbs").show();
    $(".icon_thumbs_bottom").hide();
  });
  
  
});

$('.list-thumbs').slick({
 
});

// function getSceneName(){
//   if(krpano){
//     krpano.set("scene[get(xml.scene_0008_equi)].title","Nouveau titre");
//   }
// }


// document.getElementClassName("slick-prev").innerHTML = ">"


$(document).ready(function(){
  $('.list-thumbs').on('afterChange', function(event, slick, currentSlide){
    $('.result').text('afterChange : ' + (currentSlide + 1));
  });
  $('.list-thumbs').slick();
});