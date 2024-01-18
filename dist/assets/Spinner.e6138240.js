import { r as react, j as jsx, c as classnames } from "./index.f98d5771.js";
import { $ as useBootstrapPrefix } from "./App.f8a056f9.js";
const Spinner = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  variant,
  animation = "border",
  size,
  as: Component = "div",
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classnames(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = "Spinner";
const Spinner$1 = Spinner;
export {
  Spinner$1 as S
};
