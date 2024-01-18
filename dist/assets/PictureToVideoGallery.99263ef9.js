import { L as useDispatch, r as react, N as useSelector, aL as getGalleryClips, x as jsxs, F as Fragment, j as jsx, U as Link } from "./index.f98d5771.js";
import { P as PictureToVideoSvg, V as VideoFrameCapture } from "./CreateImage.927255c3.js";
import { a1 as Modal, a2 as ModalBody, B as BreadCrumbs, z as Row, D as Col, x as hooks, a4 as ComponentSpinner } from "./App.f8a056f9.js";
import { R as ReactPlayer } from "./index.4bfa7308.js";
import { C as Container } from "./Container.b733bdd2.js";
import { B as Button } from "./Button.14a5433c.js";
const PictureToVideoGallery = () => {
  var _a, _b, _c;
  const dispatch = useDispatch();
  const [show, setShow] = react.exports.useState(false);
  const [modalItem, setModalItem] = react.exports.useState(null);
  const { getGallery, getGalleryLoading } = useSelector((state) => state.createVideo);
  react.exports.useEffect(() => {
    dispatch(getGalleryClips());
  }, []);
  const handleShowModal = (item) => {
    setShow(!show);
    setModalItem(item);
  };
  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = encodeURIComponent(title);
    link.click();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Modal,
      {
        size: "lg",
        style: { maxWidth: "640px", width: "100%", maxHeight: "400px", height: "100%" },
        className: "bg-transparent modal modal-dialog-centered",
        toggle: () => setShow(!show),
        isOpen: show,
        children: /* @__PURE__ */ jsx(ModalBody, { toggle: () => {
          setShow(!show);
          setModalItem(null);
        }, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ReactPlayer, { className: "rounded-4", controls: true, playing: true, url: modalItem == null ? void 0 : modalItem.resultUrl }) }) })
      }
    ),
    /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
        /* @__PURE__ */ jsx(PictureToVideoSvg, {}),
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "Picture To Video Gallery", data: [{ title: "Create Video", link: "/create-video" }, { title: "Gallery", link: "/video-gallery" }, { title: "Picture To Video Gallery", link: "/picture-to-video-gallery" }] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "component w-100", children: ((_a = getGallery == null ? void 0 : getGallery.clips) == null ? void 0 : _a.pictureToVideo.length) > 0 ? /* @__PURE__ */ jsx(Row, { lg: 12, children: (_c = (_b = getGallery == null ? void 0 : getGallery.clips) == null ? void 0 : _b.pictureToVideo) == null ? void 0 : _c.map((videos) => {
        return /* @__PURE__ */ jsx(Col, { lg: 3, children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsx("div", { className: "inner-child-image-card dark-theme-inner-child-image-card", children: /* @__PURE__ */ jsxs(Row, { lg: 12, children: [
          /* @__PURE__ */ jsx(Col, { onClick: () => handleShowModal(videos), children: /* @__PURE__ */ jsx(VideoFrameCapture, { url: videos == null ? void 0 : videos.resultUrl }) }),
          /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column mt-1", style: { gap: "10px" }, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              "Length: ",
              Math.round(videos == null ? void 0 : videos.duration),
              " sec"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Date: ",
              hooks(videos == null ? void 0 : videos.createdAt).format("DD MMM YY")
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { onClick: () => handleDownload(videos == null ? void 0 : videos.resultUrl, videos == null ? void 0 : videos.text), children: "Download" }) })
          ] }) })
        ] }) }) }) }, videos == null ? void 0 : videos._id);
      }) }) : /* @__PURE__ */ jsx(Fragment, { children: getGalleryLoading !== "idle" ? /* @__PURE__ */ jsx(ComponentSpinner, { style: { width: "2rem", height: "2rem" } }) : /* @__PURE__ */ jsxs("div", { style: { display: "flex", textAlign: "center", width: "100%", justifyContent: "center", color: "gray" }, children: [
        "You have not created any videos, visit ",
        /* @__PURE__ */ jsx(Link, { style: { color: "#177FFA", fontWeight: "500" }, to: "/create-video", children: "\xA0Create Video\xA0" }),
        " tab to start creating picture to videos"
      ] }) }) })
    ] })
  ] });
};
export {
  PictureToVideoGallery as default
};
