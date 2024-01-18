var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { G as GenIcon } from "./iconBase.b81e1af8.js";
import { l as axiosInstace, M as StateManagedSelect$1, O as components } from "./App.f8a056f9.js";
import { j as jsx, x as jsxs } from "./index.f98d5771.js";
function BsSaveFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z" } }] })(props);
}
class CreationHubApi {
}
__publicField(CreationHubApi, "saveDocumentCreation", async (id) => {
  var _a, _b;
  try {
    const res = await axiosInstace.post("/document", { id });
    if (res.data.status == 1) {
      return {
        error: false,
        success: true,
        data: (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.data
      };
    }
    return {
      error: false,
      success: false,
      data: (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.data
    };
  } catch (err) {
    return {
      error: true,
      errors: err
    };
  }
});
const english = "/assets/english.3051b9d5.png";
const spanish = "/assets/spain.a63b68be.png";
const italy = "data:image/png;base64,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";
const france = "data:image/png;base64,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";
let options = [
  { label: "English", value: "english", icon: english },
  { label: "Spanish", value: "spanish", icon: spanish },
  { label: "Italian", value: "italian", icon: italy },
  { label: "French", value: "french", icon: france }
];
const { Option } = components;
const IconOption = (props) => /* @__PURE__ */ jsxs(Option, { ...props, children: [
  /* @__PURE__ */ jsx(
    "img",
    {
      className: "px-1",
      src: props.data.icon,
      style: { width: 55 },
      alt: props.data.label
    }
  ),
  props.data.label
] });
const SelectLanguage = ({ setLanguage }) => {
  const handleChange = (value) => {
    if (!value) {
      return;
    }
    setLanguage(value.value);
  };
  return /* @__PURE__ */ jsx(
    StateManagedSelect$1,
    {
      menuPlacement: "bottom",
      className: "react-select dark-react-select",
      classNamePrefix: "select",
      name: "language",
      id: "language",
      options,
      components: { Option: IconOption },
      onChange: (value) => handleChange(value),
      placeholder: "Select Language",
      isClearable: true
    }
  );
};
export {
  BsSaveFill as B,
  CreationHubApi as C,
  SelectLanguage as S
};