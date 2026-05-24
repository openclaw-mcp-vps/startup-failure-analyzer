import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Startup Failure Analyzer — Learn from startup failures with detailed breakdowns',
  description: 'A curated database of startup failures with founder interviews, case studies, and failure pattern analysis. Learn what went wrong so your startup can succeed.',
  keywords: 'startup failures, founder interviews, startup lessons, failure analysis, entrepreneurship',
  openGraph: {
    title: 'Startup Failure Analyzer',
    description: 'Learn from startup failures with detailed breakdowns',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c78c2a2f-4264-4bbe-bea2-56a48e89522d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
