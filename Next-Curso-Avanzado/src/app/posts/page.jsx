import PostCard from "@/components/PostCard";
import "./Posts.css"

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 4000))

    return data
}

const PostsPages = async () => {

    const posts = await loadPosts()

    return (
        <div className="grid">
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
};

export default PostsPages;
