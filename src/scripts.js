// nav hover starts here
const navParents = document.querySelectorAll(".js-navlink");
const navChildren = document.querySelectorAll(".js-navbar");

navParents.forEach((navParent, index) => {
  navParent.addEventListener("click", () => {
    navChildren.forEach((navChild) => {
      // this should hide all navchild
      navChild.classList.replace("opacity-100", "opacity-0");
    });

    // this should get the index of the parent(js-navlink)
    const navChild = navChildren[index];
    navChild.classList.replace("opacity-0", "opacity-100");
    console.log(`navi child at position ${navChild} was clciked`);
  });
});

// contains faq data
const faqdata = [
  {
    question: "What is Rediones?",
    answer:
      "Rediones is a social platform designed to help students connect, collaborate, and explore university life.",
  },
  {
    question: "When will Rediones be officially launched?",
    answer:
      "We have completed the beta launch, where our ambassadors tested the platform and provided valuable feedback. We're now fixing bugs, improving features, and preparing for the full release. Stay tuned for updates, and join the waitlist to be among the first to experience Rediones!",
  },
  {
    question: "How does the Create Project feature work?",
    answer:
      "The Create Project feature allows students to launch projects, find teammates, and work collaboratively. Users can apply for projects that match their skills, interact in dedicated project spaces, and gain real-world experience for future internships or jobs.",
  },

  {
    question: "What is the Rediones Ambassador Program?",
    answer:
      "Our Ambassador Program allows passionate students to represent Rediones on their campuses. Ambassadors help spread the word, host events, and bring students together while enjoying exclusive perks.",
  },
  {
    question: "Is my data safe on Rediones?",
    answer:
      "Yes! We prioritize user privacy and follow industry standards to keep your data secure. We do not sell or share your personal information.",
  },
  {
    question:
      "How can I contact Rediones for support or partnership opportunities?",
    answer:
      'You can reach us at <a href="mailto:redionesofficial@gmail.com" class="underline">redionesofficial@gmail.com</a> for general inquiries and collaboration opportunities.',
  },
];

// generating faq list......
const faqcont = document.querySelector(".faq-cont");
faqdata.forEach(({ question, answer }) => {
  faqcont.innerHTML += `
  <div class="faqsect questioncont">
             <div class="flex justify-between items-center">
               <h5 class="text-mainColor-0 max-xs:text-[14px] max-sm:w-[250px] ">
                 ${question}
               </h5>
              
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 width="18"
                 height="18"
                 fill="rgba(217,74,74,1)"
                 class="opensign"
               >
                 <path
                   d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                 ></path>
               </svg>
            
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 width="18"
                 height="18"
                 fill="rgba(217,74,74,1)"
                 class="hidden closesign"
               >
                 <path
                   d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                 ></path>
               </svg>
             </div>
             <div class="hidden answercont mt-2">
               <h5 class="max-xs:text-[12px] text-[16px]  max-xxs:w-[214px] max-sm:w-[270px]" >
                ${answer}
               </h5>
             </div>
           </div>`;
});

// faq saction starts here
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

// hide nav on scroll
const nav = document.getElementById("js-nav");
let lastscroll = window.scrollY;
const threshould = 50;

window.addEventListener("scroll", () => {
  let currentscroll = window.scrollY;
  if (Math.abs(currentscroll - lastscroll) > threshould) {
    if (currentscroll > lastscroll) {
      // the -translate-y-full should hide the nav bar
      nav.classList.add("-translate-y-full");
    } else {
      nav.classList.remove("-translate-y-full");
    }
    lastscroll = currentscroll;
  }
});
