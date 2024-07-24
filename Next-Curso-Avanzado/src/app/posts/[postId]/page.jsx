import Link from "next/link";
import PostsPages from "../page";
import { Suspense } from "react";

async function loadPost(id) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await res.json()

   return data
}


const Posts = async ({ params }) => {
    const post = await loadPost(params.postId)

    return (
        <div>
            <h1>Post Page {params.postId} </h1>
            <h2> {post.title} </h2>
            <p> {post.body} </p>
            <Link href="/posts">Posts</Link>

            <hr />
            <h3>Otras publicaciones</h3>

            <Suspense fallback={ <div>Cargando Publicaciones...</div> }>
                <PostsPages />
            </Suspense>
        </div>
    )
};

export default Posts;
