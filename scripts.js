/* =========================================================
   GLOBAL NAVIGATION SCRIPT — DESKTOP SAFE + MOBILE DROPDOWNS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       1. MOBILE HAMBURGER MENU TOGGLE
       ----------------------------------------------------- */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

});

/* =========================================================
   2. MOBILE DROPDOWN TOGGLE LOGIC (Events + Groups)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        const trigger = drop.querySelector("a");              // Events or Groups
        const menu = drop.querySelector(".dropdown-menu");    // Their dropdown menu

        trigger.addEventListener("click", (e) => {

            // Only run on mobile
            if (window.innerWidth > 900) return;

            e.preventDefault(); // stop page jump

            // Close all other open menus
            document.querySelectorAll(".dropdown-menu.open").forEach(openMenu => {
                if (openMenu !== menu) openMenu.classList.remove("open");
            });

            // Toggle this one
            menu.classList.toggle("open");
        });
    });

    /* -----------------------------------------------------
       3. CLOSE MENU WHEN CLICKING ANY DROPDOWN ITEM
       ----------------------------------------------------- */
    document.querySelectorAll(".dropdown-menu a").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".dropdown-menu.open")
                .forEach(m => m.classList.remove("open"));
        });
    });

});
