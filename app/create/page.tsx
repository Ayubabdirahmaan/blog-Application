import Link from 'next/link'
import React from 'react'

const create = () => {
  return (
    <div className='max-w-7xl mx-auto '>
        <div className='max-w-3xl mx-auto shadow-md mt-10 rounded-lg p-4'>
            {/* header form titles */} 
          <div className='flex justify-between p-3 items-center '>
              <h1 className='text-2xl font-bold'>Add New Blog</h1>
            <Link href={'/'} className='font-light text-rose-500'>← Back to Blogs</Link>
          </div>
          <div className='mt-5'>
            <form className='block'>
                <span className='font-light'>Blog Title</span> <br />
                <input className='p-1 w-full border border-gray-400 p-2 rounded-lg outline-rose-500' type="text" required placeholder='Enter blog title... ' /> <br />
                 <span className='font-light'>Blog Description</span> <br />
               <input className='p-1 w-full border border-gray-400 p-2 rounded-lg outline-rose-500' type="text" required placeholder='Enter blog description... ' /> <br />
                  <span className='font-light'>Blog Author</span> <br />
               <input className='p-1 w-full border border-gray-400 p-2 rounded-lg outline-rose-500' type="text" required placeholder='Enter blog author... ' />
                <div className='flex mt-2'>
                    <button className='flex-1 bg-rose-500 p-2 rounded-lg text-white'>Create Blog</button>
                    <Link className='border border-gray-400 text-center ml-2 p-2 rounded-lg' href={'/'}>Cancel</Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default create