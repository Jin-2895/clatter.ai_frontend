import { W as useNavigate, x as jsxs, j as jsx } from "./index.f98d5771.js";
import { aa as BlogSvg, B as BreadCrumbs, z as Row, D as Col, E as Card } from "./App.f8a056f9.js";
import { B as BPTISvg } from "./BPTISvg.e37d1bf3.js";
import { B as BPSvg } from "./BPSvg.7abc4730.js";
import { C as Container } from "./Container.b733bdd2.js";
function Blog() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(BlogSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Instagram", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Blog", link: "/blog" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/blog_post");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(BPSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Blog Post" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Create your blog posts with an engaging content." })
            ] }) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/blog_post_topic_ideas");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(BPTISvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Blog Post Topic Ideas" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Brainstorm new blog post topics that will engage readers and rank." })
            ] }) })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Blog as default
};
