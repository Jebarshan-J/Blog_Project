import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM post");

    return Response.json(rows);

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Internal Server Error" }
    );
  }
}