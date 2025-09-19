// Mobile filter toggle functionality
const filterToggles = document.querySelectorAll(".filter-group__toggle");
filterToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const filterGroup = toggle.parentElement;
    const content = filterGroup.querySelector(".filter-group__content");
    const icon = toggle.querySelector("i");

    filterGroup.classList.toggle("filter-group--active");

    if (filterGroup.classList.contains("filter-group--active")) {
      content.style.display = "block";
      icon.classList.remove("fa-caret-down");
      icon.classList.add("fa-caret-up");
    } else {
      content.style.display = "none";
      icon.classList.remove("fa-caret-up");
      icon.classList.add("fa-caret-down");
    }
  });
});

// Footer collapse functionality for mobile
const footerTitles = document.querySelectorAll(".footer__title");
footerTitles.forEach((title) => {
  title.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      const column = title.parentElement;
      const content = column.querySelector(
        ".footer__links, .footer__contact-info, .footer__newsletter-form, .footer__social-links"
      );

      column.classList.toggle("footer__column--active");

      if (content) {
        if (column.classList.contains("footer__column--active")) {
          content.style.display = "flex";
        } else {
          content.style.display = "none";
        }
      }
    }
  });
});

// Initialize footer collapse state on mobile
function initFooterCollapse() {
  if (window.innerWidth <= 768) {
    const footerColumns = document.querySelectorAll(".footer__column");
    footerColumns.forEach((column) => {
      const content = column.querySelector(
        ".footer__links, .footer__contact-info, .footer__newsletter-form, .footer__social-links"
      );
      if (content && !column.classList.contains("footer__column--active")) {
        content.style.display = "none";
      }
    });
  } else {
    const footerColumns = document.querySelectorAll(".footer__column");
    footerColumns.forEach((column) => {
      const content = column.querySelector(
        ".footer__links, .footer__contact-info, .footer__newsletter-form, .footer__social-links"
      );
      if (content) {
        content.style.display = "flex";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileFilterToggle = document.getElementById("mobileFilterToggle");
  const filterSidebar = document.querySelector(".products-layout__filters");
  const filterSidebarClose = document.getElementById("filterSidebarClose");
  const filterSidebarOverlay = document.getElementById("filterSidebarOverlay");

  // Open sidebar
  mobileFilterToggle.addEventListener("click", function () {
    filterSidebar.classList.add("active");
    filterSidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close sidebar
  function closeSidebar() {
    filterSidebar.classList.remove("active");
    filterSidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  filterSidebarClose.addEventListener("click", closeSidebar);
  filterSidebarOverlay.addEventListener("click", closeSidebar);

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && filterSidebar.classList.contains("active")) {
      closeSidebar();
    }
  });
});

// Initialize on load and resize
window.addEventListener("load", initFooterCollapse);
window.addEventListener("resize", initFooterCollapse);
