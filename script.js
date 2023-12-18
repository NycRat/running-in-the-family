const options = {
  color: "var(--foreground-2)",
};

const arrow = arrowLine("#quote1", "#p5", options);
const arrow1 = arrowLine("#quote2", "#p9", options);

window.addEventListener("resize", () => {
  arrow.update({});
  arrow1.update({});
});
