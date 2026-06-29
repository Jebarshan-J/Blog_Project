import db from "@/lib/db";

export async function POST(req) {
    try {
        const { Name, Email, Message } = await req.json();
        if (!Name || !Email || !Message) {
            return Response.json(
                { error: "All fields are required" }
            );
        }

        const [result] = await db.query(
            "INSERT INTO contact (Name, Email, Message) VALUES (?, ?, ?)",
            [Name, Email, Message]
        );

        return Response.json(result);

    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong" },
        );
    }
}