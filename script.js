const menuBtn=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll("main section[id]")], links=[...document.querySelectorAll(".nav-links a")];
window.addEventListener("scroll",()=>{let current="home";sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+current))});
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault(); const f=new FormData(e.target);
  const subject=encodeURIComponent(f.get("subject")); const body=encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`);
  window.location.href=`mailto:karthikrachaprolu869@gmail.com?subject=${subject}&body=${body}`;
});
const glow=document.querySelector(".cursor-glow");
document.addEventListener("pointermove",e=>{if(innerWidth>900){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"}});
/* =========================
   DAY / NIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}


// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        // Light mode
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    } else {

        // Dark mode
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");
    }

});