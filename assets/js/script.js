"use strict";

let hasMediumPosts = false;
window.addEventListener("DOMContentLoaded", async () => {
  await fetchMediumFeed();
});

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    const modalGitLink = modalContainer.querySelector("[data-git-link]");
    const modalDemoLink = modalContainer.querySelector("[data-demo-link]");

    const gitLink = this.querySelector("[data-git-link]");
    const demoLink = this.querySelector("[data-demo-link]");

    if (gitLink) {
      modalGitLink.href = gitLink.href;
      modalGitLink.innerHTML = gitLink.innerHTML;
      modalGitLink.style.display = "inline-flex";
    } else {
      modalGitLink.style.display = "none";
    }

    if (demoLink) {
      modalDemoLink.href = demoLink.href;
      modalDemoLink.innerHTML = demoLink.innerHTML;
      modalDemoLink.style.display = "inline-flex";
    } else {
      modalDemoLink.style.display = "none";
    }

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// add event to form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[name='fullname']").value.trim();
  const email = form.querySelector("input[name='email']").value.trim();
  const message = form.querySelector("textarea[name='message']").value.trim();

  const mailToLink = `mailto:aminulmaz.aus@gmail.com?subject=Message from ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(
    message + "\n\nFrom: " + name + " (" + email + ")"
  )}`;

  window.location.href = mailToLink;
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

async function fetchMediumFeed() {
  const proxy = "https://api.allorigins.win/get?url=";
  const feedUrl = "https://medium.com/feed/@aminulmaz";
  const finalUrl = proxy + encodeURIComponent(feedUrl);

  try {
    const res = await fetch(finalUrl);
    if (!res.ok) throw new Error("Proxy failed");

    const data = await res.json();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "application/xml");
    const items = xml.querySelectorAll("item");

    const blogList = document.getElementById("blog-list");
    const blogNavItem = document.getElementById("blog-nav-item");
    blogList.innerHTML = "";

    if (!items || items.length === 0) {
      hasMediumPosts = false;
      return;
    }

    hasMediumPosts = true;
    if (blogNavItem) blogNavItem.style.display = "list-item";

    items.forEach((item, index) => {
      if (index >= 6) return;

      const title = item.querySelector("title")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "#";
      const pubDate = new Date(
        item.querySelector("pubDate")?.textContent || ""
      ).toDateString();
      const category = item.querySelector("category")?.textContent || "Blog";

      // Prefer content:encoded with namespace fallback
      const encoded = item.getElementsByTagNameNS(
        "http://purl.org/rss/1.0/modules/content/",
        "encoded"
      )[0]?.textContent;

      const description = item.querySelector("description")?.textContent;
      const content = encoded || description || "";

      if (!content) {
        console.log("❌ No content found.");
        return;
      }

      // Extract images
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
      const matches = [...content.matchAll(imgRegex)];

      const cdnImages = matches
        .map((m) => m[1])
        .filter(
          (src) =>
            src.includes("cdn-images-1.medium.com") &&
            !src.includes("stat?event=")
        );

      let imageUrl =
        cdnImages.length > 0
          ? cdnImages[0]
          : `./assets/images/blog-${(index % 6) + 1}.jpg`;

      // Strip HTML and trim snippet
      const snippet =
        content
          .replace(/<[^>]*>/g, "")
          .trim()
          .slice(0, 120) + "...";

      // Create and append blog post item
      const li = document.createElement("li");
      li.className = "blog-post-item";
      li.innerHTML = `
        <a href="${link}" target="_blank" rel="noopener noreferrer">
          <figure class="blog-banner-box">
            <img src="${imageUrl}" alt="${title}" loading="lazy" />
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${category}</p>
              <span class="dot"></span>
              <time datetime="${pubDate}">${pubDate}</time>
            </div>
            <h3 class="h3 blog-item-title">${title}</h3>
            <p class="blog-text">${snippet}</p>
          </div>
        </a>
      `;
      blogList.appendChild(li);
    });
  } catch (err) {
    console.error("❌ Error fetching or parsing feed:", err);
  }
}
