function closeNav() {
      document.getElementById("myNav").style.height = "0%";
    }
    function openNav() {
      document.getElementById("myNav").style.height = "100%";
    }

    function hideBurger() {
      var element = document.getElementById("myNav");
      element.classList.remove("overlay-hide");
      var element = document.getElementById("burger");
      element.classList.add("hide");
      var element = document.getElementById("cross");
      element.classList.remove("hide-cross");
      var element = document.getElementById("body");
      element.classList.add("noscroll");
      
    }
    function showBurger() {
      var element = document.getElementById("burger");
      element.classList.remove("hide");
      var element = document.getElementById("cross");
      element.classList.add("hide-cross");
      var element = document.getElementById("body");
      element.classList.remove("noscroll");
    }