import React from 'react';

export const PrivacySection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Policy</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Your privacy matters. Here's how we handle your data.
        </p>
        <p className="text-slate-500 text-sm mt-2">Last updated: December 2025</p>
      </div>

      <div className="space-y-8">
        {/* Data Collection */}
        <section className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">📋</span> Data We Collect
          </h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>When you use IntentPath AI, we process the following information:</p>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-white">Intent Descriptions:</strong> The life goals and career aspirations you submit for analysis.</li>
              <li><strong className="text-white">Metadata:</strong> Budget level and education selections you provide.</li>
              <li><strong className="text-white">Usage Data:</strong> Anonymous analytics about feature usage to improve our service.</li>
            </ul>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">⚙️</span> How We Use Your Data
          </h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <ul className="space-y-2 ml-4">
              <li><strong className="text-white">AI Analysis:</strong> Your intent is sent to our AI service to generate personalized mobility pathways.</li>
              <li><strong className="text-white">Service Improvement:</strong> Aggregated, anonymized data helps us improve pathway accuracy.</li>
              <li><strong className="text-white">No Selling:</strong> We never sell your personal information to third parties.</li>
            </ul>
          </div>
        </section>

        {/* Data Storage */}
        <section className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">🔒</span> Data Storage & Security
          </h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <ul className="space-y-2 ml-4">
              <li><strong className="text-white">Session-Based:</strong> Your intent data is processed in real-time and not permanently stored on our servers.</li>
              <li><strong className="text-white">Encryption:</strong> All data transmission uses industry-standard TLS encryption.</li>
              <li><strong className="text-white">No Account Required:</strong> We don't require user accounts, minimizing data collection.</li>
            </ul>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">🔗</span> Third-Party Services
          </h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>IntentPath AI uses the following third-party services:</p>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-white">AI Language Models:</strong> Your intent text is processed by AI services to generate pathway analysis. These services have their own privacy policies.</li>
              <li><strong className="text-white">CDN Services:</strong> Static assets are delivered via content delivery networks.</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">✨</span> Your Rights
          </h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>You have the right to:</p>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-white">Access:</strong> Request information about data we hold.</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of any stored data.</li>
              <li><strong className="text-white">Opt-Out:</strong> Decline optional analytics tracking.</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information.</li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">🍪</span> Cookies & Local Storage
          </h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>We use minimal cookies and local storage:</p>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-white">Essential Cookies:</strong> Required for basic site functionality.</li>
              <li><strong className="text-white">No Tracking Cookies:</strong> We don't use advertising or cross-site tracking cookies.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-indigo-400">📧</span> Contact Us
          </h3>
          <div className="text-slate-300 text-sm leading-relaxed">
            <p>If you have questions about this privacy policy or your data, please contact us:</p>
            <div className="mt-4 p-4 bg-slate-900/50 rounded-xl">
              <p className="font-mono text-indigo-400">privacy@intentpath.ai</p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <h3 className="text-lg font-bold text-amber-400 mb-3">📜 Legal Disclaimer</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            IntentPath AI is provided "as is" without warranty of any kind. The mobility pathways generated are for informational and educational purposes only. 
            They do not constitute immigration advice, and users should consult qualified immigration professionals before making any decisions. 
            We are not responsible for any actions taken based on the information provided by this tool.
          </p>
        </div>
      </div>
    </div>
  );
};
