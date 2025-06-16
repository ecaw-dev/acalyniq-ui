const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".nav-list .nav-links");
const sections = document.querySelectorAll(".section");
const bluredCards = document.querySelectorAll(".blur-bg");

sections.forEach((section, index) => {
    const sectionId = section.id;
    const listItem = document.createElement("li");
    const sectionLink = document.createElement("a");
    sectionLink.textContent = sectionId;
    sectionLink.classList.add("nav-link");
    listItem.appendChild(sectionLink);
    navbarList.appendChild(listItem);
})
const links = document.querySelectorAll(".nav-list .nav-links .nav-link");


for (let index = 0; index < links.length; index++) {
    links[index].setAttribute(
        "href",
        "#" + sections[index].getAttribute("id")
    );
    links[index].addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
        console.log(targetSection);
    });

    window.addEventListener("scroll", () => {
        const rect = sections[index].getClientRects()[0];
        if (rect.top <= 50 && rect.bottom >= 50) {
            links[index].classList.add("active");
        } else {
            links[index].classList.remove("active");
        }
    });
  }

window.addEventListener("scroll", (e) => {
    if(window.scrollY > 100) {
        navbar.classList.add("scrolling");
    } else {
        navbar.classList.remove("scrolling");
    }
});
