const navParents = document.querySelectorAll(".js-navlink");
const navChildren = document.querySelectorAll(".js-navbar");

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

const questionCont = document.querySelectorAll(".questioncont");
const answerCont = document.querySelectorAll(".answercont");
const opensymbol = document.querySelectorAll(".opensign");
const closesymbol = document.querySelectorAll(".closesign");
questionCont.forEach((question, index) => {
  question.addEventListener("click", () => {
    const ishidden = answerCont[index].classList.contains("hidden");
    answerCont.forEach((answer, i) => {
      answer.classList.add("hidden");
      opensymbol[i]?.setAttribute("class", "opensign");
      closesymbol[i]?.setAttribute("class", "closesign hidden");
    });
    if (ishidden) {
      console.log("clicked");
      answerCont[index].classList.remove("hidden");
      closesymbol[index]?.setAttribute("class", "closesign");
      opensymbol[index]?.setAttribute("class", "opensign hidden");
    } else {
      answer.classList.add("hidden");
      opensymbol[i]?.setAttribute("class", "opensign");
      closesymbol[i]?.setAttribute("class", "closesign hidden");
    }
  });
});
