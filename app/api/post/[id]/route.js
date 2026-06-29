import db from "@/lib/db"
export async function GET(request, { params }) {

  try {
    const { id } = await params;
    const [rows] = await db.query("SELECT * FROM post WHERE id = ?", [id]);

    if (rows.length === 0) {
      return Response.json({ error: "NO Data Found" }

      );
    }
    return Response.json(rows[0])
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" })
  }

}