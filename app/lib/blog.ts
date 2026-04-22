import { Blog, CreateBlogInput, UpdatedBlogInput } from "../types/blog";
import { getBlogCollection } from "./db";
import { ObjectId } from "mongodb"


export async function fetchBlog(): Promise<Blog[]> {
    try {
        const collection = await getBlogCollection()
        const blogs = await collection.find().toArray()

        return blogs.map(blog => ({
            _id: blog._id.toString(),
            title: blog.title,
            description: blog.description,
            auhor: blog.author,
            createdAt: blog.createdAt,
            updatedAt: blog.updatedAt
        }))

    } catch (error) {
        console.error('Error fetching todos:', error)
        return []

    }
}

export async function fetchBlogById(id: string): Promise<Blog | null> {
    try {
        const collection = await getBlogCollection()
        const blog = await collection.findOne({ _id: new ObjectId(id) })
        if (!blog) {
            return null
        }

        return {
            _id: blog._id.toString(),
            title: blog.title,
            description: blog.description,
            auhor: blog.author,
            createdAt: blog.createdAt,
            updatedAt: blog.updatedAt
        }

    } catch (error) {
        console.error('Error fetching  todo by id:', error)
        return null

    }
}

export async function createBlog(blog: CreateBlogInput): Promise<string | null> {
    try {
        const collection = await getBlogCollection()
        const result = await collection.insertOne(blog)
        return result.insertedId.toString()
    } catch (error) {
        console.error('errror creating blog:', error)
        return null
    }
}

export async function updatedBlog(id: string, blog: UpdatedBlogInput): Promise<string | null> {
    try {
        const collection = await getBlogCollection()
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: blog })
        return result.modifiedCount > 0 ? id : null

    } catch (error) {
        console.error('error updating todo', error)
        return null

    }

}

export async function deleteBlog(id: string): Promise<string | null> {
    try {
        const collection = await getBlogCollection()
        const result = await collection.deleteOne({ _id: new ObjectId(id) })
        return result.deletedCount > 0 ? id : null

    } catch (error) {
        console.log('error deleting todo')
        return null
    }
}