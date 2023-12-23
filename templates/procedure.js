
document.addEventListener("DOMContentLoaded", function () {
    var timelineItems = document.querySelectorAll(".timeline ul li");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleVisibility() {
      timelineItems.forEach(function (item) {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    }
  
    // Initial check on page load
    handleVisibility();
  
    // Check on scroll
    window.addEventListener("scroll", function () {
      handleVisibility();
    });
  });
  
  