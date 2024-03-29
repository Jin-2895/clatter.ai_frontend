// ** React Imports

import { Fragment, lazy } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";
// import ProtectedRoute from "./ProtectedRoute";
// ** Utils
import { isObjEmpty } from "@utils";
// import { element } from "prop-types";
import AccountSettings from "../../views/account-settings/AccountSettings";
import CreationHub from "../../views/creationhub/CreationHub";
import { Affliate } from "../../views/account-settings/Affliate";
import Subscribe from "../../views/subscribe";
import Canceled from "../../views/Cancel";
import { useEffect } from "react";
import { AuthHelpers } from "../../auth/auth";
import { getUserData } from "../../utility/Utils";


const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Clatter AI";

// ** Default Route
const DefaultRoute = "/home";

const Home = lazy(() => import("../../views/Home"));
const CreateVideo = lazy(() => import("../../views/createVideo/CreateVideo"));
const PictureToVideo = lazy(() => import("../../views/createVideo/pictureToVideo/PictureToVideo"))
const TextToVideo = lazy(() => import("../../views/createVideo/textToVideo/TextToVideo"))
const ShortVideo = lazy(() => import("../../views/createVideo/shortVideo/ShortVideo"))
const ClippedVideo = lazy(() => import("../../views/createVideo/shortVideo/ClippedVideo"))
const Gallery = lazy(() => import("../../views/CreateVideo/Gallery/Gallery"))
const PictureGallery = lazy(() => import("../../views/CreateVideo/Gallery/PictureToVideoGallery"))
const TextGallery = lazy(() => import("../../views/CreateVideo/Gallery/TextToVideoGallery"))
const ShortGallery = lazy(() => import("../../views/CreateVideo/Gallery/ShortClipsGallery"))
const ClipsGallery = lazy(() => import("../../views/CreateVideo/Gallery/ClipsGallery"))


const Document = lazy(() => import("../../views/document/document.js"));
const EditDoc = lazy(() => import("../../views/document/EditDoc.js"));
const Instagram = lazy(() =>
  import("../../views/creationhub/instagram/Instagram.js")
);
const Youtube = lazy(() =>
  import("../../views/creationhub/youtube/Youtube.js")
);
const Facebook = lazy(() =>
  import("../../views/creationhub/facebook/Facebook.js")
);
const Twitter = lazy(() =>
  import("../../views/creationhub/twitter/Twitter.js")
);
const Blog = lazy(() => import("../../views/creationhub/blog/Blog.js"));
const Tiktok = lazy(() => import("../../views/creationhub/tiktok/Tiktok.js"));
const Ecommerce = lazy(() =>
  import("../../views/creationhub/ecommerce/Ecommerce.js")
);
const Funnel = lazy(() => import("../../views/creationhub/funnel/Funnel.js"));
const Command = lazy(() =>
  import("../../views/creationhub/command/Command.js")
);

const Strategy = lazy(() => import("../../views/creationhub/funnel/Strategy.js"));
const Copy = lazy(() => import("../../views/creationhub/funnel/Copy.js"));
const ICP = lazy(() => import("../../views/creationhub/instagram/ICP.js"));
const IB = lazy(() => import("../../views/creationhub/instagram/IB.js"));
const IS = lazy(() => import("../../views/creationhub/instagram/IS.js"));
const IPI = lazy(() => import("../../views/creationhub/instagram/IPI.js"));
const YS = lazy(() => import("../../views/creationhub/youtube/YS.js"));
const YT = lazy(() => import("../../views/creationhub/youtube/YT.js"));
const YTI = lazy(() => import("../../views/creationhub/youtube/YTI.js"));
const FAC = lazy(() => import("../../views/creationhub/facebook/FAC.js"));
const TM = lazy(() => import("../../views/creationhub/twitter/TM.js"));
const BP = lazy(() => import("../../views/creationhub/blog/BP.js"));
const BPTI = lazy(() => import("../../views/creationhub/blog/BPTI.js"));
const TCV = lazy(() => import("../../views/creationhub/tiktok/TCV.js"));
const TS = lazy(() => import("../../views/creationhub/tiktok/TS.js"));
const TVTI = lazy(() => import("../../views/creationhub/tiktok/TVTI.js"));
const PD = lazy(() => import("../../views/creationhub/ecommerce/PD.js"));
const HC = lazy(() => import("../../views/creationhub/ecommerce/HC.js"));
const Any = lazy(() => import("../../views/creationhub/command/Any.js"));
const Success = lazy(() => import("../../views/Success.js"));

// ** Merge Routes

const Routes = [
  {
    path: "/home",
    protected: true,
    element: <Home />,
  },
  {
    path: "/creationhub",
    element: <CreationHub />,
    protected: true,
  },
  {
    path: "/create-video",
    element: <CreateVideo />,
    protected: true,
  },
  {
    path: "/picture-to-video",
    element: <PictureToVideo />,
    protected: true,
  },
  {
    path: "/text-to-video",
    element: <TextToVideo />,
    protected: true,
  },
  {
    path: "/short-clips",
    element: <ShortVideo />,
    protected: true,
  },
  {
    path: "/clipped-video",
    element: <ClippedVideo />,
    protected: true,
  },
  {
    path: "/document",
    element: <Document />,
    protected: true,
  },
  {
    path: "/edit_document",
    element: <EditDoc />,
    protected: true,
  },
  {
    path: "/settings",
    index: true,
    protected: true,
    element: <AccountSettings />,
  },
  {
    path: "/affiliate",
    index: true,
    protected: true,
    element: <Affliate />,
  },
  {
    path: "/video-gallery",
    element: <Gallery />,
    protected: true,
  },
  {
    path: "/picture-to-video-gallery",
    element: <PictureGallery />,
    protected: true,
  },
  {
    path: "/text-to-video-gallery",
    element: <TextGallery />,
    protected: true,
  },
  {
    path: "/short-clips-gallery",
    element: <ShortGallery />,
    protected: true,
  },
  {
    path: "/short-clips-gallery/:id",
    element: <ClipsGallery />,
    protected: true,
  },
  {
    path: "/instagram",
    element: <Instagram />,
    protected: true,
  },
  {
    path: "/youtube",
    element: <Youtube />,
    protected: true,
  },
  {
    path: "/facebook",
    element: <Facebook />,
    protected: true,
  },
  {
    path: "/twitter",
    element: <Twitter />,
    protected: true,
  },
  {
    path: "/blog",
    element: <Blog />,
    protected: true,
  },
  {
    path: "/tiktok",
    element: <Tiktok />,
    protected: true,
  },
  {
    path: "/ecommerce",
    element: <Ecommerce />,
    protected: true,
  },
  {
    path: "/funnels",
    element: <Funnel />,
    protected: true,
  },
  {
    path: "/command",
    element: <Command />,
    protected: true,
  },
  {
    path: "/instagram_post_caption",
    protected: true,
    element: <ICP />,
  },
  {
    path: "/instagram_bio",
    protected: true,
    element: <IB />,
  },
  {
    path: "/instagram_story",
    protected: true,
    element: <IS />,
  },
  {
    path: "/instagram_post_idea",
    protected: true,
    element: <IPI />,
  },
  {
    path: "/youtube_script",
    protected: true,
    element: <YS />,
  },
  {
    path: "/youtube_title",
    protected: true,
    element: <YT />,
  },
  {
    path: "/youtube_topic_idea",
    protected: true,
    element: <YTI />,
  },

  {
    path: "/facebook_ad_caption",
    protected: true,
    element: <FAC />,
  },
  {
    path: "/twitter_machine",
    protected: true,
    element: <TM />,
  },
  {
    path: "/blog_post",
    protected: true,
    element: <BP />,
  },
  {
    path: "/blog_post_topic_ideas",
    protected: true,
    element: <BPTI />,
  },
  {
    path: "/tiktok_video_caption",
    protected: true,
    element: <TCV />,
  },
  {
    path: "/tiktok_script",
    protected: true,
    element: <TS />,
  },
  {
    path: "/tiktok_video_topic_idea",
    protected: true,
    element: <TVTI />,
  },
  {
    path: "/product_description",
    protected: true,
    element: <PD />,
  },
  {
    path: "/home_copy",
    protected: true,
    element: <HC />,
  },
  {
    path: "/strategy",
    protected: true,
    element: <Strategy />,
  },
  {
    path: "/copy",
    protected: true,
    element: <Copy />,
  },
  {
    path: "/any_commands",
    protected: true,
    element: <Any />,
  },
  {
    path: "/subscribe/:plan",
    element: <Subscribe />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/success",
    element: <Success />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/canceled",
    element: <Canceled />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};



// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];
  const navigate = useNavigate()
  const userData = getUserData()

  useEffect(() => {
    const isLoggedIn = AuthHelpers.isUserLoggedIn();
    if (!isLoggedIn && location.search !== "" && location.pathname !== "/register") {
      const options = {
        pathname: '/register',
        search: location.search,
      };
      navigate(options, { replace: true });
    } else if (!isLoggedIn && location.pathname !== "/login" && location.pathname !== "/forgot-password" && location.pathname !== "/register" && location.pathname !== "/reset-password") {
      location.replace("/login");
      return;
    }
  }, []);


  if (userData?.status === "banned") {
    let filterRoutes = Routes.filter(item => item.status === 'banned');
    filterRoutes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
              LayoutWrapper
              : Fragment;

          if (route.protected) {
            route.element = (
              <Wrapper {...(isBlank === true ? getRouteMeta(route) : {})}>
                <RouteTag route={route}>{route.element}</RouteTag>
              </Wrapper>
            );
          } else {
            route.element = (
              <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                {route.element}
              </Wrapper>
            );
          }
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  } else if (userData?.status === "deactivated") {
    let filterRoutes = Routes.filter(item => item.status === "deactivated")
    filterRoutes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
              LayoutWrapper
              : Fragment;

          if (route.protected) {
            route.element = (
              <Wrapper {...(isBlank === true ? getRouteMeta(route) : {})}>
                <RouteTag route={route}>{route.element}</RouteTag>
              </Wrapper>
            );
          } else {
            route.element = (
              <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                {route.element}
              </Wrapper>
            );
          }
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  } else if (Routes && userData) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
              LayoutWrapper
              : Fragment;

          if (route.protected) {
            route.element = (
              <Wrapper {...(isBlank === true ? getRouteMeta(route) : {})}>
                <RouteTag route={route}>{route.element}</RouteTag>
              </Wrapper>
            );
          } else {
            route.element = (
              <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                {route.element}
              </Wrapper>
            );
          }
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {

  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
