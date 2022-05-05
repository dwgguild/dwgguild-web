!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.scrollSpy = e())
    : (t.scrollSpy = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function o(s) {
      if (e[s]) return e[s].exports;
      var n = (e[s] = { i: s, l: !1, exports: {} });
      return t[s].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function (t, e, s) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (
          (o.r(s),
          Object.defineProperty(s, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            o.d(
              s,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return s;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = ""),
      o((o.s = 0))
    );
  })([
    function (t, e, o) {
      t.exports = (t, e = {}) => {
        const { ScrollSpy: s } = o(1),
          n = new s(t, e);
        return (
          (window.onload = n.onScroll()),
          window.addEventListener("scroll", () => n.onScroll()),
          n
        );
      };
    },
    function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "ScrollSpy", function () {
          return s;
        });
      class s {
        constructor(t, e = {}) {
          if (!t)
            throw new Error(
              "First argument is query selector to your navigation."
            );
          if ("object" != typeof e)
            throw new Error("Second argument must be instance of Object.");
          (e.smoothScroll = (!0 === e.smoothScroll && {}) || e.smoothScroll),
            (this.menuList =
              t instanceof HTMLElement ? t : document.querySelector(t)),
            (this.options = Object.assign(
              {},
              {
                sectionClass: ".scrollspy",
                menuActiveTarget: "li > a",
                offset: 0,
                hrefAttribute: "href",
                activeClass: "active",
                scrollContainer: "",
                smoothScroll: {},
              },
              e
            )),
            this.options.scrollContainer
              ? (this.scroller =
                  this.options.scrollContainer instanceof HTMLElement
                    ? this.options.scrollContainer
                    : document.querySelector(this.options.scrollContainer))
              : (this.scroller = window),
            (this.sections = document.querySelectorAll(
              this.options.sectionClass
            )),
            this.attachEventListeners();
        }
        attachEventListeners() {
          if (
            this.scroller &&
            (this.scroller.addEventListener("scroll", () => this.onScroll()),
            this.options.smoothScroll)
          ) {
            this.menuList
              .querySelectorAll(this.options.menuActiveTarget)
              .forEach((t) =>
                t.addEventListener("click", this.onClick.bind(this))
              );
          }
        }
        onClick(t) {
          const e = t.target.getAttribute(this.options.hrefAttribute),
            o = document.querySelector(e);
          o &&
            this.options.smoothScroll &&
            (t.preventDefault(), this.scrollTo(o));
        }
        onScroll() {
          const t = this.getSectionInView(),
            e = this.getMenuItemBySection(t);
          e && (this.removeCurrentActive({ ignore: e }), this.setActive(e));
        }
        scrollTo(t) {
          const e =
            "function" == typeof this.options.smoothScrollBehavior &&
            this.options.smoothScrollBehavior;
          e
            ? e(t, this.options.smoothScroll)
            : t.scrollIntoView({
                ...this.options.smoothScroll,
                behavior: "smooth",
              });
        }
        getMenuItemBySection(t) {
          if (!t) return;
          const e = t.getAttribute("id");
          return this.menuList.querySelector(
            `[${this.options.hrefAttribute}="#${e}"]`
          );
        }
        getSectionInView() {
          for (let t = 0; t < this.sections.length; t++) {
            const e = this.sections[t].offsetTop,
              o = e + this.sections[t].offsetHeight;
            let s =
              (document.documentElement.scrollTop || document.body.scrollTop) +
              this.options.offset;
            this.options.scrollContainer &&
              this.scroller &&
              (s = this.scroller.scrollTop + this.options.offset);
            if (s > e && s <= o) return this.sections[t];
          }
        }
        setActive(t) {
          t.classList.contains(this.options.activeClass) ||
            t.classList.add(this.options.activeClass);
        }
        removeCurrentActive({ ignore: t }) {
          const {
              hrefAttribute: e,
              menuActiveTarget: o,
              activeClass: s,
            } = this.options,
            n = `${o}.${s}:not([${e}="${t.getAttribute(e)}"])`;
          this.menuList
            .querySelectorAll(n)
            .forEach((t) => t.classList.remove(this.options.activeClass));
        }
      }
    },
  ]);
});
