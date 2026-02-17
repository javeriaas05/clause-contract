// import { Routes, Route } from "react-router-dom"
// import Homepage from "@/components/app/Homepage"
// import Dashboard from "@/components/app/Dashboard"
// import SmartNotifications from "@/components/app/SmartNotificationSection"
// import TaskManagementCompo from "@/components/app/TaskManagementCompo"
// import IntegrationsHero from "@/components/app/IntegrationsHero"
// import Testimonial from "@/components/app/Testimonial"
// import Loginpage from "@/components/app/Loginpage"
// import Layout from "@/components/pages/Layout"
// import SignupPage from "./components/app/SignupPage"
// import ForgotPasswordForm from "./components/app/ForgotPasswordForm"

// function App() {
//   return (
//       <Routes>
//         {/* Main Routes */}
//         <Route path="/Homepage" element={<Homepage />} />
//         <Route path="/login" element={<Loginpage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/forgot-password" element={<ForgotPasswordForm />} />

//         {/* Dashboard with child routes */}
//         <Route path="/dashboard" element={<Layout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="smart-notifications" element={<SmartNotifications />} />
//           <Route path="task-management" element={<TaskManagementCompo />} />
//           <Route path="integrations" element={<IntegrationsHero />} />
//           <Route path="testimonial" element={<Testimonial />} />
//         </Route>
//       </Routes>
//   )
// }

// export default App




// import { Routes, Route } from "react-router-dom"
// import Homepage from "@/components/app/Homepage"
// import Dashboard from "@/components/app/Dashboard"
// import SmartNotifications from "@/components/app/SmartNotificationSection"
// import TaskManagementCompo from "@/components/app/TaskManagementCompo"
// import IntegrationsHero from "@/components/app/IntegrationsHero"
// import Testimonial from "@/components/app/Testimonial"
// import Loginpage from "@/components/app/Loginpage"
// import Layout from "@/components/pages/Layout"
// import SignupPage from "./components/app/SignupPage"
// import ForgotPasswordForm from "./components/app/ForgotPasswordForm"

// function App() {
//   return (
//     <Routes>
//       {/* ✅ Homepage on root */}
//       <Route path="/" element={<Homepage />} />

//       {/* ✅ Auth pages */}
//       <Route path="/login" element={<Loginpage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/forgot-password" element={<ForgotPasswordForm />} />

//       {/* ✅ Dashboard + nested routes */}
//       <Route path="/dashboard" element={<Layout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="smart-notifications" element={<SmartNotifications />} />
//         <Route path="task-management" element={<TaskManagementCompo />} />
//         <Route path="integrations" element={<IntegrationsHero />} />
//         <Route path="testimonial" element={<Testimonial />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";
import Homepage from "@/components/app/Homepage";
import Dashboard from "@/components/app/Dashboard";
import SmartNotifications from "@/components/app/SmartNotificationSection";
import TaskManagementCompo from "@/components/app/TaskManagementCompo";
import IntegrationsHero from "@/components/app/IntegrationsHero";
import Testimonial from "@/components/app/Testimonial";
import Loginpage from "@/components/app/Loginpage";
import Layout from "@/components/app/pages/Layout";
import SignupPage from "./components/app/SignupPage";
import ForgotPasswordForm from "./components/app/ForgotPasswordForm";

function App() {
  return (
    <Routes>
      {/* Homepage on root */}
      <Route path="/" element={<Homepage />} />

      {/* Auth pages */}
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />

      {/* Dashboard + nested routes */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="smart-notifications" element={<SmartNotifications />} />
        <Route path="task-management" element={<TaskManagementCompo />} />
        <Route path="integrations" element={<IntegrationsHero />} />
        <Route path="testimonial" element={<Testimonial />} />
      </Route>
    </Routes>
  );
}

export default App;