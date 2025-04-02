
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/P4AC" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
