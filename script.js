                                                                                        // SYMBOL
// let obj = {
//     name: "faraz",
//     age: 19,
//     email: "faraz@js.com",
//     uid: 1
// }

// let u1 = Symbol("uid");
// obj[u1] = 100;




                                                                                        // bigint  ---  Number.MAX_SAFE_INTEGER
// let a = 9007199254740991n;
// a += 7n
// console.log(a);





                                                                                        // QUIRKS
// console.log(typeof 12);       // "number"
// console.log(typeof "hello");  // "string"
// console.log(typeof true);     // "boolean"
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof 10n);      // "bigint"
// console.log(typeof {});       // "object"
// console.log(typeof undefined); // "undefined"





                                                                                        // COERCION  ---  Automatic type conversion done by JavaScript.

// console.log("10" + 2);
// console.log("10" - 2);
// console.log(true + 1);
// console.log(false == 0);







                                                                                        // TRUTHY VS FALSY VALUES  ---
                                                                                        // 0, "", null, undefined, NaN, document.all are False
                                                                                        // and rest of them are all True

// console.log(!!0);
// console.log(!!"");
// console.log(!!undefined);
// console.log(!!23);
// console.log(!![]);








                                                                                        // UNARY 
//PRE
// let x = 12; 
// console.log(++x + x)     


//POST
// let y = 12; 
// console.log(y++ +y)






                                                                                        // TERNARY 
                                                            // condition ? code for true condition : code for false condition

// let b = 20 > 30;  
// b ? console.log("true") : console.log("false");







                                                                                        // CONTROL FLOW


// function getGrade(score) {
//     if (score >= 90 && score <= 100) {
//         return "A+";
//     }
//     else if (score >= 80 && score <= 89) {
//         return "A";
//     }
//     else if (score >= 70 && score <= 79) {
//         return "B";
//     }
//     else if (score >= 60 && score <= 69) {
//         return "C";
//     }
//     else if (score >= 33 && score <= 59) {
//         return "D";
//     }
//     else if (score >=0 && score <= 32) {
//         return "Fail";
//     }
//     else {
//         return "Invalid Marks!"
//     }
// }


// let x = getGrade(); 

// console.log(x);



                                                                                        // ROCK, PAPER, SCISSOR

// function rps(user, computer) {
//     if (user === "rock" && computer === "paper") {
//         return "Computer Won!";
//     }
//     else if (user === "rock" && computer === "scissor") {
//         return "User Won!";
//     }
//     else if (user === "paper" && computer === "scissor") {
//         return "Computer Won!"
//     }
//     else if (user === "paper" && computer === "rock") {
//         return "User Won!"
//     }
//     else if (user === "scissor" && computer === "rock") {
//         return "Computer Won!"
//     }
//     else if (user === "scissor" && computer === "paper") {
//         return "User Won!"
//     }
//     else {
//         return "Tie!";
//     }
// }

// let x = rps("scissor","paper"); 

// console.log(x);






// function rps(user, computer) {
//     if (user === computer) {
//         return "Tie!"
//     }
//     else if (
//         user === "rock" && computer === "scissor" ||
//         user === "paper" && computer === "rock" || 
//         user === "scissor" && computer === "paper"
//     ) {
//         return "User Won!"
//     }
    
//     else if (
//         (user !== "rock" && user !== "paper" && user !== "scissor") ||
//         (computer !== "rock" && computer !== "paper" && computer !== "scissor")
//     ) {
//         return "Invalid Input!";
//     }

//     else {
//         return "Computer Won!"
//     }
// }

// let x = rps("rock", "scissors");

// console.log(x);







                                                                                        // ATM LOGIC

// function atm(balance, action, amount) {
//     if (action === "withdrawal") {
//         if (amount > balance) {
//             return "Insufficient Balance";
//         }
//         else if (amount <= 0) {
//             return "Invalid Amount";
//         }
//         else {
//             return `Withdrawal Successful. New balance: ${balance - amount}`; 
//         }
//     }
//     else if (action === "deposit") {
//         if (amount <= 0) {
//             return "Invalid Amount";
//         }
//         else {
//             return `Deposit Successful. New balance: ${balance + amount}`;
//         }
//     }
//     else {
//         return "Invalid Action";
//     }
// }

// let cash = atm(23, "withdrawal", 300);
// console.log(cash);










                                                                                        //  LOOPS



// for (let i = 1; i <= 100; i++ ) {
//     console.log(i);
// }



// let i = 1; 
// while ( i <= 10) {
//     console.log("faraz"); 
//     i++;
// }



// let i = 12; 
// do {
//     console.log(i); 
//     i++; 
// }
// while (i < 2);




// let sum = 0; 
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i; 
// }
// console.log(sum);



// function ask(name) {
    
//     if (typeof name === "number") {
//         console.log("don't give numbers, i have many of em.");
//     }
//     else {
//         console.log(name);
//     }
// }

// ask(325);











                                                                                        // FUNCTIONS 

    // DECLARATION
// function mode() {
//     console.log("heuheuheuheu");
// }
// mode(); 

    //EXPRESSION
// let fnc = function() {
//     console.log("huehuehuehue");
// }
// fnc();

    //ARROW
// let abc = () => {
//     console.log("huehuehuehue");
// }
// abc();



    //DEFAULT
// function x(v1 = 0, v2 = 0) {
//     console.log(v1 + v2);
// }
// x()




    //REST
// function abcd(...val) {
//     console.log(val);
// }
// abcd(1, 2, 3, 4, 5 ,6);



    //FIRST CLASS FUNCTIONS --- FUNCTIONS CAN BE USED AS A VALUE
// function a(val) {
//     val();
// }
// a(function() {
//     console.log("heyu");
// })




//HIGHER ORDER FUNCTION --- FUNCTION THAT RETURN OR ACCEPT A FUNCTION IN THEIR PARAMETER
// function a() {
//     return function() {
//         console.log("faraz");
//     }
// }

// a()();




                                                                                        //PURE VS IMPURE FUNCTIONS --- 
//PURE FUNCTION --- FUNCTION THAT DOESN'T CHANGE THE OUTSIDER VALUE

// let a = 12; 
// function abcd() {
//     console.log("hehehehe");
// }
// abcd();

//IMPURE FUNCTION --- FUNCTION THAT CHANGE THE OUTSIDER VALUE 

// let b = 12; 
// function mode() {
//     b++
//     return b; 
// }
// console.log(mode());




                                                                                        //CLOSERS AND LEXICAL SCOPING

//CLOSERS --- A FUNCTION THAT RETURNS ANOTHER FUNCTION AND THIS RETURNED FUNCTION USES A VARIABLE FROM ITS PARENT

// function first() {
//     let a = 12; 
//     return function() {
//         a++; 
//         return a;
//     }
// }
// console.log(first()());

//LEXICAL SCOPING --- a function can access variables from the place where it was defined, not from where it is called.

// function abc() {
//     let a = 12; 
//     function def() {
//         let b = 13;
//         function ghi() {
//             let c = 14; 
//         }
//     }
// }






                                                                                        // IIFE (Immediately Invoked Function Expression)

// (function(){
//     console.log("heeuhueu");
// })();











// ════════════════════════════════════════
// CURSOR GLOW
// ════════════════════════════════════════

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

if (window.innerWidth < 768) {
  glow.style.display = "none";
}


// ════════════════════════════════════════
// HEADER — HAMBURGER MENU
// ════════════════════════════════════════

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-link, .mobile-book").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  });
});


// ════════════════════════════════════════
// SECTION 1 — HERO
// ════════════════════════════════════════

const section1 = document.querySelector(".section-1");
const heroWrapper = document.querySelector(".hero-wrapper");

// 1. EVAN letter split + hover
const h1 = document.querySelector(".section-1 h1");
if (h1) {
  const text = h1.textContent.trim();
  h1.innerHTML = text.split("").map((char, i) =>
    `<span class="hero-letter" style="
      display:inline-block;
      background: linear-gradient(50deg, var(--red), var(--white) 20%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      transition-delay:${i * 0.04}s;
    ">${char}</span>`
  ).join("");

  h1.querySelectorAll(".hero-letter").forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      letter.style.transform = "translateY(-6px)";
    });
    letter.addEventListener("mouseleave", () => {
      letter.style.transform = "translateY(0px)";
    });
  });
}

// 2. Paragraph magnetic hover
const heroP = document.querySelector(".section-1 p");
if (heroP) {
  heroP.style.transition = "transform 0.15s ease, box-shadow 0.15s ease";
  heroP.style.transformStyle = "preserve-3d";
  heroP.style.willChange = "transform";

  heroP.addEventListener("mousemove", (e) => {
    const rect = heroP.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width * 14;
    const dy = (e.clientY - cy) / rect.height * 14;
    heroP.style.transform = `translate(${dx}px, ${dy}px) rotateX(${-dy * 0.5}deg) rotateY(${dx * 0.5}deg)`;
    heroP.style.boxShadow = `${-dx}px ${-dy}px 30px rgba(255,80,50,0.3)`;
  });

  heroP.addEventListener("mouseleave", () => {
    heroP.style.transform = "translate(0,0) rotateX(0) rotateY(0)";
    heroP.style.boxShadow = "none";
  });
}

// 3. Hero scroll fade
window.addEventListener("scroll", () => {
  if (!section1 || !heroWrapper) return;
  const rect = section1.getBoundingClientRect();
  const progress = Math.min(Math.max(1 - (rect.bottom / rect.height), 0), 1);
  heroWrapper.style.transform = `translateY(${progress * -60}px)`;
  heroWrapper.style.opacity = `${1 - progress * 1.5}`;
}, { passive: true });

// 4. Spark particles
if (section1) {
  for (let i = 0; i < 25; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${2 + Math.random() * 5}s;
      animation-delay: ${Math.random() * 4}s;
      width: ${Math.random() > 0.7 ? 3 : 2}px;
      height: ${Math.random() > 0.7 ? 3 : 2}px;
      opacity: ${0.3 + Math.random() * 0.7};
    `;
    section1.appendChild(spark);
  }
}

// 5. Cursor trail
const trail = [];
const TRAIL_COUNT = 12;
for (let i = 0; i < TRAIL_COUNT; i++) {
  const dot = document.createElement("div");
  dot.style.cssText = `
    position: fixed;
    width: ${6 - i * 0.4}px;
    height: ${6 - i * 0.4}px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(dot);
  trail.push({ el: dot, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  const rect = section1 ? section1.getBoundingClientRect() : null;
  const inside = rect && e.clientY >= rect.top && e.clientY <= rect.bottom;
  trail.forEach((t) => t.el.style.opacity = inside ? "1" : "0");
});

function animateTrail() {
  let px = mouseX, py = mouseY;
  trail.forEach((t, i) => {
    const lag = 0.3 - i * 0.018;
    t.x += (px - t.x) * lag;
    t.y += (py - t.y) * lag;
    t.el.style.transform = `translate(${t.x - 3}px, ${t.y - 3}px)`;
    t.el.style.background = i % 2 === 0 ? "var(--red)" : "white";
    px = t.x;
    py = t.y;
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();


// ════════════════════════════════════════
// SECTION 2 — ABOUT
// ════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

  // About h2 letter animation
  const h2 = document.getElementById("about-h2");
  if (h2) {
    const rawHTML = h2.innerHTML;
    const parts = rawHTML.split(/(<br\s*\/?>)/gi);
    let newHTML = "";
    parts.forEach((part) => {
      if (/^<br/i.test(part)) {
        newHTML += part;
      } else {
        const words = part.split(/(\s+)/);
        words.forEach((word) => {
          if (/^\s+$/.test(word)) {
            newHTML += word;
          } else {
            newHTML += `<span style="display:inline-block; white-space:nowrap; vertical-align:top;">`;
            for (const char of word) {
              newHTML += `<span class="scroll-letter">${char}</span>`;
            }
            newHTML += `</span>`;
          }
        });
      }
    });
    h2.innerHTML = newHTML;

    const letters = Array.from(h2.querySelectorAll(".scroll-letter"));
    const total = letters.length;
    letters.forEach((l) => {
      l.style.color = "grey";
      l.style.transition = "none";
    });

    // flicker
    let litCount = 0;
    setInterval(() => {
      if (litCount < 2) return;
      const randomLit = Math.floor(Math.random() * litCount);
      const letter = letters[randomLit];
      if (!letter) return;
      letter.style.color = "rgba(255,255,255,0.3)";
      setTimeout(() => {
        if (randomLit < litCount) letter.style.color = "white";
      }, 60 + Math.random() * 80);
    }, 120);

    // scroll handler
    const onScroll = () => {
      const rect = h2.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.8;
      const end = windowH * 0.2;
      const scrollStart = rect.top - start;
      const scrollEnd = rect.bottom - end;
      const totalRange = scrollEnd - scrollStart;
      const progress = Math.min(Math.max(-scrollStart / totalRange, 0), 1);
      const floatIndex = progress * total;
      litCount = Math.floor(floatIndex);

      letters.forEach((letter, i) => {
        if (i < litCount) {
          letter.style.color = "white";
          letter.style.transform = "translateY(0px)";
        } else if (i === litCount) {
          const subProgress = floatIndex - litCount;
          const jump = Math.sin(subProgress * Math.PI) * -10;
          letter.style.color = `color-mix(in srgb, white ${subProgress * 100}%, grey)`;
          letter.style.transform = `translateY(${jump}px)`;
        } else {
          letter.style.color = "grey";
          letter.style.transform = "translateY(0px)";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Box-2 word animation
  const box2 = document.querySelector(".section-2-box-2 h2");
  if (box2) {
    const box2Raw = box2.innerHTML;
    const box2Parts = box2Raw.split(/(<span[^>]*>.*?<\/span>|<br\s*\/?>)/gi);
    let box2HTML = "";
    box2Parts.forEach((part) => {
      if (/^<span/i.test(part) || /^<br/i.test(part)) {
        box2HTML += `<span class="b2-word" style="display:inline-block;">${part}</span>`;
      } else {
        const tokens = part.split(/(\s+)/);
        tokens.forEach((token) => {
          if (/^\s+$/.test(token)) {
            box2HTML += token;
          } else if (token.length > 0) {
            box2HTML += `<span class="b2-word">${token}</span>`;
          }
        });
      }
    });
    box2.innerHTML = box2HTML;

    const b2Words = Array.from(box2.querySelectorAll(".b2-word"));
    b2Words.forEach((w) => {
      w.style.display = "inline-block";
      w.style.opacity = "0";
      w.style.transform = "translateX(60px) skewX(-15deg)";
      w.style.transition = "none";
      w.style.filter = "blur(6px)";
      const innerSpan = w.querySelector("span");
      if (innerSpan) {
        innerSpan.style.color = "var(--blue)";
        innerSpan.style.fontSize = "2.2rem";
      } else {
        w.style.color = "var(--white)";
      }
    });

    const box2Scroll = () => {
      const rect = box2.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.9;
      const end = windowH * 0.4;
      const scrollStart = rect.top - start;
      const scrollEnd = rect.top - end;
      const totalRange = scrollEnd - scrollStart;
      const progress = Math.min(Math.max(-scrollStart / totalRange, 0), 1);
      const total2 = b2Words.length;
      const floatIndex = progress * total2;

      b2Words.forEach((word, i) => {
        if (i < Math.floor(floatIndex)) {
          word.style.opacity = "1";
          word.style.transform = "translateX(0px) skewX(0deg) translateY(0px)";
          word.style.filter = "blur(0px)";
        } else if (i === Math.floor(floatIndex)) {
          const sub = floatIndex - Math.floor(floatIndex);
          const tx = (1 - sub) * 60;
          const skew = (1 - sub) * -15;
          const blur = (1 - sub) * 6;
          const bounce = Math.sin(sub * Math.PI) * -12;
          word.style.opacity = `${sub}`;
          word.style.transform = `translateX(${tx}px) skewX(${skew}deg) translateY(${bounce}px)`;
          word.style.filter = `blur(${blur}px)`;
        } else {
          word.style.opacity = "0";
          word.style.transform = "translateX(60px) skewX(-15deg)";
          word.style.filter = "blur(6px)";
        }
      });
    };

    window.addEventListener("scroll", box2Scroll, { passive: true });
    box2Scroll();
  }

});


// ════════════════════════════════════════
// SKILLS SECTION — CARD ANIMATIONS
// ════════════════════════════════════════

const skillsSection = document.querySelector(".skills");
const cards = document.querySelectorAll(".skills .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cards.forEach((card, index) => {
        setTimeout(() => card.classList.add("show"), index * 200);
      });
    } else {
      cards.forEach(card => card.classList.remove("show"));
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);


// ════════════════════════════════════════
// SECTION 3 — PROJECTS
// ════════════════════════════════════════

const s3Items = document.querySelectorAll(".s3-item");
const s3Section = document.querySelector(".section-3");

const s3SectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      s3Items.forEach((item) => item.classList.remove("animate-in"));
    }
  });
}, { threshold: 0 });

const s3ItemObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      void el.offsetWidth;
      const delay = el.dataset.index ? (parseInt(el.dataset.index) - 1) * 150 : 0;
      setTimeout(() => el.classList.add("animate-in"), delay);
    }
  });
}, { threshold: 0.2 });

if (s3Section) s3SectionObserver.observe(s3Section);
s3Items.forEach((item) => s3ItemObserver.observe(item));


// ════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════

const footName = document.querySelector(".foot-name");
const footGrid = document.querySelector(".foot-grid");
const footBar = document.querySelector(".foot-bar");
const footer = document.getElementById("footer");

let footerWasVisible = false;

function resetFooter() {
  if (footName) footName.style.transform = "translateX(120%)";
  if (footGrid) {
    footGrid.style.transition = "none";
    footGrid.style.opacity = "0";
    footGrid.style.transform = "translateY(80px)";
    delete footGrid.dataset.revealed;
  }
  if (footBar) {
    footBar.style.transition = "none";
    footBar.style.opacity = "0";
    footBar.style.transform = "translateY(80px)";
    delete footBar.dataset.revealed;
  }
}

window.addEventListener("scroll", () => {
  if (!footer) return;

  const fRect = footer.getBoundingClientRect();
  const windowH = window.innerHeight;
  const footerVisible = fRect.top < windowH && fRect.bottom > 0;

  if (!footerVisible && footerWasVisible) resetFooter();
  footerWasVisible = footerVisible;
  if (!footerVisible) return;

  // EVAN slides in from right
  if (footName) {
    const progress = Math.min(Math.max((windowH - fRect.top) / (windowH * 0.6), 0), 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    footName.style.transition = "none";
    footName.style.transform = `translateX(${120 - ease * 120}%)`;
  }

  // grid lifts up
  if (footGrid && !footGrid.dataset.revealed) {
    const gRect = footGrid.getBoundingClientRect();
    if (gRect.top < windowH * 0.95) {
      footGrid.dataset.revealed = "true";
      footGrid.style.transition = "opacity 1.2s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1)";
      footGrid.style.opacity = "1";
      footGrid.style.transform = "translateY(0)";
    }
  }

  // bar lifts up after grid
  if (footBar && !footBar.dataset.revealed) {
    const bRect = footBar.getBoundingClientRect();
    if (bRect.top < windowH * 1.5) {
      footBar.dataset.revealed = "true";
      setTimeout(() => {
        footBar.style.transition = "opacity 1.2s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1)";
        footBar.style.opacity = "1";
        footBar.style.transform = "translateY(0)";
      }, 250);
    }
  }

}, { passive: true });

























































  