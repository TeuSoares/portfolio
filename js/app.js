// Navbar
$(window).scroll(function () {
  let scroll = $(window).scrollTop();

  if (scroll > 500) {
    $("nav").css("background-color", "rgb(4, 4, 4, 0.9)");
  } else {
    $("nav").css("background-color", "#040404");
  }
});

// ScrollClick
$(".homeClick, #button-footer").click(() => {
  $("html, body").animate({ scrollTop: $("#home").offset()["top"] }, 500);
});

$(".aboutClick, #button_banner").click(() => {
  $("html, body").animate({ scrollTop: $("#about").offset()["top"] }, 500);
});

$(".skillsClick").click(() => {
  $("html, body").animate({ scrollTop: $("#skills").offset()["top"] }, 500);
});

$(".servicesClick").click(() => {
  $("html, body").animate({ scrollTop: $("#services").offset()["top"] }, 500);
});

$(".projectsClick").click(() => {
  $("html, body").animate({ scrollTop: $("#projects").offset()["top"] }, 500);
});

$(".contactClick").click(() => {
  $("html, body").animate({ scrollTop: $("#contact").offset()["top"] }, 500);
});

// Aparecer elementos
function boxTop(idBox) {
  // Essa função é responsável por calcular a distância entre cada elemento que adicionarmos a classe anime e o topo da página.
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function () {
  var $target = $(
      ".showUp, .showRight, .showLeft, .showDown, .showUp4s, .showUp3s"
    ),
    animationClass = "startAnimationScroll",
    windowHeight = $(window).height(),
    offset = windowHeight - windowHeight / 4;

  function animationScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      }
    });
  }
  animationScroll();

  $(document).scroll(function () {
    setTimeout(function () {
      animationScroll();
    }, 150);
  });

  const currentYear = new Date().getFullYear();
  $("#year").text(currentYear);
});

// Navbar Mobile
$("#open").click(function () {
  $(".navbar-mobile").slideToggle();
  $("#open").hide();
  $("#close").show();
});
$("#close").click(function () {
  $(".navbar-mobile").slideToggle();
  $("#open").show();
  $("#close").hide();
});

// About
const openTab = (selectedTab) => {
  const tabs = [
    {
      id: "bioID",
      button: "bioIDButton",
    },
    {
      id: "experienceID",
      button: "experienceIDButton",
    },
    {
      id: "educationID",
      button: "educationIDButton",
    },
  ];

  tabs.forEach((tab) => {
    const tabID = $(`#${tab.id}`);
    const tabButton = $(`#${tab.button}`);

    if (tab.id === selectedTab) {
      tabButton.addClass("tab-active");
      tabID.show();
    } else {
      tabButton.removeClass("tab-active");
      tabID.hide();
    }
  });
};
