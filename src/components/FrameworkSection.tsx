import React from 'react';

export const FrameworkSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Framework</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          How IntentPath AI transforms your life goals into actionable global mobility strategies.
        </p>
      </div>

      {/* Reasoning Pipeline */}
      <div className="space-y-8 mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">AI Reasoning Pipeline</h3>
        
        <div className="grid gap-6">
          {[
            {
              step: "01",
              title: "Intent Parsing",
              description: "Our AI analyzes your natural language description to extract key life goals, career aspirations, family plans, and timeline preferences.",
              icon: "🎯"
            },
            {
              step: "02", 
              title: "Constraint Extraction",
              description: "We identify implicit and explicit constraints including budget, education level, work experience, language skills, and risk tolerance.",
              icon: "📊"
            },
            {
              step: "03",
              title: "Multi-Country Reasoning",
              description: "The system simultaneously evaluates pathways across Germany, Canada, UK, and Australia using current immigration policy knowledge.",
              icon: "🌍"
            },
            {
              step: "04",
              title: "Pathway Synthesis",
              description: "For each country, we construct a step-by-step journey from entry point to your desired end state (work, PR, citizenship).",
              icon: "🛤️"
            },
            {
              step: "05",
              title: "Risk Assessment",
              description: "Each pathway is scored for risk based on policy stability, processing times, success rates, and potential roadblocks.",
              icon: "⚠️"
            },
            {
              step: "06",
              title: "Explainability Layer",
              description: "We generate human-readable explanations for why each pathway works and what could go wrong.",
              icon: "💡"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">STEP {item.step}</span>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Countries */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">Supported Destinations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { country: "Germany", flag: "🇩🇪", visas: ["Blue Card", "Job Seeker", "Student Visa", "Freelance Visa"] },
            { country: "Canada", flag: "🇨🇦", visas: ["Express Entry", "PNP", "Study Permit", "LMIA Work Permit"] },
            { country: "United Kingdom", flag: "🇬🇧", visas: ["Skilled Worker", "Graduate Route", "Global Talent", "Student Visa"] },
            { country: "Australia", flag: "🇦🇺", visas: ["Subclass 189/190", "Graduate Visa 485", "Student Visa", "Employer Sponsored"] }
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-slate-900/30 border border-slate-800 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{item.flag}</span>
                <h4 className="text-lg font-semibold text-white">{item.country}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.visas.map((visa, vIdx) => (
                  <span key={vIdx} className="text-xs bg-slate-800/50 text-slate-400 px-2 py-1 rounded-full border border-slate-700/50">
                    {visa}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">Technology</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Advanced AI", description: "Powered by state-of-the-art language models for nuanced understanding" },
            { title: "Structured Output", description: "JSON schema enforcement ensures consistent, parseable results" },
            { title: "Real-time Analysis", description: "Sub-second reasoning over complex multi-step pathways" }
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 rounded-xl">
              <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Limitations */}
      <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
        <h3 className="text-lg font-bold text-amber-400 mb-3">⚠️ Important Limitations</h3>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li>• IntentPath AI is an educational tool and does not provide legal immigration advice.</li>
          <li>• Immigration policies change frequently; always verify with official government sources.</li>
          <li>• Individual cases may have unique factors not captured by our general analysis.</li>
          <li>• Consult a licensed immigration attorney for personalized legal guidance.</li>
        </ul>
      </div>
    </div>
  );
};
