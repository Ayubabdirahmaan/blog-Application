"use server";

import { redirect } from "next/navigation";
import { createBlog } from "../lib/blog";
import { revalidatePath } from "next/cache";

export async function CreateBlog(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const author = formData.get("author") as string;

    if (!title || !description || !author || title.trim().length === 0) {
        console.log("title must be required!");
        return;
    }

    if (description.length > 30) {
        console.log("description must be at least 30 words");
        return;
    }
    const blogId = await createBlog({ title: title.trim(), description, author })

    if (blogId) {
        console.log('creating blog is failed try again ')
    }
    revalidatePath('/')
    redirect('/')
}
