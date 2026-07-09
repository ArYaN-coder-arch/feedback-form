import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeedbackPage from "./pages/FeedbackPage";
import Dashboard from "./pages/DashboardPage";
import BottomNavbar from "./components/BottomNavBar";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <div className="main-content">
          <Routes>
            <Route path="/" element={<FeedbackPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <BottomNavbar />

      </div>
    </BrowserRouter>
  );
}

export default App;