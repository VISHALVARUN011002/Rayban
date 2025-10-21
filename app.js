// --- SHERY IMAGE EFFECT --- //
Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 1.37, range: [0, 30] },
    b: { value: -0.94, range: [-1, 1] },
    zindex: { value: "-99999999" },
    aspect: { value: 2.1875719535735985 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: -0.05, y: 0.02 } },
    shapeScale: { value: { x: 1, y: 1 } },
    shapeEdgeSoftness: { value: 0 },
    shapeRadius: { value: 0 },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4 },
    durationOut: { value: 1 },
    durationIn: { value: 1.5 },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1 },
    scrollType: { value: 0 },
    geoVertex: { value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.37 },
    metaball: { value: 0.2 },
    discard_threshold: { value: 0.52 },
    antialias_threshold: { value: 0.03 },
    noise_height: { value: 0.34 },
    noise_scale: { value: 10 },
  },
  gooey: true,
});

// --- TEXT ANIMATION --- //
const elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  const h1s = elem.querySelectorAll("h1");
  let index = 0;
  let animating = false;

  // Set initial visibility
  gsap.set(h1s[0], { top: "0%" });

  document.querySelector("#main").addEventListener("click", function () {
    if (animating) return;
    animating = true;

    const current = h1s[index];
    const next = h1s[(index + 1) % h1s.length];

    // Animate current text up (out)
    gsap.to(current, {
      top: "-100%",
      ease: "expo.inOut",
      duration: 1,
      onComplete: () => {
        gsap.set(current, { top: "100%" }); // reset it below
      },
    });

    // Animate next text into view
    gsap.to(next, {
      top: "0%",
      ease: "expo.inOut",
      duration: 1,
      delay: 0.1,
      onComplete: () => {
        animating = false;
      },
    });

    index = (index + 1) % h1s.length;
  });
});
