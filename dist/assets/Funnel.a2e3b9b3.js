import { W as useNavigate, x as jsxs, j as jsx } from "./index.f98d5771.js";
import { ad as MarketingFunnelSvg, B as BreadCrumbs, z as Row, D as Col, E as Card } from "./App.f8a056f9.js";
import { S as SSvg } from "./SSvg.641c9148.js";
import { C as CSvg } from "./CSvg.d400180c.js";
import { C as Container } from "./Container.b733bdd2.js";
function Funnel() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(MarketingFunnelSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Marketing Funnels", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Marketing Funnels", link: "/funnels" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/strategy");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(SSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Strategy" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Write complete strategy for your funnle." })
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
            navigate("/copy");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(CSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Copy" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Write complete copy for your funnle." })
            ] }) })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Funnel as default
};
