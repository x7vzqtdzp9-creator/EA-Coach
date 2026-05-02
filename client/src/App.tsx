import Coaching from "./pages/Coaching";
import CoachingIndividuel from "./pages/CoachingIndividuel";
import AccompagnementSolidaire from "./pages/AccompagnementSolidaire";
import CoachingManagerNantes from "./pages/coaching-manager-nantes";
import CoachingEquipeNantes from "./pages/coaching-equipe-nantes";
import CoachingOrganisationNantes from "./pages/coaching-organisation-nantes";
import Services from "./pages/Services";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminBlog from "./pages/AdminBlog";
import AdminUsers from "./pages/AdminUsers";
import AdminLogin from "./pages/AdminLogin";
import AdminSetup from "./pages/AdminSetup";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />

      <Route path={"/coaching-manager-nantes"} component={CoachingManagerNantes} />
      <Route path={"/coaching-equipe-nantes"} component={CoachingEquipeNantes} />
      <Route path={"/coaching-organisation-nantes"} component={CoachingOrganisationNantes} />

      <Route path={"/coaching-professionnel"} component={Coaching} />
      <Route path={"/coaching-individuel"} component={CoachingIndividuel} />
      <Route path={"/accompagnement-solidaire"} component={AccompagnementSolidaire} />

      <Route path={"/a-propos"} component={APropos} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />

      <Route path={"/admin/blog"} component={AdminBlog} />
      <Route path={"/admin/users"} component={AdminUsers} />
      <Route path={"/admin/login"} component={AdminLogin} />
      <Route path={"/admin/setup"} component={AdminSetup} />

      <Route path={"/mentions-legales"} component={MentionsLegales} />
      <Route path={"/politique-de-confidentialite"} component={PolitiqueConfidentialite} />
      <Route path={"/404"} component={NotFound} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;