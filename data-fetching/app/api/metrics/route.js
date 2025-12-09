export async function GET() {
  return Response.json({
    usersOnline: Math.floor(Math.random() * 1000),
    salesToday: Math.floor(Math.random() * 100),
    serverLoad: Math.random().toFixed(2)
  });
}
