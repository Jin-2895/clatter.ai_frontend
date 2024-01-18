import { z as useSkin, j as jsx, F as Fragment, x as jsxs, L as useDispatch, Z as useLocation, W as useNavigate, r as react, N as useSelector, aL as getGalleryClips, B as Button } from "./index.f98d5771.js";
import { C as Container } from "./Container.a779fe40.js";
import { a1 as Modal, a2 as ModalBody, B as BreadCrumbs, R as Row, r as Col, Z as v4 } from "./App.f8a056f9.js";
import { R as ReactPlayer } from "./index.4bfa7308.js";
const ShortVideoSvg = () => {
  const { skin, setSkin } = useSkin();
  return /* @__PURE__ */ jsx(Fragment, { children: skin === "light" ? /* @__PURE__ */ jsxs("svg", { width: "66", height: "68", viewBox: "0 0 66 68", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M26.7358 28C26.539 28.0049 26.3518 28.0866 26.2143 28.2276C26.0769 28.3686 25.9999 28.5578 26 28.7547V41.2453C26 41.4454 26.0795 41.6374 26.2211 41.7789C26.3626 41.9205 26.5546 42 26.7547 42H39.2453C39.4454 42 39.6374 41.9205 39.7789 41.7789C39.9205 41.6374 40 41.4454 40 41.2453V28.7358C39.9951 28.539 39.9134 28.3518 39.7724 28.2143C39.6314 28.0769 39.4422 27.9999 39.2453 28H26.7358ZM30.0415 32.7774H32.6038V35.3585L31.5434 37.1962H30.0717L31.1434 35.3585H30.0415V32.7774ZM33.3472 32.7774H35.9208V35.3585L34.8679 37.1849H33.3962L34.4491 35.3585H33.3585L33.3472 32.7774Z", stroke: "white", "stroke-width": "0.8", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("rect", { width: "66", height: "68", rx: "33", fill: "#177FFA", "fill-opacity": "0.11" }),
    /* @__PURE__ */ jsx("rect", { x: "17", y: "19", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1822_112899)" }),
    /* @__PURE__ */ jsx("path", { d: "M33 26C30.5576 26 30.2505 26.0113 29.2909 26.054C28.3313 26.099 27.6776 26.2497 27.105 26.4725C26.5044 26.6984 25.9603 27.0528 25.5109 27.5109C25.0531 27.9605 24.6987 28.5045 24.4725 29.105C24.2497 29.6765 24.0979 30.3312 24.054 31.2875C24.0113 32.2494 24 32.5554 24 35.0011C24 37.4446 24.0113 37.7506 24.054 38.7103C24.099 39.6688 24.2497 40.3224 24.4725 40.895C24.7031 41.4867 25.0103 41.9885 25.5109 42.4891C26.0104 42.9897 26.5121 43.298 27.1039 43.5275C27.6776 43.7502 28.3301 43.9021 29.2886 43.946C30.2494 43.9888 30.5554 44 33 44C35.4446 44 35.7495 43.9888 36.7103 43.946C37.6676 43.901 38.3235 43.7502 38.8961 43.5275C39.4964 43.3015 40.04 42.9471 40.4891 42.4891C40.9897 41.9885 41.2969 41.4867 41.5275 40.895C41.7491 40.3224 41.901 39.6688 41.946 38.7103C41.9888 37.7506 42 37.4446 42 35C42 32.5554 41.9888 32.2494 41.946 31.2886C41.901 30.3313 41.7491 29.6765 41.5275 29.105C41.3013 28.5045 40.9469 27.9605 40.4891 27.5109C40.0398 27.0526 39.4957 26.6982 38.895 26.4725C38.3212 26.2497 37.6665 26.0979 36.7091 26.054C35.7484 26.0113 35.4435 26 32.9978 26H33.0011H33ZM32.1934 27.6223H33.0011C35.4041 27.6223 35.6887 27.6301 36.6371 27.674C37.5146 27.7134 37.9916 27.8607 38.3089 27.9834C38.7285 28.1465 39.0289 28.3422 39.3439 28.6572C39.6589 28.9722 39.8535 29.2715 40.0166 29.6923C40.1404 30.0084 40.2866 30.4854 40.326 31.3629C40.3699 32.3113 40.3789 32.5959 40.3789 34.9978C40.3789 37.3996 40.3699 37.6854 40.326 38.6337C40.2866 39.5112 40.1392 39.9871 40.0166 40.3044C39.8723 40.6952 39.642 41.0485 39.3427 41.3383C39.0277 41.6532 38.7285 41.8479 38.3078 42.011C37.9928 42.1348 37.5157 42.281 36.6371 42.3215C35.6887 42.3643 35.4041 42.3744 33.0011 42.3744C30.5981 42.3744 30.3124 42.3643 29.364 42.3215C28.4865 42.281 28.0106 42.1348 27.6934 42.011C27.3024 41.8669 26.9488 41.637 26.6584 41.3383C26.3588 41.048 26.1282 40.6944 25.9834 40.3032C25.8607 39.9871 25.7134 39.5101 25.674 38.6326C25.6313 37.6842 25.6223 37.3996 25.6223 34.9955C25.6223 32.5925 25.6313 32.309 25.674 31.3606C25.7145 30.4831 25.8608 30.0061 25.9845 29.6889C26.1476 29.2693 26.3434 28.9689 26.6584 28.6539C26.9734 28.3389 27.2726 28.1443 27.6934 27.9811C28.0106 27.8574 28.4865 27.7111 29.364 27.6706C30.1943 27.6324 30.516 27.6211 32.1934 27.62V27.6223ZM37.8049 29.1163C37.663 29.1163 37.5226 29.1442 37.3916 29.1985C37.2605 29.2527 37.1415 29.3323 37.0412 29.4326C36.9409 29.5329 36.8614 29.6519 36.8071 29.783C36.7528 29.914 36.7249 30.0544 36.7249 30.1962C36.7249 30.3381 36.7528 30.4785 36.8071 30.6095C36.8614 30.7406 36.9409 30.8596 37.0412 30.9599C37.1415 31.0602 37.2605 31.1398 37.3916 31.194C37.5226 31.2483 37.663 31.2762 37.8049 31.2762C38.0913 31.2762 38.366 31.1625 38.5686 30.9599C38.7711 30.7574 38.8849 30.4827 38.8849 30.1962C38.8849 29.9098 38.7711 29.6351 38.5686 29.4326C38.366 29.23 38.0913 29.1163 37.8049 29.1163ZM33.0011 30.3785C32.3881 30.3689 31.7793 30.4814 31.2101 30.7094C30.6409 30.9374 30.1228 31.2763 29.6859 31.7065C29.249 32.1366 28.902 32.6494 28.6652 33.2149C28.4284 33.7804 28.3064 34.3874 28.3064 35.0006C28.3064 35.6137 28.4284 36.2207 28.6652 36.7862C28.902 37.3517 29.249 37.8645 29.6859 38.2946C30.1228 38.7248 30.6409 39.0637 31.2101 39.2917C31.7793 39.5197 32.3881 39.6322 33.0011 39.6226C34.2145 39.6037 35.3717 39.1084 36.2231 38.2437C37.0745 37.3789 37.5516 36.2141 37.5516 35.0006C37.5516 33.7871 37.0745 32.6222 36.2231 31.7575C35.3717 30.8927 34.2145 30.3974 33.0011 30.3785ZM33.0011 31.9996C33.7969 31.9996 34.56 32.3157 35.1227 32.8784C35.6854 33.4411 36.0015 34.2043 36.0015 35C36.0015 35.7957 35.6854 36.5589 35.1227 37.1216C34.56 37.6843 33.7969 38.0004 33.0011 38.0004C32.2054 38.0004 31.4422 37.6843 30.8795 37.1216C30.3169 36.5589 30.0008 35.7957 30.0008 35C30.0008 34.2043 30.3169 33.4411 30.8795 32.8784C31.4422 32.3157 32.2054 31.9996 33.0011 31.9996Z", fill: "white" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1822_112899", x1: "4.0359", y1: "34.5", x2: "49", y2: "34.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }) : /* @__PURE__ */ jsxs("svg", { width: "66", height: "68", viewBox: "0 0 66 68", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "66", height: "68", rx: "33", fill: "#B6D5FA" }),
    /* @__PURE__ */ jsx("rect", { x: "17", y: "19", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1744_112965)" }),
    /* @__PURE__ */ jsx("path", { d: "M33 26C30.5576 26 30.2505 26.0113 29.2909 26.054C28.3313 26.099 27.6776 26.2497 27.105 26.4725C26.5044 26.6984 25.9603 27.0528 25.5109 27.5109C25.0531 27.9605 24.6987 28.5045 24.4725 29.105C24.2497 29.6765 24.0979 30.3312 24.054 31.2875C24.0113 32.2494 24 32.5554 24 35.0011C24 37.4446 24.0113 37.7506 24.054 38.7103C24.099 39.6688 24.2497 40.3224 24.4725 40.895C24.7031 41.4867 25.0103 41.9885 25.5109 42.4891C26.0104 42.9897 26.5121 43.298 27.1039 43.5275C27.6776 43.7502 28.3301 43.9021 29.2886 43.946C30.2494 43.9888 30.5554 44 33 44C35.4446 44 35.7495 43.9888 36.7103 43.946C37.6676 43.901 38.3235 43.7502 38.8961 43.5275C39.4964 43.3015 40.04 42.9471 40.4891 42.4891C40.9897 41.9885 41.2969 41.4867 41.5275 40.895C41.7491 40.3224 41.901 39.6688 41.946 38.7103C41.9888 37.7506 42 37.4446 42 35C42 32.5554 41.9888 32.2494 41.946 31.2886C41.901 30.3313 41.7491 29.6765 41.5275 29.105C41.3013 28.5045 40.9469 27.9605 40.4891 27.5109C40.0398 27.0526 39.4957 26.6982 38.895 26.4725C38.3212 26.2497 37.6665 26.0979 36.7091 26.054C35.7484 26.0113 35.4435 26 32.9978 26H33.0011H33ZM32.1934 27.6223H33.0011C35.4041 27.6223 35.6887 27.6301 36.6371 27.674C37.5146 27.7134 37.9916 27.8607 38.3089 27.9834C38.7285 28.1465 39.0289 28.3422 39.3439 28.6572C39.6589 28.9722 39.8535 29.2715 40.0166 29.6923C40.1404 30.0084 40.2866 30.4854 40.326 31.3629C40.3699 32.3113 40.3789 32.5959 40.3789 34.9978C40.3789 37.3996 40.3699 37.6854 40.326 38.6337C40.2866 39.5112 40.1392 39.9871 40.0166 40.3044C39.8723 40.6952 39.642 41.0485 39.3427 41.3383C39.0277 41.6532 38.7285 41.8479 38.3078 42.011C37.9928 42.1348 37.5157 42.281 36.6371 42.3215C35.6887 42.3643 35.4041 42.3744 33.0011 42.3744C30.5981 42.3744 30.3124 42.3643 29.364 42.3215C28.4865 42.281 28.0106 42.1348 27.6934 42.011C27.3024 41.8669 26.9488 41.637 26.6584 41.3383C26.3588 41.048 26.1282 40.6944 25.9834 40.3032C25.8607 39.9871 25.7134 39.5101 25.674 38.6326C25.6313 37.6842 25.6223 37.3996 25.6223 34.9955C25.6223 32.5925 25.6313 32.309 25.674 31.3606C25.7145 30.4831 25.8608 30.0061 25.9845 29.6889C26.1476 29.2693 26.3434 28.9689 26.6584 28.6539C26.9734 28.3389 27.2726 28.1443 27.6934 27.9811C28.0106 27.8574 28.4865 27.7111 29.364 27.6706C30.1943 27.6324 30.516 27.6211 32.1934 27.62V27.6223ZM37.8049 29.1163C37.663 29.1163 37.5226 29.1442 37.3916 29.1985C37.2605 29.2527 37.1415 29.3323 37.0412 29.4326C36.9409 29.5329 36.8614 29.6519 36.8071 29.783C36.7528 29.914 36.7249 30.0544 36.7249 30.1962C36.7249 30.3381 36.7528 30.4785 36.8071 30.6095C36.8614 30.7406 36.9409 30.8596 37.0412 30.9599C37.1415 31.0602 37.2605 31.1398 37.3916 31.194C37.5226 31.2483 37.663 31.2762 37.8049 31.2762C38.0913 31.2762 38.366 31.1625 38.5686 30.9599C38.7711 30.7574 38.8849 30.4827 38.8849 30.1962C38.8849 29.9098 38.7711 29.6351 38.5686 29.4326C38.366 29.23 38.0913 29.1163 37.8049 29.1163ZM33.0011 30.3785C32.3881 30.3689 31.7793 30.4814 31.2101 30.7094C30.6409 30.9374 30.1228 31.2763 29.6859 31.7065C29.249 32.1366 28.902 32.6494 28.6652 33.2149C28.4284 33.7804 28.3064 34.3874 28.3064 35.0006C28.3064 35.6137 28.4284 36.2207 28.6652 36.7862C28.902 37.3517 29.249 37.8645 29.6859 38.2946C30.1228 38.7248 30.6409 39.0637 31.2101 39.2917C31.7793 39.5197 32.3881 39.6322 33.0011 39.6226C34.2145 39.6037 35.3717 39.1084 36.2231 38.2437C37.0745 37.3789 37.5516 36.2141 37.5516 35.0006C37.5516 33.7871 37.0745 32.6222 36.2231 31.7575C35.3717 30.8927 34.2145 30.3974 33.0011 30.3785ZM33.0011 31.9996C33.7969 31.9996 34.56 32.3157 35.1227 32.8784C35.6854 33.4411 36.0015 34.2043 36.0015 35C36.0015 35.7957 35.6854 36.5589 35.1227 37.1216C34.56 37.6843 33.7969 38.0004 33.0011 38.0004C32.2054 38.0004 31.4422 37.6843 30.8795 37.1216C30.3169 36.5589 30.0008 35.7957 30.0008 35C30.0008 34.2043 30.3169 33.4411 30.8795 32.8784C31.4422 32.3157 32.2054 31.9996 33.0011 31.9996Z", fill: "white" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1744_112965", x1: "4.0359", y1: "34.5", x2: "49", y2: "34.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }) });
};
const ClipsGallery = () => {
  var _a, _b;
  const dispatch = useDispatch();
  const location = useLocation();
  useNavigate();
  const [show, setShow] = react.exports.useState(false);
  const [videoData, setVideoData] = react.exports.useState(null);
  const [modalItem, setModalItem] = react.exports.useState(null);
  const { skin, setSkin } = useSkin();
  const { getGallery } = useSelector((state) => state.createVideo);
  react.exports.useEffect(() => {
    dispatch(getGalleryClips());
  }, []);
  react.exports.useEffect(() => {
    if (getGallery !== null) {
      let id = location.state;
      if (id !== null) {
        const filterDataWithData = getGallery.clips.shortClips.filter((item) => item._id === id);
        setVideoData(filterDataWithData);
      }
    }
  }, [getGallery]);
  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = encodeURIComponent(title);
    link.click();
  };
  const handleShowModal = (item) => {
    setShow(!show);
    setModalItem(item);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Modal,
      {
        size: "md",
        className: "modal modal-dialog-centered",
        toggle: () => setShow(!show),
        isOpen: show,
        children: /* @__PURE__ */ jsx(ModalBody, { className: `${skin === "light" ? "player-modal" : "dark-player-modal"}`, toggle: () => {
          setShow(!show);
          setModalItem(null);
        }, children: /* @__PURE__ */ jsx("div", { className: "w-100 d-flex justify-content-center align-content-center", children: /* @__PURE__ */ jsxs("div", { className: `d-flex flex-column align-items-center mt-1 ${skin === "light" ? "player-container" : "dark-player-container"}`, children: [
          /* @__PURE__ */ jsx("h3", { style: { color: "white", marginTop: "0.8rem" }, children: "Now Playing" }),
          /* @__PURE__ */ jsx("h5", { style: { color: "white" }, children: modalItem == null ? void 0 : modalItem.title }),
          /* @__PURE__ */ jsx(ReactPlayer, { className: `${skin === "light" ? "react-player" : "dark-react-player"}`, controls: true, playing: true, url: modalItem == null ? void 0 : modalItem.url })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
        /* @__PURE__ */ jsx(ShortVideoSvg, {}),
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "Clipped Video", data: [{ title: "Create Video", link: "/create-video" }, { title: "Gallery", link: "/video-gallery" }, { title: "Short Clips Gallery", link: "/short-clips-gallery" }, { title: "Clipped Video" }] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "inner-parent-child dark-inner-child-card", children: /* @__PURE__ */ jsx(Row, { className: "justify-content-center", children: /* @__PURE__ */ jsx(Col, { lg: 8, className: "align-items-center", children: videoData !== null && ((_b = (_a = videoData[0]) == null ? void 0 : _a.clips) == null ? void 0 : _b.map((item, index) => {
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "px-4 py-1 mt-4", style: { color: "#177DF5" }, children: [
            "#",
            index + 1,
            " - ",
            item.title
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cards dark-cards", children: [
            /* @__PURE__ */ jsxs("div", { className: "video-model dark-video-model", children: [
              /* @__PURE__ */ jsxs("div", { onClick: () => handleShowModal(item), className: "card-images dark-card-images", style: { position: "relative", cursor: "pointer" }, children: [
                /* @__PURE__ */ jsx("video", { className: "card-video-images dark-card-video-images", children: /* @__PURE__ */ jsx("source", { src: `${item == null ? void 0 : item.url}#t=5` }) }),
                /* @__PURE__ */ jsxs("span", { style: { position: "absolute", top: "20px", right: "10px", backgroundColor: "#177DF5", borderRadius: "15px", color: "white", padding: "5px 10px", fontWeight: "bold", fontSize: "12px" }, children: [
                  item == null ? void 0 : item.startTime,
                  " - ",
                  item == null ? void 0 : item.endTime
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "buttons pt-1", children: /* @__PURE__ */ jsx(Button, { onClick: () => handleDownload(item == null ? void 0 : item.url, item == null ? void 0 : item.title), color: "primary", style: { padding: "15px 30px", borderRadius: "15px" }, children: "Download" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "script dark-script w-100", children: [
              /* @__PURE__ */ jsx("div", { className: "d-flex flex-column align-items-end justify-content-center text-center", style: { padding: "5px 10px", fontWeight: "bold", fontSize: "12px" }, children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h1", { style: { color: "#32CD32", textAlign: "center" }, children: item == null ? void 0 : item.virality }),
                /* @__PURE__ */ jsx("h5", { style: { textAlign: "center" }, children: "Score" })
              ] }) }),
              (item == null ? void 0 : item.description) ? /* @__PURE__ */ jsx("div", { className: "script-child dark-script-child", children: /* @__PURE__ */ jsx("p", { children: item == null ? void 0 : item.description }) }) : /* @__PURE__ */ jsx("div", { className: "script-child dark-script-child", children: /* @__PURE__ */ jsx("p", { children: "This video has no description" }) })
            ] })
          ] })
        ] }, v4());
      })) }) }) })
    ] })
  ] });
};
export {
  ClipsGallery as default
};
