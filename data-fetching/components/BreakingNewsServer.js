// components/BreakingNewsServer.js  (server component)
export const dynamic = 'force-dynamic'; // ensure this component is dynamic

export default async function BreakingNewsServer() {
  const res = await fetch('http://localhost:3000/api/breaking', { cache: 'no-store' });
  const item = await res.json();

  return (
    <section>
      <h2>Breaking</h2>
      <p>{item.headline} <small>— {item.ts}</small></p>
    </section>
  );
}
