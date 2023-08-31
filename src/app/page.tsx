import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const books = [
    {
      id: 1,
      name: "Book 1",
      author: "Author A",
      condition: "Good",
      price: "$15",
      seller: "Seller 1",
      url: "/handmaid.jpg",
    },
    {
      id: 2,
      name: "Book 2",
      author: "Author B",
      condition: "Like New",
      price: "$20",
      seller: "Seller 2",
      url: "/handmaid.jpg",
    },
    // Add more books...
  ];
  return (
    <>
      <h1>Recycled Reads</h1>
      <h3>Every page has a New Adventure</h3>

      <table id={styles["book-list"]}>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Condition</th>
          <th>price</th>
          <th>Seller</th>
        </tr>
        {books.map((book) => (
          <tr key={book.id}>
            <div>
              <Image
                width="50"
                height="50"
                src={book.url}
                alt="handsmaid tale book cover"
              ></Image>
            </div>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.condition}</td>
            <td>{book.price}</td>
            <td>{book.seller}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
