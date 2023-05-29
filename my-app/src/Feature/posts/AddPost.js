import {useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {postAdded} from "./postSlice"
import {selectAllUsers} from "../Users/userSlice"
const AddPostForm = () =>
{

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setuserId] = useState('')

    const users = useSelector(selectAllUsers)
    const dispatch = useDispatch();
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setuserId(e.target.value)
    const onSavePostClicked = () =>
    {
        if (title && content)
        {
            dispatch(postAdded(title, content, userId))
        }
        setTitle('')
        setContent('')
    }
    const userOption = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))
    const cansave = Boolean(title) && Boolean(content)
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">post Title</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
                <label htmlFor="postAuthor" >Author</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOption}
                </select>
                <label htmlFor="postcontent">content:</label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged}></textarea>
                <button type="button" disabled={!cansave} onClick={onSavePostClicked}>save post</button>
            </form>
        </section>
    )
}
export default AddPostForm;
