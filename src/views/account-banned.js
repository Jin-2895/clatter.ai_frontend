// ** React Imports
import { Link, useNavigate } from "react-router-dom";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Utils
import { } from "@utils";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/not-authorized.svg";
import illustrationsDark from "@src/assets/images/pages/not-authorized-dark.svg";

// ** Styles
import "@styles/base/pages/page-misc.scss";
import { AuthApi } from "../helpers/api/AuthApi";

const AccountBanned = () => {
  const navigate = useNavigate()
  // ** Hooks
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="misc-wrapper">
      <Link className="brand-logo" to="/">
        <h2 className="brand-text text-primary ms-1">Clatter AI</h2>
      </Link>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <div>
            <h2 className="mb-1">You account is banned by clatter administrator! 🔐</h2>
            <p>Please contact support@clatter.com to know more.</p>
            <Link
              to="/login"
            >
              <Button
                color="primary"
                className="btn-sm-block mb-1"
              >
                Go Back
              </Button>
            </Link>
          </div>

          <img className="img-fluid w-75" src={source} alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default AccountBanned;
