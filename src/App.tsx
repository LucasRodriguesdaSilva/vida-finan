
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Goals from "./pages/Goals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/income" element={<div className="p-8 text-center text-muted-foreground">Página de Receitas em desenvolvimento</div>} />
            <Route path="/expenses" element={<div className="p-8 text-center text-muted-foreground">Página de Gastos em desenvolvimento</div>} />
            <Route path="/investments" element={<div className="p-8 text-center text-muted-foreground">Página de Investimentos em desenvolvimento</div>} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/analytics" element={<div className="p-8 text-center text-muted-foreground">Página de Analytics em desenvolvimento</div>} />
            <Route path="/settings" element={<div className="p-8 text-center text-muted-foreground">Página de Configurações em desenvolvimento</div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
