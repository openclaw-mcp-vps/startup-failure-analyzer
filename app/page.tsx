export default function Home() {
  const faqs = [
    {
      q: 'What kind of content is in the database?',
      a: 'Detailed case studies of real startup failures, including founder interviews, financial timelines, key mistakes, and pattern analysis across industries like SaaS, fintech, consumer apps, and more.'
    },
    {
      q: 'Who is this for?',
      a: 'Entrepreneurs building their next venture, investors doing due diligence, and startup employees who want to understand the warning signs before it is too late.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Education
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Learn from startup failures with{' '}
          <span className="text-[#58a6ff]">detailed breakdowns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A curated database of startup post-mortems, founder interviews, and failure pattern analysis — so you can avoid the same mistakes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Full Access — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access to 200+ case studies.</p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#21262d] bg-[#161b22]">
        <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[['200+', 'Failure Case Studies'], ['80+', 'Founder Interviews'], ['12', 'Failure Patterns']].map(([num, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{num}</div>
              <div className="text-xs text-[#6e7681] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-3">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full access to 200+ failure case studies',
              'Founder interviews & post-mortems',
              'Failure pattern analysis & reports',
              'Browse by industry, stage, or failure type',
              'New cases added weekly',
              'Cancel anytime'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Learning Now
          </a>
          <p className="mt-4 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Startup Failure Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
