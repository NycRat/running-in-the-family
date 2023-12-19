const options = {
  color: "var(--foreground-2)",
};

const arrows = [
  arrowLine("#quote0", "#p5", options),
  arrowLine("#quote1", "#p6", options),
  arrowLine("#quote2", "#p6", options),
  arrowLine("#quote3", "#p8", options),
  arrowLine("#quote4", "#p9", options),
  arrowLine("#quote5", "#p9", options),
  arrowLine("#quote111", "#p111", options),
];

window.addEventListener("resize", () => {
  arrows.forEach((x) => x.update({}));
});

window.addEventListener("load", () => {
  arrows.forEach((x) => x.update({}));
});
