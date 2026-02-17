// import { SidebarProvider } from "../ui/sidebar";
// import AppIconsLoop from "./AppIconsLoop";

import Dashboard from "./Dashboard";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Lastsection from "./Lastsection";
// import IntegrationsHero from "./IntegrationsHero";
import SmartNotifications from "./SmartNotificationSection";
import Testimonial from "./Testimonial";

const Homepage = () =>{
    return(

    
    <div>
        <Header />
        <HeroSection />
        <Dashboard />   
        <SmartNotifications />
        {/* <IntegrationsHero />  */}
        <Lastsection />
        <Testimonial />
      
        
        </div>
    )

}

export default Homepage;  




