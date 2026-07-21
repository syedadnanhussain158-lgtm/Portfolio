/* ============================================================
   PORTFOLIO SCRIPT — scroll-driven animation using GSAP + ScrollTrigger
   You do NOT need to edit this file to change text/images/videos —
   all of that is done in index.html. This file only controls motion.
============================================================ */

// Respect users who prefer reduced motion — skip fancy animation for them.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------
   1. HUD READOUT — updates the top-left label as each scene enters
------------------------------------------------------------ */
const hudLabel = document.getElementById("hudLabel");
const scenes = gsap.utils.toArray(".scene");

scenes.forEach((scene) => {
  ScrollTrigger.create({
    trigger: scene,
    start: "top center",
    end: "bottom center",
    onEnter: () => (hudLabel.textContent = scene.dataset.hud || ""),
    onEnterBack: () => (hudLabel.textContent = scene.dataset.hud || ""),
  });
});

/* ------------------------------------------------------------
   2. HERO — gentle entrance on page load (not scroll-based)
------------------------------------------------------------ */
if (!prefersReducedMotion) {
  gsap.from(".hero__content > *", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
  });
} else {
  gsap.set(".hero__content > *", { opacity: 1, y: 0 });
}

/* ------------------------------------------------------------
   3. ABOUT — player card + text reveal
------------------------------------------------------------ */
if (!prefersReducedMotion) {
  gsap.from(".player-card", {
    scrollTrigger: { trigger: "#about", start: "top 70%" },
    x: -60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
  });

  gsap.from(".profile__text > *", {
    scrollTrigger: { trigger: "#about", start: "top 70%" },
    x: 60,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: "power3.out",
  });
}

/* ------------------------------------------------------------
   4. SKILLS — cards reveal + skill bars fill to their data-level
------------------------------------------------------------ */
const skillNodes = gsap.utils.toArray(".skill-node");

skillNodes.forEach((node, i) => {
  const level = node.dataset.level || 0;
  const fill = node.querySelector(".skill-node__fill");

  if (!prefersReducedMotion) {
    gsap.from(node, {
      scrollTrigger: { trigger: node, start: "top 80%" },
      y: 24,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.05,
      ease: "power2.out",
    });

    gsap.to(fill, {
      scrollTrigger: { trigger: node, start: "top 85%" },
      width: level + "%",
      duration: 1,
      delay: i * 0.05 + 0.2,
      ease: "power2.out",
    });
  } else {
    gsap.set(fill, { width: level + "%" });
  }
});

/* ------------------------------------------------------------
   5. PROJECTS — mission cards stagger in
------------------------------------------------------------ */
if (!prefersReducedMotion) {
  gsap.from(".mission-card", {
    scrollTrigger: { trigger: ".mission-log", start: "top 80%" },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
  });
}

/* ------------------------------------------------------------
   6. CONTACT — portal links reveal
------------------------------------------------------------ */
if (!prefersReducedMotion) {
  gsap.from(".portal__link, .btn-solid", {
    scrollTrigger: { trigger: "#contact", start: "top 75%" },
    y: 24,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });
}

/* ------------------------------------------------------------
   7. SECTION TITLES — quiet fade/slide-up used on every scene heading
------------------------------------------------------------ */
if (!prefersReducedMotion) {
  gsap.utils.toArray(".scene__title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: { trigger: title, start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  });
}
