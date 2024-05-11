import {NextResponse} from "next/server";
import {GetNewsById} from "@/lib/controllers/PostController";

export async function GET(req: Request, context: any) {
    const {postId} = context;
    const news = await GetNewsById(postId);
    if (!news) {
        return new NextResponse(JSON.stringify({
            message: "No such post",
        }), {status: 404});
    }
    return NextResponse.json(news);
}