import React, {useState} from 'react';
import './TextEditor.css';

const TextEditor = () =>
{
    const [content, setContent] = useState('');

    const handleContentChange = (event) =>
    {
        setContent(event.target.value);
    };

    return (
        <div className="text-editor">
            <div className="background"></div>
            <textarea
                className="content"
                value={content}
                onChange={handleContentChange}
                placeholder="Start typing..."
            ></textarea>
        </div>
    );
};

export default TextEditor;