const burger = document.querySelector("nav svg");
const links = document.querySelector(".links");
const lines = document.querySelectorAll(".line");

gsap.set(links, { x: "200%" });

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(links, { x: "200%", duration: 0.3, onComplete: hideLinks });
    gsap.to(lines, { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    showLinks();
    gsap.to(".links", { x: "0.5px" }); // Adjust the value as per your preference
    gsap.to(lines, { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set(".links a:not(:last-child)", { marginBottom: "50px" }); // Add gap between links
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

function showLinks() {
  gsap.set(links, { x: "200%" });
  gsap.to(links, { x: "0%", duration: 0.3 });
}

function hideLinks() {
  gsap.set(links, { x: "200%" });
}
