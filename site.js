(function () {
  function closeMenu(btn, nav) {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = "☰";
    document.body.classList.remove("nav-open");
  }

  document.querySelectorAll("[data-nav-toggle]").forEach(function (btn) {
    var nav = document.getElementById(btn.getAttribute("aria-controls"));
    if (!nav) return;

    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "✕" : "☰";
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(btn, nav);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu(btn, nav);
    });
  });

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
      return document.documentElement.lang === "he" ? entry.he : entry.en;
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
        if (status) {
          status.textContent = localized(text.invalid);
        }
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

      if (status) {
        status.textContent = localized(text.ready);
      }
      window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    });
  }
})();
