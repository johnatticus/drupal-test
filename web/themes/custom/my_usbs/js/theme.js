(function () {
  // Wait for DOM
  document.addEventListener("DOMContentLoaded", function () {
    const collapseEl = document.getElementById("mainNavbar"); // matches data-bs-target in your Twig
    if (!collapseEl || typeof bootstrap === "undefined") return;

    const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });

    // 1) Close after clicking any nav link (except dropdown toggles)
    collapseEl
      .querySelectorAll(".nav-link:not(.dropdown-toggle)")
      .forEach(function (link) {
        link.addEventListener("click", function () {
          if (collapseEl.classList.contains("show")) bsCollapse.hide();
        });
      });

    // 2) Close when clicking outside the open menu
    document.addEventListener("click", function (e) {
      if (!collapseEl.classList.contains("show")) return;
      const toggler = document.querySelector(".navbar-toggler");
      const clickedInside =
        collapseEl.contains(e.target) ||
        (toggler && toggler.contains(e.target));
      if (!clickedInside) bsCollapse.hide();
    });
  });
})();
