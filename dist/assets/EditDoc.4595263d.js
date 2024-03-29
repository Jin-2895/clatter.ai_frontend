import { z as useSkin, j as jsx, F as Fragment, x as jsxs, p as propTypes, L as useDispatch, W as useNavigate, B as Button, aM as deleteDocument, Z as useLocation, r as react, I as axios, J as Domain, aN as _t, aO as dangerSvg, as as cancelSvg, K as ReactToast } from "./index.f98d5771.js";
import { d as dist } from "./index.7e8672eb.js";
import { a1 as Modal, B as BreadCrumbs, a4 as ComponentSpinner, z as Row, D as Col, E as Card } from "./App.f8a056f9.js";
import { C as Container } from "./Container.b733bdd2.js";
const DocumentSvg = () => {
  const { skin, setSkin } = useSkin();
  return /* @__PURE__ */ jsx(Fragment, { children: skin === "light" ? /* @__PURE__ */ jsxs("svg", { width: "56", height: "58", viewBox: "0 0 68 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "68", height: "70", rx: "34", fill: "#177FFA", fillOpacity: "0.11" }),
    /* @__PURE__ */ jsx("rect", { x: "18", y: "20", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1413_112953)" }),
    /* @__PURE__ */ jsx("path", { d: "M29.7796 38.3252C24.4483 38.9096 25.0407 32.4817 29.7796 33.0661C28.0025 26.6382 38.0727 26.6382 37.4803 31.313C43.4039 29.56 43.4039 38.9096 38.0727 38.3252M30.9643 40.6626L33.9261 43M33.9261 43L36.8879 40.6626M33.9261 43V34.8191", stroke: "#AFD0F6", strokeWidth: "1.5", strokeLinecap: "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1413_112953", x1: "5.0359", y1: "35.5", x2: "50", y2: "35.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }) : /* @__PURE__ */ jsxs("svg", { width: "56", height: "58", viewBox: "0 0 68 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "68", height: "70", rx: "34", fill: "#B6D5FA" }),
    /* @__PURE__ */ jsx("rect", { x: "18", y: "20", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1744_112967)" }),
    /* @__PURE__ */ jsx("path", { d: "M39.3299 35.7289C39.3299 35.5682 39.3937 35.4141 39.5074 35.3004C39.621 35.1868 39.7751 35.123 39.9358 35.123C40.0965 35.123 40.2506 35.1868 40.3643 35.3004C40.4779 35.4141 40.5417 35.5682 40.5417 35.7289V42.3938C40.5417 42.5545 40.4779 42.7086 40.3643 42.8223C40.2506 42.9359 40.0965 42.9997 39.9358 42.9997H26.6059C26.4452 42.9997 26.2911 42.9359 26.1775 42.8223C26.0638 42.7086 26 42.5545 26 42.3938V29.0639C26 28.9032 26.0638 28.7491 26.1775 28.6355C26.2911 28.5218 26.4452 28.458 26.6059 28.458H33.2709C33.4316 28.458 33.5857 28.5218 33.6993 28.6355C33.8129 28.7491 33.8768 28.9032 33.8768 29.0639C33.8768 29.2246 33.8129 29.3787 33.6993 29.4924C33.5857 29.606 33.4316 29.6698 33.2709 29.6698H27.2118V41.7879H39.3299V35.7289Z", fill: "#AFD0F6" }),
    /* @__PURE__ */ jsx("path", { d: "M32.476 36.5289L33.4757 36.3859L39.6172 30.2457C39.6751 30.1898 39.7212 30.123 39.753 30.049C39.7847 29.9751 39.8015 29.8956 39.8022 29.8151C39.8029 29.7347 39.7875 29.6549 39.7571 29.5804C39.7266 29.506 39.6816 29.4383 39.6247 29.3814C39.5678 29.3246 39.5002 29.2796 39.4257 29.2491C39.3512 29.2186 39.2715 29.2033 39.191 29.204C39.1106 29.2047 39.031 29.2214 38.9571 29.2532C38.8832 29.2849 38.8163 29.3311 38.7605 29.389L32.6178 35.5292L32.4748 36.5289H32.476ZM40.474 28.531C40.6429 28.6998 40.7769 28.9002 40.8683 29.1208C40.9597 29.3415 41.0068 29.5779 41.0068 29.8167C41.0068 30.0555 40.9597 30.292 40.8683 30.5126C40.7769 30.7332 40.6429 30.9336 40.474 31.1025L34.1907 37.3857C34.0981 37.4787 33.9777 37.5391 33.8478 37.5578L31.8483 37.8438C31.7551 37.8571 31.6601 37.8486 31.5708 37.8189C31.4814 37.7891 31.4003 37.739 31.3337 37.6724C31.2671 37.6059 31.217 37.5247 31.1873 37.4354C31.1575 37.3461 31.149 37.251 31.1624 37.1579L31.4484 35.1584C31.4668 35.0286 31.5267 34.9083 31.6193 34.8154L37.9037 28.5322C38.2446 28.1914 38.7068 28 39.1888 28C39.6708 28 40.1331 28.1914 40.474 28.5322V28.531Z", fill: "#AFD0F6" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1744_112967", x1: "5.0359", y1: "35.5", x2: "50", y2: "35.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }) });
};
const DownloadSvg = () => {
  useSkin();
  return /* @__PURE__ */ jsxs("svg", { width: "220", height: "100", viewBox: "0 0 220 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("g", { filter: "url(#filter0_d_1725_112955)", children: /* @__PURE__ */ jsx("rect", { x: "20", y: "16", width: "180", height: "60", rx: "20", fill: "url(#paint0_linear_1725_112955)" }) }),
    /* @__PURE__ */ jsx("text", { x: "50", y: "52", fill: "white", children: "Copy Text" }),
    /* @__PURE__ */ jsx("path", { d: "M150.375 54C149.722 54 149.163 53.7672 148.697 53.3017C148.232 52.8362 147.999 52.2773 148 51.625V48.0625H150.375V51.625H164.625V48.0625H167V51.625C167 52.2781 166.767 52.8374 166.302 53.3029C165.836 53.7684 165.277 54.0008 164.625 54H150.375ZM157.5 49.25L151.563 43.3125L153.225 41.5906L156.313 44.6781V35H158.688V44.6781L161.775 41.5906L163.438 43.3125L157.5 49.25Z", fill: "white" }),
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("filter", { id: "filter0_d_1725_112955", x: "0", y: "0", width: "220", height: "100", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
        /* @__PURE__ */ jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
        /* @__PURE__ */ jsx("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
        /* @__PURE__ */ jsx("feOffset", { dy: "4" }),
        /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "10" }),
        /* @__PURE__ */ jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0901961 0 0 0 0 0.498039 0 0 0 0 0.980392 0 0 0 0.47 0" }),
        /* @__PURE__ */ jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1725_112955" }),
        /* @__PURE__ */ jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1725_112955", result: "shape" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1725_112955", x1: "-52.9231", y1: "46", x2: "200", y2: "46", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
        /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
      ] })
    ] })
  ] });
};
const DeleteSvg = () => {
  useSkin();
  return /* @__PURE__ */ jsxs("svg", { width: "220", height: "100", viewBox: "0 0 220 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("g", { filter: "url(#filter0_d_1690_113907)", children: /* @__PURE__ */ jsx("rect", { x: "20", y: "16", width: "180", height: "60", rx: "20", fill: "url(#paint0_linear_1690_113907)" }) }),
    /* @__PURE__ */ jsx("path", { d: "M63.19 53V40.76H66.964C67.61 40.76 68.1257 40.7855 68.511 40.8365C69.429 40.9555 70.211 41.2955 70.857 41.8565C71.503 42.4118 71.9903 43.1258 72.319 43.9985C72.6477 44.8655 72.812 45.826 72.812 46.88C72.812 47.9397 72.6477 48.9058 72.319 49.7785C71.9903 50.6455 71.503 51.3567 70.857 51.912C70.211 52.4673 69.429 52.8045 68.511 52.9235C68.1313 52.9745 67.6157 53 66.964 53H63.19ZM66.964 51.555C67.5873 51.555 68.0605 51.5238 68.3835 51.4615C69.3355 51.2858 70.0438 50.7815 70.5085 49.9485C70.9732 49.1155 71.2055 48.0927 71.2055 46.88C71.2055 45.656 70.9703 44.6303 70.5 43.803C70.0353 42.97 69.3298 42.4685 68.3835 42.2985C68.0605 42.2362 67.5873 42.205 66.964 42.205H64.7455V51.555H66.964ZM76.3048 48.835C76.3671 49.7927 76.6363 50.5293 77.1123 51.045C77.594 51.5607 78.257 51.8185 79.1013 51.8185C79.702 51.8185 80.2261 51.6797 80.6738 51.402C81.1271 51.1243 81.4813 50.7248 81.7363 50.2035L83.1898 50.705C82.8328 51.5097 82.2973 52.1358 81.5833 52.5835C80.8693 53.0312 80.0646 53.255 79.1693 53.255C78.274 53.255 77.4863 53.0567 76.8063 52.66C76.132 52.2633 75.6078 51.7023 75.2338 50.977C74.8655 50.2517 74.6813 49.4158 74.6813 48.4695C74.6813 47.4778 74.8626 46.6137 75.2253 45.877C75.5936 45.1347 76.1093 44.5652 76.7723 44.1685C77.441 43.7662 78.2173 43.565 79.1013 43.565C79.9796 43.565 80.7361 43.7633 81.3708 44.16C82.0111 44.551 82.5013 45.1148 82.8413 45.8515C83.1813 46.5825 83.3513 47.4523 83.3513 48.461C83.3513 48.6253 83.3485 48.75 83.3428 48.835H76.3048ZM79.1523 44.925C78.3306 44.925 77.6818 45.1545 77.2058 45.6135C76.7298 46.0725 76.438 46.7412 76.3303 47.6195H81.7703C81.5833 45.8232 80.7106 44.925 79.1523 44.925ZM87.3482 53H85.8352V40.505H87.3482V53ZM91.4421 48.835C91.5045 49.7927 91.7736 50.5293 92.2496 51.045C92.7313 51.5607 93.3943 51.8185 94.2386 51.8185C94.8393 51.8185 95.3635 51.6797 95.8111 51.402C96.2645 51.1243 96.6186 50.7248 96.8736 50.2035L98.3271 50.705C97.9701 51.5097 97.4346 52.1358 96.7206 52.5835C96.0066 53.0312 95.202 53.255 94.3066 53.255C93.4113 53.255 92.6236 53.0567 91.9436 52.66C91.2693 52.2633 90.7451 51.7023 90.3711 50.977C90.0028 50.2517 89.8186 49.4158 89.8186 48.4695C89.8186 47.4778 90 46.6137 90.3626 45.877C90.731 45.1347 91.2466 44.5652 91.9096 44.1685C92.5783 43.7662 93.3546 43.565 94.2386 43.565C95.117 43.565 95.8735 43.7633 96.5081 44.16C97.1485 44.551 97.6386 45.1148 97.9786 45.8515C98.3186 46.5825 98.4886 47.4523 98.4886 48.461C98.4886 48.6253 98.4858 48.75 98.4801 48.835H91.4421ZM94.2896 44.925C93.468 44.925 92.8191 45.1545 92.3431 45.6135C91.8671 46.0725 91.5753 46.7412 91.4676 47.6195H96.9076C96.7206 45.8232 95.848 44.925 94.2896 44.925ZM103.157 45.0695V49.464V49.957C103.157 50.246 103.168 50.4783 103.191 50.654C103.214 50.8297 103.265 50.9827 103.344 51.113C103.48 51.3567 103.673 51.5323 103.922 51.64C104.177 51.7477 104.489 51.8015 104.857 51.8015C105.123 51.8015 105.48 51.7675 105.928 51.6995V53C105.458 53.0963 105.004 53.1445 104.568 53.1445C103.962 53.1445 103.429 53.0453 102.97 52.847C102.517 52.643 102.18 52.3257 101.959 51.895C101.828 51.64 101.743 51.3793 101.704 51.113C101.664 50.8467 101.644 50.5152 101.644 50.1185V49.532V45.0695H99.7826V43.82H101.644V41.27H103.157V43.82H105.928V45.0695H103.157ZM108.954 48.835C109.016 49.7927 109.285 50.5293 109.761 51.045C110.243 51.5607 110.906 51.8185 111.75 51.8185C112.351 51.8185 112.875 51.6797 113.323 51.402C113.776 51.1243 114.13 50.7248 114.385 50.2035L115.839 50.705C115.482 51.5097 114.946 52.1358 114.232 52.5835C113.518 53.0312 112.713 53.255 111.818 53.255C110.923 53.255 110.135 53.0567 109.455 52.66C108.781 52.2633 108.257 51.7023 107.883 50.977C107.514 50.2517 107.33 49.4158 107.33 48.4695C107.33 47.4778 107.511 46.6137 107.874 45.877C108.242 45.1347 108.758 44.5652 109.421 44.1685C110.09 43.7662 110.866 43.565 111.75 43.565C112.628 43.565 113.385 43.7633 114.02 44.16C114.66 44.551 115.15 45.1148 115.49 45.8515C115.83 46.5825 116 47.4523 116 48.461C116 48.6253 115.997 48.75 115.992 48.835H108.954ZM111.801 44.925C110.979 44.925 110.331 45.1545 109.855 45.6135C109.379 46.0725 109.087 46.7412 108.979 47.6195H114.419C114.232 45.8232 113.359 44.925 111.801 44.925Z", fill: "white" }),
    /* @__PURE__ */ jsx("path", { d: "M143 55C142.45 55 141.979 54.804 141.587 54.412C141.195 54.02 140.999 53.5493 141 53V40H140V38H145V37H151V38H156V40H155V53C155 53.55 154.804 54.021 154.412 54.413C154.02 54.805 153.549 55.0007 153 55H143ZM153 40H143V53H153V40ZM145 51H147V42H145V51ZM149 51H151V42H149V51Z", fill: "white" }),
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("filter", { id: "filter0_d_1690_113907", x: "0", y: "0", width: "220", height: "100", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
        /* @__PURE__ */ jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
        /* @__PURE__ */ jsx("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
        /* @__PURE__ */ jsx("feOffset", { dy: "4" }),
        /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "10" }),
        /* @__PURE__ */ jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0901961 0 0 0 0 0.498039 0 0 0 0 0.980392 0 0 0 0.47 0" }),
        /* @__PURE__ */ jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1690_113907" }),
        /* @__PURE__ */ jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1690_113907", result: "shape" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1690_113907", x1: "-52.9231", y1: "46", x2: "200", y2: "46", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ jsx("stop", { stopColor: "#CE2245" }),
        /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#FE315A" })
      ] })
    ] })
  ] });
};
function WarningModal(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { className, toggle, modal, id, modalTextHeader } = props;
  const deleteDoc = () => {
    if (id !== null) {
      let data = {
        id,
        navigate
      };
      dispatch(deleteDocument(data));
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Modal,
    {
      style: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" },
      isOpen: modal,
      modalTransition: { timeout: 500 },
      backdropTransition: { timeout: 100 },
      toggle,
      className,
      children: /* @__PURE__ */ jsxs("div", { className: "custom-modal-body", style: { backgroundColor: "white", padding: "20px 30px", borderRadius: "20px" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "modal-warning-text", style: { marginTop: "20px" }, children: modalTextHeader }),
        /* @__PURE__ */ jsxs("div", { className: "modal-warning-buttons", style: { marginTop: "20px", display: "flex", gap: "10px", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ jsx(Button, { style: { padding: "15px 30px", borderRadius: "10px" }, color: "danger", onClick: () => deleteDoc(), children: "Yes" }),
          /* @__PURE__ */ jsx(Button, { style: { padding: "15px 30px", borderRadius: "10px" }, color: "secondary", onClick: toggle, children: "No" })
        ] })
      ] })
    }
  ) });
}
WarningModal.propTypes = {
  className: propTypes.exports.string,
  toggle: propTypes.exports.toggle,
  id: propTypes.exports.id,
  modal: propTypes.exports.modal,
  modalTextHeader: propTypes.exports.modalTextHeader
};
const EditDoc = () => {
  useNavigate();
  useDispatch();
  const location = useLocation();
  const [data, setData, dataRef] = dist();
  const [updatedData, setUpdatedData, UpdatedDataRef] = dist();
  dist(false);
  const [loader, setLoader] = dist(false);
  dist("");
  const [modal, setModal] = dist(false);
  const toggle = () => setModal(!modal);
  const modalTextHeader = "Are you sure want to delete this document?";
  react.exports.useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setLoader(true);
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    try {
      let response = await axios.get(`${Domain}/document/${location.state.id}`, axiosConfig);
      setData(response.data.document);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      if (error.response.data.message) {
        _t((t) => /* @__PURE__ */ jsxs("div", { className: "toast-body", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(dangerSvg, {}) }),
          /* @__PURE__ */ jsx("div", { className: "toast-message", children: error.response.data.message }),
          /* @__PURE__ */ jsx("div", { className: "toast-button-container", children: /* @__PURE__ */ jsx("button", { className: "toast-button", onClick: () => _t.dismiss(t.id), children: /* @__PURE__ */ jsx(cancelSvg, {}) }) })
        ] }));
      } else {
        setLoader(false);
        console.log(error.message);
      }
    }
  }
  const onGetData = (data2) => {
    setUpdatedData(data2);
  };
  const copyToClipboard = (data2) => {
    const tempElement = document.createElement("textarea");
    tempElement.value = data2;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    let error = false;
    let newMessage = "Text is copied to clipboard";
    ReactToast({ message: newMessage, error });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(WarningModal, { toggle, setModal, modal, id: location.state.id, modalTextHeader }),
    /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
        /* @__PURE__ */ jsx(DocumentSvg, {}),
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "View Document", data: [{ title: "Document", link: "/document" }, { title: "View Document", link: "/edit_document" }] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: loader === true ? /* @__PURE__ */ jsx(ComponentSpinner, { style: { height: "2rem", width: "2rem" } }) : /* @__PURE__ */ jsx(Row, { lg: 12, children: /* @__PURE__ */ jsxs(Col, { className: "h-100", children: [
        /* @__PURE__ */ jsx("div", { className: "h-100 custom-card-5 dark-theme-custom-card-5", children: /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("div", { className: "", children: dataRef.current ? /* @__PURE__ */ jsx(
          "p",
          {
            onChange: (e) => onGetData(e.target.value),
            rows: "12",
            className: "w-100 h-100 p-3",
            children: dataRef.current.response
          }
        ) : null }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex mt-3", children: [
          /* @__PURE__ */ jsx("div", { onClick: () => copyToClipboard(dataRef.current.response), className: "cursor-pointer", children: /* @__PURE__ */ jsx(
            DownloadSvg,
            {
              style: { fontSize: "1.5rem" }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { onClick: () => toggle(), className: "cursor-pointer", children: /* @__PURE__ */ jsx(
            DeleteSvg,
            {
              style: { fontSize: "1.5rem" }
            }
          ) })
        ] })
      ] }) }) })
    ] })
  ] });
};
export {
  EditDoc as default
};
