
import React from 'react';
import { Pathway, RiskLevel } from '../types';

interface PathwayTimelineProps {
  pathway: Pathway;
}

const RiskBadge: React.FC<{ level: RiskLevel }> = ({ level }) => {
  const styles = {
    low: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    medium: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    high: 'bg-rose-500/10 text-rose-500 border-rose-500/20'
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${styles[level]}`}>
      {level} Risk
    </span>
  );
};

export const PathwayTimeline: React.FC<PathwayTimelineProps> = ({ pathway }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">{pathway.country}</h3>
          <p className="text-slate-400 text-sm">Entry: {pathway.entryStage}</p>
        </div>
        <div className="text-right">
          <RiskBadge level={pathway.riskLevel} />
          <p className="text-xs text-slate-500 mt-1">~{pathway.totalDuration}</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800"></div>
        
        <div className="space-y-12">
          {pathway.transitionSteps.map((step, idx) => (
            <div key={idx} className="relative pl-12 group">
              <div className="absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              
              <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-xl hover:border-slate-700/50 transition-all backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/5 px-2 py-1 rounded border border-indigo-500/10">{step.duration}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {step.requirements.map((req, rIdx) => (
                    <span key={rIdx} className="text-[10px] bg-slate-800/50 text-slate-400 px-2 py-1 rounded-full border border-slate-700/50">
                      ✓ {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-slate-800">
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
            <h5 className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">Why this works</h5>
            <p className="text-slate-300 text-sm leading-relaxed">{pathway.whyItWorks}</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h5 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Fallback Options</h5>
            <p className="text-slate-300 text-sm leading-relaxed">{pathway.fallbackOptions}</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10">
          <h5 className="text-rose-400 text-sm font-bold uppercase tracking-wider mb-2">Potential Roadblocks</h5>
          <ul className="space-y-3">
            {pathway.potentialRoadblocks.map((point, pIdx) => (
              <li key={pIdx} className="flex gap-3 text-slate-300 text-sm">
                <span className="text-rose-500 flex-shrink-0">⚠</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-rose-500/10">
            <p className="text-xs text-rose-300/60 italic">Risk Detail: {pathway.riskDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
