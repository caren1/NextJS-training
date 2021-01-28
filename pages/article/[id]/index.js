import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const article = ({ article }) => {
  // obtaining the id from the route
  // const router = useRouter();
  // const { id } = router.query;

  return(
  <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href="/">Go back</Link>
  </>
  );
};

// to both methods we can pass the context that will get an access to the url and id
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
