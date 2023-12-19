const rightOptions = {
  color: "var(--foreground-2)",
  sourcePosition: "middleLeft",
  destinationPosition: "middleRight",
};

const leftOptions = {
  color: "var(--foreground-2)",
  sourcePosition: "middleRight",
  destinationPosition: "middleLeft",
};

const arrows = [
  arrowLine("#quote0", "#p5", rightOptions),
  arrowLine("#quote1", "#p6", rightOptions),
  arrowLine("#quote2", "#p6", rightOptions),
  arrowLine("#quote3", "#p8", rightOptions),
  arrowLine("#quote4", "#p9", rightOptions),
  arrowLine("#quote5", "#p9", rightOptions),
  arrowLine("#quote111", "#p111", leftOptions),
];

window.addEventListener("resize", () => {
  arrows.forEach((x) => x.update({}));
});

window.addEventListener("load", () => {
  arrows.forEach((x) => x.update({}));
});
