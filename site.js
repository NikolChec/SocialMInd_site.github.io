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

  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
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

  var scrollChapters = Array.prototype.slice.call(document.querySelectorAll("[data-scroll-chapter]"));
  if (scrollChapters.length && !prefersReducedMotion) {
    document.body.classList.add("has-scroll-story");
    var scrollStoryFrame = 0;

    function updateScrollStory() {
      scrollStoryFrame = 0;
      var viewportHeight = Math.max(window.innerHeight, 1);
      var activeChapter = null;

      scrollChapters.forEach(function (chapter) {
        var rect = chapter.getBoundingClientRect();
        var progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        var shift = (0.5 - progress) * 48;
        chapter.style.setProperty("--chapter-progress", progress.toFixed(3));
        chapter.style.setProperty("--chapter-shift", shift.toFixed(2) + "px");

        if (rect.top <= viewportHeight * 0.56 && rect.bottom >= viewportHeight * 0.28) {
          activeChapter = chapter;
        }
      });

      scrollChapters.forEach(function (chapter) {
        chapter.classList.toggle("is-chapter-active", chapter === activeChapter);
      });

      var heroVisual = document.querySelector(".hero-editorial-visual");
      if (heroVisual) {
        heroVisual.style.setProperty("--hero-scroll-shift", Math.min(52, window.scrollY * 0.13).toFixed(2) + "px");
      }
    }

    function requestScrollStoryUpdate() {
      if (!scrollStoryFrame) scrollStoryFrame = window.requestAnimationFrame(updateScrollStory);
    }

    updateScrollStory();
    window.addEventListener("scroll", requestScrollStoryUpdate, { passive: true });
    window.addEventListener("resize", requestScrollStoryUpdate);
  }

  function seededRandom(seed) {
    var state = seed >>> 0;
    return function () {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  function initConstellation(canvas, index) {
    var context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    var mode = canvas.getAttribute("data-constellation") || "connection";
    var random = seededRandom(1701 + index * 97 + mode.length * 31);
    var nodes = [];
    var visible = true;
    var frame = 0;
    var previousTime = 0;
    var cssWidth = 0;
    var cssHeight = 0;
    var dark = canvas.classList.contains("social-constellation-dark");
    var nodeCount = mode === "loop" ? 46 : mode === "closing" ? 30 : 34;

    function createNodes() {
      nodes = [];
      var count = window.innerWidth < 760 ? Math.round(nodeCount * 0.7) : nodeCount;
      for (var i = 0; i < count; i += 1) {
        var angle = random() * Math.PI * 2;
        var radius = mode === "loop" && i < Math.round(count * 0.55)
          ? 0.22 + random() * 0.17
          : Math.sqrt(random()) * 0.54;
        var centerX = mode === "connection" ? 0.48 : 0.5;
        var centerY = mode === "connection" ? 0.46 : 0.5;
        nodes.push({
          x: Math.max(0.03, Math.min(0.97, centerX + Math.cos(angle) * radius)),
          y: Math.max(0.04, Math.min(0.96, centerY + Math.sin(angle) * radius)),
          radius: 0.8 + random() * 1.65,
          phase: random() * Math.PI * 2,
          speed: 0.22 + random() * 0.38,
          driftX: 3 + random() * 8,
          driftY: 3 + random() * 7,
          weight: 0.45 + random() * 0.55
        });
      }
    }

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      cssWidth = Math.max(1, rect.width);
      cssHeight = Math.max(1, rect.height);
      var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(cssWidth * ratio);
      canvas.height = Math.round(cssHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
      draw(performance.now());
    }

    function pointAt(node, time) {
      var motion = prefersReducedMotion ? 0 : time * 0.00022 * node.speed;
      return {
        x: node.x * cssWidth + Math.sin(motion + node.phase) * node.driftX,
        y: node.y * cssHeight + Math.cos(motion * 0.86 + node.phase) * node.driftY
      };
    }

    function draw(time) {
      context.clearRect(0, 0, cssWidth, cssHeight);
      if (!cssWidth || !cssHeight) return;
      var points = nodes.map(function (node) { return pointAt(node, time); });
      var linkDistance = Math.min(150, Math.max(82, cssWidth * 0.16));
      var lineColor = dark ? "129, 190, 255" : "52, 102, 224";
      var pointColor = dark ? "188, 224, 255" : "38, 92, 219";

      for (var i = 0; i < points.length; i += 1) {
        for (var j = i + 1; j < points.length; j += 1) {
          var dx = points[i].x - points[j].x;
          var dy = points[i].y - points[j].y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > linkDistance) continue;
          var alpha = (1 - distance / linkDistance) * (dark ? 0.19 : 0.14);
          context.beginPath();
          context.moveTo(points[i].x, points[i].y);
          context.lineTo(points[j].x, points[j].y);
          context.strokeStyle = "rgba(" + lineColor + "," + alpha.toFixed(3) + ")";
          context.lineWidth = 0.72;
          context.stroke();
        }
      }

      points.forEach(function (point, nodeIndex) {
        var node = nodes[nodeIndex];
        var pulse = prefersReducedMotion ? 1 : 0.82 + Math.sin(time * 0.0011 + node.phase) * 0.18;
        context.beginPath();
        context.arc(point.x, point.y, node.radius * pulse, 0, Math.PI * 2);
        context.fillStyle = "rgba(" + pointColor + "," + (0.3 + node.weight * 0.55).toFixed(3) + ")";
        context.fill();
      });

      var hubX = cssWidth * (mode === "connection" ? 0.49 : 0.5);
      var hubY = cssHeight * (mode === "connection" ? 0.47 : 0.5);
      var glow = context.createRadialGradient(hubX, hubY, 0, hubX, hubY, Math.min(cssWidth, cssHeight) * 0.22);
      glow.addColorStop(0, dark ? "rgba(83, 157, 255, .12)" : "rgba(66, 123, 235, .09)");
      glow.addColorStop(1, "rgba(66, 123, 235, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, cssWidth, cssHeight);
    }

    function animate(time) {
      frame = 0;
      if (!visible || document.hidden || prefersReducedMotion) return;
      if (time - previousTime >= 28) {
        previousTime = time;
        draw(time);
      }
      frame = window.requestAnimationFrame(animate);
    }

    function setVisible(nextVisible) {
      visible = nextVisible;
      if (visible && !frame && !prefersReducedMotion) frame = window.requestAnimationFrame(animate);
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { setVisible(entry.isIntersecting); });
      }, { rootMargin: "180px 0px" }).observe(canvas);
    }

    if ("ResizeObserver" in window) {
      canvas._socialMindResizeObserver = new ResizeObserver(resizeCanvas);
      canvas._socialMindResizeObserver.observe(canvas);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && visible && !frame && !prefersReducedMotion) frame = window.requestAnimationFrame(animate);
    });

    resizeCanvas();
    if (!prefersReducedMotion) frame = window.requestAnimationFrame(animate);
  }

  document.querySelectorAll("[data-constellation]").forEach(initConstellation);

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
