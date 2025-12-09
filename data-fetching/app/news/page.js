
export const revalidate = 60; 

export default async function NewsPage() {
  const res = await fetch('http://localhost:3000/api/top-headlines', {
    next: { revalidate: 60 }
  });
  const articles = await res.json();

  return (
    <main>
      <h1>DailyEdge — News (ISR)</h1>
      <p>Last updated: {new Date().toISOString()}</p>
      <ul>
        {articles.map(a => <li key={a.id}>{a.title}</li>)}
      </ul>
    </main>
  );
}
