import { Categories, PostWidget, MyInfo, FeaturedPosts } from '../components';
import { getPosts } from '../services';
import Head from 'next/head'
import dynamic from 'next/dynamic'

export default function Home({ posts }) {
  const PostCard = dynamic(() => import("../components/PostCard"), {
    ssr: false,
  });

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>chú pé ngu ngục</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}

          {/*<PostCard key={index} post={post.node} />*/}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <MyInfo />
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

