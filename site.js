(function () {
  function currentLanguage() {
    return document.documentElement.lang === "he" ? "he" : "en";
  }

  function setMenuState(btn, nav, open) {
    var icon = btn.querySelector("[aria-hidden='true']");
    var lang = currentLanguage();
    var labelKey = open ? "closeLabel" : "openLabel";
    var label = btn.dataset[labelKey + (lang === "he" ? "He" : "En")];

    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", label || (open ? "Close navigation menu" : "Open navigation menu"));
    if (icon) {
      icon.textContent = open ? "✕" : "☰";
    } else {
      btn.textContent = open ? "✕" : "☰";
    }
    document.body.classList.toggle("nav-open", open);
  }

  document.querySelectorAll("[data-nav-toggle]").forEach(function (btn) {
    var nav = document.getElementById(btn.getAttribute("aria-controls"));
    if (!nav) return;

    setMenuState(btn, nav, false);

    btn.addEventListener("click", function () {
      setMenuState(btn, nav, btn.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(btn, nav, false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setMenuState(btn, nav, false);
        btn.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && btn.getAttribute("aria-expanded") === "true") {
        setMenuState(btn, nav, false);
      }
    });

    window.addEventListener("socialmind:languagechange", function () {
      setMenuState(btn, nav, btn.getAttribute("aria-expanded") === "true");
    });
  });

  var header = document.querySelector("[data-site-header]");
  if (header) {
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  document.querySelectorAll(".js-accordion button").forEach(function (button) {
    button.addEventListener("click", function () {
      var panel = document.getElementById(button.getAttribute("aria-controls"));
      var item = button.closest(".faq-item");
      var open = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", open ? "false" : "true");
      if (panel) panel.setAttribute("aria-hidden", open ? "true" : "false");
      if (item) item.classList.toggle("open", !open);
    });
  });

  document.querySelectorAll("[data-system-tabs]").forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[role='tab']"));
    if (!tabs.length) return;

    function activateTab(nextTab, focusTab) {
      tabs.forEach(function (tab) {
        var selected = tab === nextTab;
        var panel = document.getElementById(tab.getAttribute("aria-controls"));
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.setAttribute("tabindex", selected ? "0" : "-1");
        if (panel) panel.hidden = !selected;
      });
      if (focusTab) nextTab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateTab(tab, false);
      });

      tab.addEventListener("keydown", function (event) {
        var isRtl = document.documentElement.dir === "rtl";
        var nextIndex = index;

        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (event.key === "ArrowRight") nextIndex = (index + (isRtl ? -1 : 1) + tabs.length) % tabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index + (isRtl ? 1 : -1) + tabs.length) % tabs.length;

        if (nextIndex !== index) {
          event.preventDefault();
          activateTab(tabs[nextIndex], true);
        }
      });
    });
  });

  if (!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) && "IntersectionObserver" in window) {
    document.body.classList.add("has-reveal");
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  var form = document.querySelector("[data-demo-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");
    var email = "socialmind2025@gmail.com";
    var text = {
      invalid: {
        en: "Please complete the required fields, then email SocialMind using the fallback below.",
        he: "נא למלא את שדות החובה. לאחר מכן ניתן לשלוח ל-SocialMind דרך האימייל החלופי."
      },
      ready: {
        en: "Your message is ready. Your email app should open so you can send it to SocialMind.",
        he: "ההודעה מוכנה. אפליקציית האימייל אמורה להיפתח כדי שתוכלו לשלוח אותה ל-SocialMind."
      },
      subject: {
        en: "SocialMind demo request",
        he: "בקשת הדגמה של SocialMind"
      }
    };

    function localized(entry) {
      return currentLanguage() === "he" ? entry.he : entry.en;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var invalid = false;

      form.querySelectorAll("[required]").forEach(function (field) {
        var error = form.querySelector('[data-error-for="' + field.id + '"]');
        var empty = !field.value.trim();
        field.setAttribute("aria-invalid", empty ? "true" : "false");
        if (error) error.hidden = !empty;
        invalid = invalid || empty;
      });

      if (invalid) {
        if (status) status.textContent = localized(text.invalid);
        return;
      }

      var data = new FormData(form);
      var subject = encodeURIComponent(localized(text.subject));
      var body = encodeURIComponent(
        "Name: " + data.get("name") + "\n" +
        "School or organization: " + data.get("organization") + "\n" +
        "Role: " + data.get("role") + "\n" +
        "Work email: " + data.get("email") + "\n" +
        "Country: " + data.get("country") + "\n\n" +
        "Message:\n" + (data.get("message") || "")
      );

      if (status) status.textContent = localized(text.ready);
      window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    });
  }
})();
