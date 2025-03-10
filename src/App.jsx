import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialMediaCards from "./components/SocialMediaCards";
import VisionMissionCard from "./components/VisionMissionCard";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage/>
      <Footer />
      <SocialMediaCards/>
      <VisionMissionCard/>
    </>
  );
}

export default App;
