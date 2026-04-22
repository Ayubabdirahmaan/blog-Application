
export type Blog = {
    _id: string,
    title: string,
    description: string,
    auhor: string,
    createdAt?: string,
    updatedAt?: string
}

export type CreateBlogInput = {
    title: string,
    description: string,
    author: string,
}

export type UpdatedBlogInput = {
    title?: string,
    description?: string,
    author?: string
}