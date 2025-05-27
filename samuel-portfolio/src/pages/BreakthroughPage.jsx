// /**
//  * Images are now imported from src/assets/breakthrough/
//  */
import React, { useEffect } from "react";
import "../styles/breakthroughPage.css";
import img1 from '../assets/breakthrough/img1.jpeg';
import img2 from '../assets/breakthrough/img2.jpeg';
import img3 from '../assets/breakthrough/img3.jpeg';

const blogPosts = [
  {
    image: img1,
    title: "Autonomous Agent Teams",
    date: "May 2025",
    summary:
      "AI squads that write, test, and deploy code without human hand-offs are moving from research to real products.",
  },
  {
    image: img2,
    title: "Multimodal LLMs",
    date: "April 2025",
    summary:
      "New models reason across text, images, and audio in one coherent conversation—unlocking richer interfaces.",
  },
  {
    image: img3,
    title: "Edge AI & TinyML",
    date: "March 2025",
    summary:
      "Ultra-compact neural nets bring real-time intelligence to phones, drones, and IoT devices without the cloud.",
  },
];

const BreakthroughPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="breakthrough-blog-root">
      <header className="breakthrough-blog-header">
        <h1>AI Breakthroughs to Watch in 2025</h1>
        <p className="breakthrough-blog-sub">Explore the most exciting advances in artificial intelligence coming this year.</p>
      </header>
      <section className="breakthrough-blog-grid">
        {blogPosts.map((post, idx) => (
          <article className="breakthrough-blog-card" key={idx}>
            <div className="breakthrough-blog-img-wrap">
              <img src={post.image} alt={post.title} className="breakthrough-blog-img" />
            </div>
            <div className="breakthrough-blog-content">
              <h2>{post.title}</h2>
              <time className="breakthrough-blog-date">{post.date}</time>
              <p>{post.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default BreakthroughPage; 