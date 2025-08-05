import React, { useState } from 'react';
import './AddBlog.css';

const AddBlog = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('technology');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission
        console.log('Form submitted:', { file, title, category, author, description });
    };

    return (
        <div className="blog-upload-container">
            <h1>Upload Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="file">File Upload:</label>
                    <input type="file" id="file" name="file" accept=".pdf, .doc, .docx" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="technology">Technology</option>
                        <option value="travel">Travel</option>
                        <option value="food">Food</option>
                        <option value="lifestyle">Lifestyle</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" required />
                </div>
                <button type="submit">Publish</button>
            </form>
        </div>
    );
};

export default AddBlog;
