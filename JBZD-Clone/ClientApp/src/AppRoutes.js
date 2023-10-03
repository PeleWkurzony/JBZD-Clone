import { Home } from "./components/Home";
import { ToAcceptPostPage } from "./components/ToAcceptPostPage";
import { RandomPostPage } from "./components/RandomPostPage";
import { TermsOfService } from "./components/TermsOfService";
import { Contact } from "./components/Contact";
import { Changelog } from "./components/Changelog";
import { FAQ } from "./components/FAQ";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: "/to-accept",
      element: <ToAcceptPostPage />
  },
  {
      path: "/random",
      element: <RandomPostPage />
  },
  {
      path: "/terms-of-service",
      element: <TermsOfService />
  },
  {
      path: "/contact",
      element: <Contact />
  },
  {
      path: "/changelog",
      element: <Changelog />
  },
  {
      path: "/faq",
      element: <FAQ />
  }
];

export default AppRoutes;
