import { Component } from "react";
import Link from 'next/link'

let posts = [
  {
    path: '/personalized-valentines-gifts-for-him',
    date: '18-01-2020',
    title: "Personalized Valentine's Day Gifts For Him",
    author: "Jory Hagen",
    subheadings: [
      "compare-occasions",
      "buying-for-men",
      "sensitive-personality",
      "dedicated-personality",
      "practical-personality",
      "top-personalized-valenties-day-gifts-for-him"]
  }, 
  {
    path: '/personalized-love-gift',
    date: '18-01-2020',
    title: "Chosing a Personalized Love Gift For Someone Special",
    author: "Jory Hagen",
  },
  {
    path: '/personalized-family-gift',
    date: '25-01-2020',
    title: "Personalized Family Gifts",
    author: "Jory Hagen",
    subheadings: [
      "personalized-gifts-for-mom",
      "personalized-gifts-for-dad",
      "personalized-gift-for-brother-or-sister",
      "conclusion"]
  },
  {
    path: '/personalized-wedding-gift',
    date: '25-01-2020',
    title: "Personalized Wedding Gifts",
    author: "Jory Hagen",
    subheadings: [
      "for-those-attending-as-guests",
      "personalized-gifts-for-the-bride",
      "personalized-gifts-for-the-groom",
      "personalized-gifts-from-the-bride-and-groom",
      "personalized-gifts-for-bridesmaids-and-groomsmen",
      "personalized-gifts-for-parents-of-the-bride-or-groom",
      "personalized-gifts-for-the-ring-bearer-and-flower-girl"
    ]
  },
  {
    path: '/personalized-halloween-gift',
    date: '25-01-2020',
    title: "Personalized Halloween Gift",
    author: "Jory Hagen"
  }
]

class Blog extends Component {
  render() {
    return (
      <>
        {/*<Layout>
          <SEO title="PixoPixa" />*/}
          <h1>Latest Posts</h1>
          <hr />
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <small>
                posted by {post.author} on{" "}
                {post.date}
              </small>
              <br />
              <br />
              <Link href={'/blog' + post.path}> Read More ...</Link>
              <br />
              <br />
              <hr />
            </div>
          ))}
        {/*</Layout>*/}
      </>
    );
  }
}

export default Blog;
