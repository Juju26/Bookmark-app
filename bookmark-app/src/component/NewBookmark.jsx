import React, { useState } from 'react';

export const NewBookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (e) => {
    e.preventDefault();
    const newBookmark = e.target.elements.url.value.trim();
    if (newBookmark) {
      setBookmarks([...bookmarks, { url: newBookmark }]);
      e.target.elements.url.value = '';
    }
  };

  const deleteBookmark = (url) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.url !== url));
  };

  return (
    <div className="bookmark-manager">
      <h1>Bookmark Manager</h1>
      <form onSubmit={addBookmark}>
        <input type="text" name="url" placeholder="Enter URL" />
        <button type="submit">Add Bookmark</button>
      </form>
      <ul className="bookmark-list">
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark.url} target="_blank" rel="noreferrer">
              {bookmark.url}
            </a>
            <button onClick={() => deleteBookmark(bookmark.url)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
