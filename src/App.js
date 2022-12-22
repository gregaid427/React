import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Nav from "./Components/NavBar/nav.component";
import JobSeekerSignup from "./Pages/Auth/job-seeker-signup.page";
import CompanySignup from "./Pages/Auth/company-signup.page";
import Login from "./Pages/Auth/login.page";
import Home from "./Pages/Home/home.page";
import JobDetails from "./Pages/Jobs/job-details.page";

import CompanyList from "./Pages/Company/browse-companies.pages";
import CompanyDetails from "./Pages/Company/company-details.pages";
import EmployeeDashboard from "./Pages/Candidates/employee-dashboard.pages";
import CompanyDashboard from "./Pages/Candidates/company-dashboard.pages";
// import ManageResumeDashboard from "./Pages/Candidates/manage-resume.pages";
// import MyProfilePage from "./Pages/Account/my-profile.pages";
// import MyApplicationsPage from "./Pages/Candidates/my-applications.pages";
import CompanyGuide from "./Pages/Guide/company-guide.pages";
import EmployeeGuide from "./Pages/Guide/employee-guide.pages";
import BrowseJobs from "./Pages/Jobs/browse-jobs.pages";
import JobsPostedByCompany from "./Pages/Company/jobs-posted-by-company.pages";
import BrowseCVs from "./Pages/Company/browse-cvs.pages";
import MessageList from "./Pages/Account/messages.pages";
import PostJobsByCompany from "./Pages/Company/post-jobs-by-company.pages";
import JobApplications from "./Pages/Candidates/applications.pages";
import UploadCV from "./Pages/Candidates/upload-cv.pages";
import ViewProfileDashboard from "./Pages/Candidates/view-profile-dashboard.pages";
import PlansAndPricingIndividual from "./Pages/Guide/plans-and-pricing.pages";
import PlansAndPricingCompanies from "./Pages/Guide/plans-and-pricing-companies.pages";
import SchoolsList from "./Pages/Company/browse-schools.pages";
import BrowseSchoolApplicantCVs from "./Pages/Company/browse-applicants.pages";
import ForgotPassword from "./Pages/Auth/forgot-password.page";
import ResetPassword from "./Pages/Auth/reset-password.page";
// import { UserProvider } from "./Context/auth.context";
// import JobsProvider from "./Context/jobs.context";
import CompanyFaqs from "./Pages/faqs/company-faqs.pages";
import JobseekerFaqs from "./Pages/faqs/job-seeker-faqs.pages";
import Applicantsresponses from "./Pages/Company/applicants-responses.pages";
import DetailedResume from "./Pages/Candidates/detailed-resume.pages";
import PostedJobQuestions from "./Pages/Company/posted-job-questions.pages";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BrowseSchoolGradYears from "./Pages/Candidates/browse-school-grad.pages";
import store from "./redux/store/store";
import { Provider } from "react-redux";



function App() {
  // use state
  const [showNavBar, setShowNavBar] = useState(true);
  return (
    <>
      <Router>
      <ToastContainer />
   
      <Provider store={ store   }>
            <Routes>
              <Route
                path="/"
                element={<Home setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/login"
                element={<Login setShowNavBar={setShowNavBar} />}
              />{" "}
              <Route
                path="/forgot-password"
                element={<ForgotPassword setShowNavBar={setShowNavBar} />}
              />{" "}
              <Route
                path="/reset-password"
                element={<ResetPassword setShowNavBar={setShowNavBar} />}
              />{" "}
              <Route
                path="/company-signup"
                element={<CompanySignup setShowNavBar={setShowNavBar} />}
              />{" "}
              <Route
                path="/job-seeker-signup"
                element={<JobSeekerSignup setShowNavBar={setShowNavBar} />}
              />{" "}
                <Route
                path="/browse-school-grad"
                element={<BrowseSchoolGradYears setShowNavBar={setShowNavBar} />}
              />{" "}
              <Route
                path="/browse-jobs"
                element={<BrowseJobs setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/browse-schools"
                element={<SchoolsList setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/company-guide"
                element={<CompanyGuide setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/detailed-resume"
                element={<DetailedResume setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/plans-and-pricing"
                element={
                  <PlansAndPricingIndividual setShowNavBar={setShowNavBar} />
                }
              />
              <Route
                path="/messages"
                element={<MessageList setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/job-seeker-faq"
                element={<JobseekerFaqs setShowNavBar={setShowNavBar} />}
              />{" "}
              {/* Company */}
              <Route
                path="/company-faq"
                element={<CompanyFaqs setShowNavBar={setShowNavBar} />}
              />{" "}
              <Route
                path="/employee-dashboard"
                element={<EmployeeDashboard setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/upload-cvs"
                element={<UploadCV setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/view-profile"
                element={<ViewProfileDashboard setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/employee-guide"
                element={<EmployeeGuide setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/post-a-job"
                element={<PostJobsByCompany setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/plans-and-pricing-companies"
                element={
                  <PlansAndPricingCompanies setShowNavBar={setShowNavBar} />
                }
              />
              <Route
                path="/company-dashboard"
                element={<CompanyDashboard setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/company-jobs"
                element={<JobsPostedByCompany setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/browse-applicants"
                element={
                  <BrowseSchoolApplicantCVs setShowNavBar={setShowNavBar} />
                }
              />
              <Route
                path="/job-applications"
                element={<JobApplications setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/applicants-responses"
                element={<Applicantsresponses setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/browse-companies"
                element={<CompanyList setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/company-details"
                element={<CompanyDetails setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/job-details/:jobId/:companyId"
                element={<JobDetails setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/posted-job-questions"
                element={<PostedJobQuestions setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="/cvs"
                element={<BrowseCVs setShowNavBar={setShowNavBar} />}
              />
              <Route
                path="*"
                element={<Home setShowNavBar={setShowNavBar} />}
              />
            </Routes>
            </Provider>
      </Router>
    </>
  );
}

export default App;
