import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import AOS from 'aos';

function Router() {
  const [location] = useLocation();
  
  // Refresh AOS on route changes
  useEffect(() => {
    AOS.refresh();
  }, [location]);
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize AOS animations on mount
  useEffect(() => {
    // This will ensure AOS is re-initialized when components re-render
    AOS.refresh();
    
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh();
      });
    };
  }, []);

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
