import { useState } from "react";

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", genre: "Self-Help", rating: 4.8 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", rating: 4.1 },
  { id: 3, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", rating: 4.7 },
  { id: 4, title: "1984", author: "George Orwell", genre: "Classic", rating: 4.6 },
  { id: 5, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", rating: 4.5 },
  { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", rating: 3.9 },
];

export default function BookHub() {
  const [search, setSearch] = useState("");
  const [myBooks, setMyBooks] = useState([]);

  // Filter books based on search input
  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Add book to My List
  function addBook(book) {
    if (!myBooks.find((b) => b.id === book.id)) {
      setMyBooks([...myBooks, book]);
    }
  }

  // Remove book from My List
  function removeBook(id) {
    setMyBooks(myBooks.filter((b) => b.id !== id));
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 24, maxWidth: 700, margin: "0 auto" }}>

      {/* Header */}
      <h1 style={{ color: "#5c3d2e" }}>📚 Book Hub</h1>
      <p style={{ color: "#888" }}>Search books and save them to your reading list.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 20, fontSize: 15, borderRadius: 6, border: "1px solid #ccc" }}
      />

      {/* Book List */}
      <h2 style={{ color: "#333" }}>All Books</h2>
      {filtered.map((book) => (
        <div key={book.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 14, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <strong>{book.title}</strong> — {book.author}
            <div style={{ color: "#888", fontSize: 13 }}>{book.genre} · ⭐ {book.rating}</div>
          </div>
          <button
            onClick={() => addBook(book)}
            style={{ background: "#5c3d2e", color: "white", border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer" }}
          >
            + Add
          </button>
        </div>
      ))}

      {/* My Reading List */}
      <h2 style={{ color: "#333", marginTop: 30 }}>My Reading List ({myBooks.length})</h2>
      {myBooks.length === 0 ? (
        <p style={{ color: "#aaa" }}>No books added yet. Click + Add above!</p>
      ) : (
        myBooks.map((book) => (
          <div key={book.id} style={{ border: "1px solid #b5e7a0", background: "#f6fff4", borderRadius: 8, padding: 14, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <strong>{book.title}</strong> — {book.author}
              <div style={{ color: "#888", fontSize: 13 }}>{book.genre} · ⭐ {book.rating}</div>
            </div>
            <button
              onClick={() => removeBook(book.id)}
              style={{ background: "#e74c3c", color: "white", border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
