/* ============================================================
   PORTFOLIO SCRIPT
   Scroll-based animation is back:
   1. HUD readout label — updates the top-left text as each
      section reaches the top of the screen.
   2. Hero entrance — a one-time fade-in on page load.
   3. Scroll-reveal — each section's content fades/slides into
      view the first time it scrolls into the viewport.
   4. Skill bars — fill from 0% to their target width when the
      Skills section scrolls into view.

   All of this respects prefers-reduced-motion — if the user has
   that turned on, everything is simply set to its final state
   with no animation.
============================================================ */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------
   1. HUD READOUT — updates the top-left label as each scene enters
------------------------------------------------------------ */
const hudLabel = document.getElementById("hudLabel");
const sceneWraps = gsap.utils.toArray(".scene-wrap");

sceneWraps.forEach((wrap) => {
  ScrollTrigger.create({
    trigger: wrap,
    start: "top center",
    end: "bottom center",
    onEnter: () => (hudLabel.textContent = wrap.dataset.hud || ""),
    onEnterBack: () => (hudLabel.textContent = wrap.dataset.hud || ""),
  });
});

/* ------------------------------------------------------------
   2. HERO — gentle entrance on page load (not scroll-based)
------------------------------------------------------------ */
if (!prefersReducedMotion) {
  gsap.from(".hero-content > *", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
  });
} else {
  gsap.set(".hero-content > *", { opacity: 1, y: 0 });
}

/* ------------------------------------------------------------
   3. SCROLL-REVEAL — content animates in as each section
   scrolls into the viewport. Runs once per element (no reverse
   on scroll-up, so content doesn't disappear if you scroll back).
------------------------------------------------------------ */
if (!prefersReducedMotion) {

  // -- About: player card slides in from the left, text column
  //    fades up, stat rows stagger in slightly after.
  gsap.from(".player-card", {
    x: -60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scene--about",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from([".profile__name", ".profile__role", ".profile__bio"], {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scene--about",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".stat", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".profile__stats",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // -- Skills: heading area fades up, skill nodes stagger in
  gsap.from([".scene--skills .eyebrow", ".scene--skills .scene__title", ".scene--skills .scene__sub"], {
    y: 24,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scene--skills",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".skill-node", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skill-tree",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // -- Projects: heading fades up, mission cards stagger in
  gsap.from([".scene--projects .eyebrow", ".scene--projects .scene__title", ".scene--projects .scene__sub"], {
    y: 24,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scene--projects",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".mission-card", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission-log",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // -- Contact: heading fades up, portal links stagger in
  gsap.from([".scene--contact .eyebrow", ".scene--contact .scene__title", ".scene--contact .scene__sub"], {
    y: 24,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scene--contact",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".portal__link", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".portal",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-note", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer-note",
      start: "top 95%",
      toggleActions: "play none none none",
    },
  });
}

/* ------------------------------------------------------------
   4. SKILLS — bars fill from 0% to their data-level when the
   Skills section scrolls into view (animated, not instant).
------------------------------------------------------------ */
const skillNodes = gsap.utils.toArray(".skill-node");

skillNodes.forEach((node) => {
  const level = node.dataset.level || 0;
  const fill = node.querySelector(".skill-node__fill");

  if (prefersReducedMotion) {
    gsap.set(fill, { width: level + "%" });
    return;
  }

  gsap.set(fill, { width: "0%" });
  gsap.to(fill, {
    width: level + "%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: node,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
});
