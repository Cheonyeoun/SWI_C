// app/page.js  (homepage)
import BreakingNewsServer from '../components/BreakingNewsServer';

export const revalidate = 300; // homepage body regenerates every 5min

export default function HomePage() {
  return (
    <main>
      <h1>DailyEdge (Home)</h1>
      <p>Fast static homepage content</p>

      {/* dynamic breaking-news slice rendered on every request */}
      <BreakingNewsServer />
    </main>
  );
}
