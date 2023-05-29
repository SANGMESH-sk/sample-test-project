import {useState} from 'react';
import './App.css';
import Clock from './Components/Clock';
import Home from './Components/Login';
import Counter from './Components/Counter';
import PostList from "./Feature/posts/PostList"
import AddPostForm from './Feature/posts/AddPost';
import TextEditor from './Components/TextEditor';
import './Components/TextEditor.css';
function App()
{
  const [content, setContent] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [isShared, setIsShared] = useState(false);

  const Sidebar = () =>
  {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <a href="https://mail.google.com/">Gmail</a>
          </li>
          <li>
            <a href="https://drive.google.com/">Google Drive</a>
          </li>
          <li>
            <a href="https://calendar.google.com/">Google Calendar</a>
          </li>
          {/* Add more Google apps links as needed */}
        </ul>
      </div>
    );
  };
  const handleContentChange = (event) =>
  {
    setContent(event.target.value);
  };

  const handleDocumentNameChange = (event) =>
  {
    setDocumentName(event.target.value);
  };

  const handleShareClick = () =>
  {
    setIsShared(true);
  };
  return (
    <div className='app'>

      <div className="text-editor">
        <Sidebar />
        <div className="toolbar">
          <input
            type="text"
            value={documentName}
            onChange={handleDocumentNameChange}
            placeholder="Document Name"
          />
          <button onClick={handleShareClick}>{isShared ? 'Shared' : 'Share'}</button>
        </div>
        <div className="background"></div>
        <textarea
          className="content"
          value={content}
          onChange={handleContentChange}
          placeholder="Start typing..."
        ></textarea>
      </div>
      <AddPostForm />
      <PostList />

    </div>

  );
}
export default App;
