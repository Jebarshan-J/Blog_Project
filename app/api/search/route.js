import  db  from "@/lib/db";

export  async function GET(req) {
    const data = req.nextUrl.searchParams.get("q"); 
    console.log(data);

    const [rows] = await db.query("select * from post where Title like ? or Content like ?", [`%${data}%`, `%${data}%`]);

  console.log(rows);

    return Response.json(rows);
  
}