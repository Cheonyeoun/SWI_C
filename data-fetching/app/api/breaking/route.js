export async function GET() {
  return Response.json({
    headline: "Government Announces New Tech Policy",
    ts: new Date().toISOString()
  });
}
