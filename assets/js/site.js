(function () {
  "use strict";

  const toc = document.getElementById("table-of-contents");
  const article = document.querySelector(".note-content");

  if (!toc || !article) return;

  const headings = Array.from(article.querySelectorAll("h2, h3"));
  if (headings.length < 2) return;

  const list = toc.querySelector("ol");

  headings.forEach(function (heading, index) {
    if (!heading.id) heading.id = "section-" + (index + 1);

    const item = document.createElement("li");
    if (heading.tagName === "H3") item.className = "is-subheading";

    const link = document.createElement("a");
    link.href = "#" + heading.id;
    link.textContent = heading.textContent;

    item.appendChild(link);
    list.appendChild(item);
  });

  toc.hidden = false;
})();

