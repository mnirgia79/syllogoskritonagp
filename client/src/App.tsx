import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Events from "@/pages/events";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Courses from "@/pages/courses";
import History from "@/pages/history";
import Council from "@/pages/council";
import Statute from "@/pages/statute";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/courses" component={Courses} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/history" component={History} />
      <Route path="/council" component={Council} />
      <Route path="/statute" component={Statute} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
