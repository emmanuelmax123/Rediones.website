const navParents = document.querySelectorAll(".js-navlink");
const navChildren = document.querySelectorAll(". js-navbar");

navParents.forEach((navParent) => {
  navParent.addEventListener("click", () => {
    navChildren.forEach((navChid) => {
      // this should hide all navchild
      navChid.classList.remove("opacity-100");
      navChid.classList.add("opacity-0");

      // if we clciked on a nav child show it
      if (navChid) {
        navChid.classList.add("opacity-100");
        navChid.classList.remove("opacity-0");
      }
    });
  });
});
