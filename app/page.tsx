import Link from "next/link";
import { fetchBlog } from "./lib/blog";
import { todo } from "node:test";

export default async function Home() {
  const blogs = await fetchBlog()
  const timeNow = new Date().toLocaleDateString()
  return(
    <div>
      {/* header section  */}
      <div className="max-w-5xl mx-auto rounded-lg mt-3 p-3 shadow-2xl">
        <div className="flex justify-around items-center">
          {/* header logo */}
          <h2 className="text-3xl text-rose-500">blogFy</h2>
          {/* nav links */}
       <div className="flex justify-around gap-10">
          <Link href={'/'}>Home</Link>
         <Link href={'/about'}>About</Link>
         <Link href={'/blogs'}>Blogs</Link>
         <Link href={'/contact'}>Contact</Link>
       </div>
        </div>
      </div>
      {/* hero section */}
      <div className="max-w-5xl mx-auto mt-10">
        <Link href={'/create'} className="bg-rose-600 p-2 rounded-lg hover:bg-rose-400 text-white">📑 Add New Blog </Link>
      </div>

      {
        blogs.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-400 font-bold">No blog yet!</p>
            <p className="text-gray-400">Create you first blog to get started!</p>
          </div>
        ): (
          <div>
            {
              blogs.map(blog => (
                <div key={blog._id}>
                    <span>{blog.title}learn Cloud Ai</span>
                    <h1>{blog.description}Cloud ai is beutiful ai generete!</h1>
                    <p>{blog.auhor} Cloud ai</p>
                    <span>{blog.createdAt}</span>
                </div>
              ))
            }
          </div>
        )
      }
    </div>

   
  )

}
