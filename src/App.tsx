
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { IntentInput } from './components/IntentInput';
import { ReasoningLoader } from './components/ReasoningLoader';
import { PathwayTimeline } from './components/PathwayTimeline';
import { FrameworkSection } from './components/FrameworkSection';
import { PrivacySection } from './components/PrivacySection';
import { Footer } from './components/Footer';
import { analyzeIntent } from './services/aiService';
import { AppState, IntentAnalysis } from './types';

export type PageView = 'home' | 'framework' | 'privacy';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('idle');
  const [analysis, setAnalysis] = useState<IntentAnalysis | null>(null);
  const [activeCountry, setActiveCountry] = useState(0);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const handleAnalyze = useCallback(async (intent: string, metadata: any) => {
    setState('analyzing');
    try {
      const result = await analyzeIntent(intent, metadata);
      setAnalysis(result);
      setState('results');
    } catch (error) {
      console.error("Analysis failed:", error);
      setState('error');
    }
  }, []);

  const reset = () => {
    setState('idle');
    setAnalysis(null);
    setActiveCountry(0);
  };

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    if (page === 'home') {
      reset();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-1 pt-24 pb-20">
        {currentPage === 'framework' && <FrameworkSection />}
        {currentPage === 'privacy' && <PrivacySection />}
        
        {currentPage === 'home' && state === 'idle' && (
          <IntentInput onAnalyze={handleAnalyze} loading={false} />
        )}

        {currentPage === 'home' && state === 'analyzing' && <ReasoningLoader />}

        {currentPage === 'home' && state === 'results' && analysis && (
          <div className="max-w-6xl mx-auto px-4 animate-in fade-in zoom-in-95 duration-700">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <button 
                  onClick={reset}
                  className="text-xs text-slate-500 hover:text-indigo-400 transition-colors mb-2 flex items-center gap-1"
                >
                  ← Start Over
                </button>
                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Mobility Strategy</h2>
                <div className="flex flex-wrap gap-3">
                  {analysis.intentStages.map((stage, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 text-[10px] rounded uppercase font-bold">
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl p-4 flex gap-8">
                <div className="text-center">
                  <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Sector</p>
                  <p className="text-sm font-semibold text-white">{analysis.fieldOfInterest}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Timeline</p>
                  <p className="text-sm font-semibold text-white">{analysis.constraints.timeHorizon}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Budget</p>
                  <p className="text-sm font-semibold text-white">{analysis.constraints.budget}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {analysis.pathways.map((path, idx) => (
                <button
                  key={path.country}
                  onClick={() => setActiveCountry(idx)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                    activeCountry === idx 
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className="opacity-60 text-xs">#0{idx + 1}</span>
                  {path.country}
                </button>
              ))}
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-3xl p-8 backdrop-blur-sm">
              <PathwayTimeline pathway={analysis.pathways[activeCountry]} />
            </div>

            <div className="mt-12 text-center text-slate-500 text-xs max-w-2xl mx-auto">
              <p>
                This reasoning is generated by our custom mobility engine. It estimates probability based on current public immigration policies. 
                Visa rules change frequently. Use this as a high-level roadmap to discuss with a certified immigration professional.
              </p>
            </div>
          </div>
        )}

        {currentPage === 'home' && state === 'error' && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
            <p className="text-slate-400 mb-6">Our reasoning engine hit a snag. Please try a simpler intent.</p>
            <button onClick={reset} className="px-6 py-2 bg-indigo-600 rounded-lg text-white font-semibold">Try Again</button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
