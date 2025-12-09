export const dynamic = 'force-dynamic';

export default async function DashboardPage({ params }) {
  const res = await fetch('http://localhost:3000/api/metrics', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main>
      <h1>Dashboard (SSR)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>Rendered at {new Date().toISOString()}</p>
    </main>
  );
}
