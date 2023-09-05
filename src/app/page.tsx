import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const books = [
    {
      id: 1,
      title: "Book 1",
      author: "Author A",
      condition: "Good",
      price: "$15",
      seller: "Seller 1",
      url: "/handmaid.jpg",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author B",
      condition: "Like New",
      price: "$20",
      seller: "Seller 2",
      url: "/handmaid.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-xl" style={{ marginBottom: "0px" }}>Recycled Reads</h1>
      <h3 className="text-l" style={{ marginTop: "0.25rem" }}>Online Used Book Marketplace</h3>
      <nav className="flex justify-center">
        <Link className="px-5  border-b border-transparent hover:border-purple-700" href="#">Fiction</Link>
        <Link className="px-5  border-b border-transparent hover:border-purple-700" href="#">Non-Fiction</Link>
        <Link className="px-5  border-b border-transparent hover:border-purple-700" href="#">Kids</Link>
        <Link className="px-5  border-b border-transparent hover:border-purple-700" href="#">Education</Link>
        <Link className="px-5  border-b border-transparent hover:border-purple-700" href="#">Mystery & Suspence</Link>
      </nav>
      <header style={{ textAlign: "center", marginTop: "2rem" }}>
        Fiction
      </header>
      <section className={styles["book-list"]}>
        {books.map((book) => (
          <div className={styles["book"]} key={book.id}>
            <Image
              width="160"
              height="220"
              src={book.url}
              alt="handsmaid tale book cover"
            ></Image>
            <div className={styles["product-info-item"]}>
              <h3 style={{ margin: "0px", lineHeight: "1rem" }}>
                {book.title}
              </h3>
              <div
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  marginTop: "0.2rem",
                }}
              >
                by <span>{book.author}</span>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Price</th>
                    <th>Seller</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{book.condition}</td>
                    <td>{book.price}</td>
                    <td>{book.seller}</td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "6.2rem",
                }}
              >
                <button className={styles.cartButton} type="button">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
