import { L as useDispatch, N as useSelector, r as react, P as subscriptionActions, aP as emptyPostSuggestion, x as jsxs, j as jsx, aQ as postSuggestions } from "./index.f98d5771.js";
import { d as dist } from "./index.7e8672eb.js";
import { S as SelectLanguage, B as BsSaveFill, C as CreationHubApi } from "./SelectLanguage.798496a3.js";
import { B as BreadCrumbs, ag as Modal, z as Row, D as Col, E as Card, S as Spinner, b as CardBody } from "./App.f8a056f9.js";
import { Y as YTSvg } from "./YTSvg.ad2b50b9.js";
import { C as Container } from "./Container.b733bdd2.js";
import { B as Button } from "./Button.14a5433c.js";
import "./iconBase.b81e1af8.js";
const YT = () => {
  const dispatch = useDispatch();
  const [prompt, setPrompt, promptRef] = dist("");
  const [language, setLanguage, languageRef] = dist("English");
  const [data, setData] = dist();
  const [docId, setDocId, docIdRef] = dist();
  const [show, setShow] = dist(false);
  const [msg, setMsg, msgRef] = dist("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [documentloding, setdocumentloding] = dist(false);
  const { postSuggestion, postSuggestionLoading, postSuggestionError } = useSelector((state) => state.suggestion);
  const { subscription_plans_modal } = useSelector((state) => state.subscription);
  react.exports.useEffect(() => {
    var _a;
    if (postSuggestion) {
      let suggest = (_a = postSuggestion.data) == null ? void 0 : _a.replace(/(?:\r\n|\r|\n)/g, "<br />");
      setData(suggest);
    }
    if (postSuggestionError) {
      if (postSuggestionError.includes("Insufficient Credit")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        let upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      } else if (postSuggestionError.includes("Subscription Not Found")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        let upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      }
    }
  }, [postSuggestion, postSuggestionError]);
  react.exports.useEffect(() => {
    if (data) {
      dispatch(emptyPostSuggestion());
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    var postData = {
      prompt: `${promptRef.current}`,
      language: `${languageRef.current}`,
      type: "youtube_video_title"
    };
    dispatch(postSuggestions(postData));
  };
  async function saveDocument(e) {
    e.preventDefault();
    setdocumentloding(true);
    if (docIdRef.current) {
      const id = docIdRef.current;
      const res = await CreationHubApi.saveDocumentCreation(id);
      if (res.success) {
        setdocumentloding(false);
        setMsg("Document Saved Successfully");
        handleShow();
      } else {
        setdocumentloding(false);
        setMsg("First generate content then you can save");
        handleShow();
      }
    } else {
      setdocumentloding(false);
      setMsg("First generate content then you can save");
      handleShow();
    }
  }
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(YTSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Youtube Video Titles", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Youtube", link: "/youtube" }, { title: "Youtube Video Title", link: "/youtube_title" }] })
    ] }),
    /* @__PURE__ */ jsx(Modal, { show, onHide: handleClose, children: /* @__PURE__ */ jsx(Modal.Body, { children: msgRef.current }) }),
    /* @__PURE__ */ jsx("div", { className: "spinner" }),
    /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: /* @__PURE__ */ jsxs(Row, { className: "h-100", children: [
      /* @__PURE__ */ jsx(Col, { lg: "6", className: "h-100", children: /* @__PURE__ */ jsxs("div", { className: "h-100 custom-card-5 dark-theme-custom-card-5", children: [
        /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { children: "Youtube Video Titles" }),
          /* @__PURE__ */ jsx(Card.Text, { children: "Create engaging, click-worthy titles for your videos." })
        ] }),
        /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsxs("form", { className: "mt-5", onSubmit: (e) => handleSubmit(e), children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "What is the video about?" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                onChange: (e) => setPrompt(e.target.value),
                className: "form-control",
                id: "userName",
                placeholder: "Travel to India"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Language" }),
            /* @__PURE__ */ jsxs("div", { className: "input-affix m-b-10", children: [
              /* @__PURE__ */ jsx("i", { className: "prefix-icon anticon anticon-lock" }),
              /* @__PURE__ */ jsx(SelectLanguage, { setLanguage, language })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsxs(Button, { onClick: (e) => handleSubmit(e), form: "form", type: "submit", color: "primary", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: [
            /* @__PURE__ */ jsx("span", { children: postSuggestionLoading !== "idle" ? "Generating" : "Generate" }),
            postSuggestionLoading !== "idle" ? /* @__PURE__ */ jsx(
              Spinner,
              {
                style: {
                  height: "1rem",
                  width: "1rem"
                }
              }
            ) : null
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxs("div", { className: "h-100 custom-card-5 dark-theme-custom-card-5", children: [
        /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { className: "text-center font-weight-bold text-uppercase", children: "Output" }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            BsSaveFill,
            {
              style: { cursor: "pointer" },
              onClick: (e) => saveDocument(e)
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " h-100", children: documentloding ? /* @__PURE__ */ jsxs(CardBody, { className: "py-4 col-12", children: [
          /* @__PURE__ */ jsx(Loader, {}),
          " "
        ] }) : /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { className: "text-uppercase" }),
          /* @__PURE__ */ jsx(Card.Text, { children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: data } }) })
        ] }) })
      ] }) })
    ] }) })
  ] });
};
export {
  YT as default
};
