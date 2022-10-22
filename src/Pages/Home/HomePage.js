import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Services from "../../Components/Services/Services";
import TechnoAndLanguage from "../../Components/TechnoAndLanguage/TechnoAndLanguage";
import "./HomePage.css"

function HomePage(){
    return(
        <div className="home-page">
            <NavigationBar className="nav"></NavigationBar>
            
            <HeroSection></HeroSection>
            <Services></Services>
            <TechnoAndLanguage></TechnoAndLanguage>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;