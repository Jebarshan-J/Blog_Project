"use client";
import Link from "next/link";
// import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {

  const [posts, setposts] = useState([]);
  const[search, setSearch] = useState("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/test")
      .then((res) => res.json())
      .then((res) => setposts(res))
  }, []);

  useEffect(()=>{
    //  if (search.trim() === "") return;
    // if(e.type==="keydown" && e.key !== "Enter"){
    //    return;
    // }
    fetch(process.env.NEXT_PUBLIC_API_URL + "/search?q=" +search)
    .then((res)=>res.json())
    .then((res)=>setposts(res))
  },[search])

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p> This Project is a Blog project which is build using Next.js and Mysql .</p>
      </main>
      <div className="flex justify-end px-4">
        <input onChange={(e)=>setSearch(e.target.value)} type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={"/post/" + post.id} key={post.id}>
            <div  className="border border-gray-200 p-4">
              <img className="w-full h-48 object-cover mb-4" src={post.Image} alt={post.Title} />
              <h2 className="text-xl font-semibold mb-2">{post.Title}</h2>
              <p className="text-gray-600">{post.Content}</p>
            </div></Link>))}
            {!posts.length > 0 && search && 
              <p className="text-gray-500">No posts found for query:<b>{search}</b></p>
            }
      </div>
    </>
  );
}
