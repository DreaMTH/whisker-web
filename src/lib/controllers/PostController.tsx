import mongoose, {isValidObjectId} from "mongoose";
import {NewsModel} from "@/lib/models/NewsModel";
import {connectDb} from "@/utils/connect";

export declare type INews = {
    title: string;
    content: string;
    relatedUser: mongoose.Schema.Types.ObjectId;
    likes?: number;
    views?: number;
    images?: string[];
}

export const CreateNews = async (News: INews) => {
    try {
        await connectDb();
        const doc = new NewsModel(News);
        if (!doc) {
            return null;
        }
        await doc.save();
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Creating new news");
    }
};
export const GetAllNews = async () => {
    try {
        await connectDb();
        const news = NewsModel.find();
        if (!news) {
            return null;
        }
        return news;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Attempt to get all posts");
    }
};
export const GetNewsById = async (id: Readonly<string>) => {
    try {
        if (!isValidObjectId(id)) {
            console.error("Invalid post id");
            return null;
        }
        const news = NewsModel.findByIdAndUpdate(id, {views: +1});
        if (!news) {
            return null;
        }
        return news;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Attempt to get single news by id");
    }
};
