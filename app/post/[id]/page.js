"use client"
import {useState, useEffect} from "react";
import { useParams } from "next/navigation";

export default function PostPage() {
    const params = useParams();

    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + params.id)
            .then((res) => res.json())
            .then((res) => setPost(res))
    }, [params.id])

    return <>
        {post && (
            <main className="container mx-auto px-4 py-6" key={post.id}>
                <h2 className="text-4xl font-bold mb-4">{post.Title}</h2>
                {/* // <p className="text-gray-500">Published on January 1, 2022</p> */}
                <img width={300} height={200} src={post.Image} alt="Post Image" className="my-4"/>
                <p>{post.Content}</p>
            </main>
        )}
    </>
}