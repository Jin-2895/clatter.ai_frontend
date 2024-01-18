import { r as react, W as useNavigate, z as useSkin, j as jsx, F as Fragment, x as jsxs, U as Link, B as Button, aq as n } from "./index.f98d5771.js";
import { c as create, a as create$1, u as useFormik, C as Card, b as CardBody, d as Clatterdark, e as ClatterLogo, f as CardTitle, g as CardText, F as Form, L as Label, I as Input, h as FormFeedback, i as InputPasswordToggle, S as Spinner, j as authPosterForDarkLayout, k as ImgeLogo } from "./App.f8a056f9.js";
import { G as GoggleWithLogin, L as LoginApi } from "./GoggleWithLogin.e02c87eb.js";
const LoginUserValidationSchema = create({
  email: create$1().email("Enter a valid email").required("Email is required"),
  password: create$1().min(8, "Password must be at least 8 characters").required("Password is required")
});
const Login = () => {
  const [loginError, setLoginError] = react.exports.useState(null);
  const navigate = useNavigate();
  const { skin, setSkin } = useSkin();
  const [state, setState] = react.exports.useState({
    userData: {},
    loadingUserData: false,
    formikValues: {
      userName: "",
      email: "",
      password: ""
    }
  });
  const handleSubmit = async (values) => {
    setState({ ...state, loadingUserData: true });
    const res = await LoginApi.login(values);
    if (res.success) {
      setState({ ...state, loadingUserData: false });
      location.replace("/");
    } else {
      navigate("/account-banned");
      setState({ ...state, loadingUserData: false });
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginUserValidationSchema,
    onSubmit: handleSubmit
  });
  const pull_data = (data) => {
    n.error("Google login failed");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "auth-wrapper login-page auth-basic px-2", children: /* @__PURE__ */ jsx("div", { className: "auth-inner my-2", children: /* @__PURE__ */ jsxs("div", { className: "login-main-dev", children: [
    /* @__PURE__ */ jsx(Card, { className: "mb-0 login-content", children: /* @__PURE__ */ jsxs(CardBody, { className: "form-body", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          className: "brand-logo",
          to: "/",
          onClick: (e) => e.preventDefault(),
          children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "brand-full-logo",
              style: { height: "46px", width: "150px" },
              src: skin === "dark" ? Clatterdark : ClatterLogo,
              alt: "logo"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(CardTitle, { tag: "h4", className: "mb-1", children: "Welcome to Clatter! \u{1F44B}" }),
      /* @__PURE__ */ jsx(CardText, { className: "mb-2", children: "Please sign-in to your account and start the adventure" }),
      /* @__PURE__ */ jsxs(Form, { className: "auth-login-form mt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(
            Label,
            {
              className: "form-label",
              for: "login-email",
              placeholder: "Enter Your email",
              autoFocus: true,
              children: "Email"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "email",
              name: "email",
              id: "login-email",
              placeholder: "john@example.com",
              value: formik.values.email,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              invalid: formik.touched.email && formik.errors.email ? true : false
            }
          ),
          formik.touched.email && formik.errors.email ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.email }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "login-password", children: "Password" }),
          /* @__PURE__ */ jsx(
            InputPasswordToggle,
            {
              name: "password",
              className: "input-group-merge",
              id: "login-password",
              value: formik.values.password,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              invalid: formik.touched.password && formik.errors.password ? true : false
            }
          ),
          formik.touched.password && formik.errors.password ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.password }) : null
        ] }),
        loginError !== null && /* @__PURE__ */ jsx("div", { className: "mb-1", children: /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: loginError }) }),
        /* @__PURE__ */ jsxs("div", { className: "form-check mb-1", children: [
          /* @__PURE__ */ jsx(Input, { type: "checkbox", id: "remember-me" }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between", children: [
            /* @__PURE__ */ jsx(Label, { className: "form-check-label", for: "remember-me", children: "Remember Me" }),
            /* @__PURE__ */ jsx(Link, { to: "/forgot-password", children: /* @__PURE__ */ jsx("small", { className: "d-flex justify-content-start", children: "Forgot Password?" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            color: "primary",
            block: true,
            disabled: state.loadingUserData,
            onClick: () => formik.submitForm(),
            children: [
              "Sign in",
              state.loadingUserData && /* @__PURE__ */ jsx("spam", { style: { marginLeft: "10px" }, children: /* @__PURE__ */ jsx(Spinner, { className: "pl-200", size: "sm", color: "light" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-center mt-2", children: [
        /* @__PURE__ */ jsx("span", { className: "me-25", children: "New on our platform?" }),
        /* @__PURE__ */ jsx(Link, { to: "/register", children: /* @__PURE__ */ jsx("span", { children: "Create an account" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divider my-2", children: /* @__PURE__ */ jsx("div", { className: "divider-text", children: "or" }) }),
      /* @__PURE__ */ jsx("div", { className: "auth-footer-btn d-flex justify-content-center", children: /* @__PURE__ */ jsx(
        GoggleWithLogin,
        {
          func: pull_data,
          buttonText: "Login with Google"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(Card, { className: "m-0 img-container", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "img",
        src: skin === "dark" ? authPosterForDarkLayout : ImgeLogo
      }
    ) })
  ] }) }) }) });
};
export {
  LoginUserValidationSchema,
  Login as default
};
