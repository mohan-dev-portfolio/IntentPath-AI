
import React, { useState } from 'react';
import { SAMPLE_INTENTS } from '../constants';

interface IntentInputProps {
  onAnalyze: (intent: string, metadata: any) => void;
  loading: boolean;
}

export const IntentInput: React.FC<IntentInputProps> = ({ onAnalyze, loading }) => {
  const [intent, setIntent] = useState('');
  const [budget, setBudget] = useState('moderate');
  const [education, setEducation] = useState('bachelors');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent.trim()) return;
    onAnalyze(intent, { budget, education });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Where do you want your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            life to go next?
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Describe your dream career and life goals. Our AI will map the world's immigration pathways for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl">
          <textarea
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            placeholder="e.g., I want to study AI in Germany, work for a startup, and eventually start my own company there."
            className="w-full h-32 bg-transparent text-white text-xl placeholder-slate-600 focus:outline-none resize-none mb-6 p-2"
          />

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Budget Level</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="bg-slate-800 text-slate-300 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="minimal">Minimal</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High / Sponsored</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Current Education</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="bg-slate-800 text-slate-300 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="high_school">High School</option>
                  <option value="bachelors">Bachelors Degree</option>
                  <option value="masters">Masters / PhD</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !intent.trim()}
              className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                loading
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-slate-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Map My Path'
              )}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-8">
        <p className="text-slate-500 text-sm mb-3">Try these examples:</p>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_INTENTS.map((sample, i) => (
            <button
              key={i}
              onClick={() => setIntent(sample)}
              className="text-xs px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all text-left max-w-xs truncate"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 p-4 bg-slate-900/30 border border-slate-800 rounded-xl text-center">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
          Disclaimer: IntentPath AI is an educational tool and does not provide legal immigration advice.
        </p>
      </div>
    </div>
  );
};
