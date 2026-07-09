import { useNavigate, useLocation } from "react-router-dom";
import { FaCommentDots, FaChartPie } from "react-icons/fa";

function BottomNavbar() {

    const navigate = useNavigate();

    const location = useLocation();

    return (

        <div className="bottom-navbar">

            <button
                className={
                    location.pathname === "/"
                        ? "nav-button active-nav"
                        : "nav-button"
                }
                onClick={() => navigate("/")}
            >
                <FaCommentDots />

                <span>Feedback</span>

            </button>

            <button
                className={
                    location.pathname === "/dashboard"
                        ? "nav-button active-nav"
                        : "nav-button"
                }
                onClick={() => navigate("/dashboard")}
            >
                <FaChartPie />

                <span>Dashboard</span>

            </button>

        </div>

    );

}

export default BottomNavbar;