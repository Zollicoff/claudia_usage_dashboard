import { useState, useEffect } from "react";
import { UsageDashboard } from "@/components/UsageDashboard";
import { api } from "@/lib/api";
import { invoke } from "@tauri-apps/api/core";

/**
 * AppContent component - Simple usage dashboard app
 */
function AppContent() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  // Initialize cache and check if data is ready periodically
  useEffect(() => {
    // Initialize the cache in the background
    invoke("init_usage_cache").catch(console.error);

    let interval: ReturnType<typeof setInterval> | null = null;

    const checkDataReady = async () => {
      try {
        // Quick test call to see if data is cached
        await api.getUsageStats();
        setDataReady(true);
        // Stop polling once data is ready
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      } catch {
        // Data not ready yet
      }
    };

    // Check every 2 seconds if data is ready
    interval = setInterval(checkDataReady, 2000);
    checkDataReady(); // Check immediately

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleViewDashboard = async () => {
    setIsLoading(true);
    try {
      // This should be fast due to caching, but show loading just in case
      await new Promise(resolve => setTimeout(resolve, 500)); // Min loading time for UX
      setShowWelcome(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          {/* Spinning circle */}
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-white">Loading Usage Data</h2>
            <p className="text-sm text-gray-300">
              {dataReady ? "Almost ready..." : "Processing your Claude Code sessions..."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <div className="h-screen bg-background flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Claudia Usage Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your Claude Code usage, costs, and analytics
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This dashboard analyzes your Claude Code session logs from <code>~/.claude/projects/</code>
            </p>
            
            {/* Status indicator */}
            <div className="flex items-center justify-center space-x-2 py-2">
              <div className={`w-2 h-2 rounded-full ${dataReady ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`}></div>
              <span className="text-xs text-muted-foreground">
                {dataReady ? "Data ready" : "Loading data in background..."}
              </span>
            </div>
            
            <button
              onClick={handleViewDashboard}
              disabled={isLoading}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "View Usage Dashboard"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <UsageDashboard onBack={() => setShowWelcome(true)} />
  );
}

/**
 * Main App component - Simple usage dashboard
 */
function App() {
  return <AppContent />;
}

export default App;
