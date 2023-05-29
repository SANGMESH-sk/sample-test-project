import {useSelector} from "react-redux";
import {selectAllposts} from "../posts/postSlice"
import {selectAllUsers} from "../Users/userSlice"
import postAuthor from "./PostAuthor";
export default function PostList()
{
    const posts = useSelector(selectAllposts)




    const renderPosts = posts.map((post) => (
        <article key={post.id}>
            <h1>{post.userId}</h1>
            <h3>{post.title}</h3>
            <h3>{post.content.substring(0, 100)}</h3>
            <p className="postCredit">
                <postAuthor userId={post.userId}></postAuthor>
            </p>
        </article>
    ))
    return (
        <section>
            <h2>{renderPosts}</h2>

        </section>
    )
}
