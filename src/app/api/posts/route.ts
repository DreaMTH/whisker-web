import {NextResponse} from "next/server";
import {GetAllNews} from "@/lib/controllers/PostController";

export async function GET(req: Request) {
    const news = await GetAllNews();
    if (!news) {
        return new NextResponse(JSON.stringify(
                {message: "Bad request"}
            ),
            {status: 404});
    }
    return NextResponse.json(news);
}