document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".nav_scroll");
    const navLinks = document.querySelectorAll("nav a");
    let scrollTimeout;
  
    function setActiveNavLink() {
      clearTimeout(scrollTimeout); // Clear any existing timeout
  
      // Set a timeout to wait for scrolling to stop
      scrollTimeout = setTimeout(function () {
        let lastSection = null;
  
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            lastSection = section;
          }
        });
  
        navLinks.forEach((link) => {
          if (
            lastSection &&
            link.getAttribute("href").substring(1) === lastSection.id
          ) {
            link.classList.add("active-nav-link");
          } else {
            link.classList.remove("active-nav-link");
          }
        });
      }); // Adjust the delay (in milliseconds) as needed
    }
  
    window.addEventListener("scroll", setActiveNavLink);
  
    // Set active link initially
    setActiveNavLink();
  });
  
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionID = this.getAttribute("href");
      const section = document.querySelector(sectionID);
      const navHeight = document
        .querySelector("nav")
        .getBoundingClientRect().height;
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = section.getBoundingClientRect().top + offset;
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: "smooth",
      });
    });
  });