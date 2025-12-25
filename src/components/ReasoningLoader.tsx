
import React, { useState, useEffect } from 'react';

export const ReasoningLoader: React.FC = () => {
  const steps = [
    "Parsing life intent...",
    "Extracting global mobility constraints...",
    "Reasoning over German Blue Card rules...",
    "Assessing Canadian Express Entry potential...",
    "Checking UK Skilled Worker visa eligibility...",
    "Evaluating Australian 190/189 subclasses...",
    "Calculating risk scores and timelines...",
    "Generating explainability summaries..."
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
        <div className="absolute inset-4 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin-reverse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-8 rounded-full border-4 border-slate-800 border-t-slate-400 animate-spin" style={{ animationDuration: '4s' }}></div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-semibold text-white">AI is reasoning...</h3>
        <p className="text-slate-400 animate-pulse transition-all duration-500 h-6">
          {steps[currentStep]}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md w-full px-4">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`h-1 rounded-full transition-colors duration-1000 ${i <= (currentStep % 4) ? 'bg-indigo-500' : 'bg-slate-800'}`}></div>
        ))}
      </div>
    </div>
  );
};
