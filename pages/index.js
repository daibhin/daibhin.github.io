import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Newell</title>
      </Head>

      <main>
        <h2>
          Hey 👋 I&apos;m <a href="https://twitter.com/DavidNewell95">David</a>
        </h2>

        <div>
          <Link href="/posts">
            <a>Words &rarr;</a>
          </Link>
        </div>
        <div>
          <Link href="/theatre">
            <a>Films &rarr;</a>
          </Link>
        </div>
        <div>
          <Link href="/library">
            <a>Books &rarr;</a>
          </Link>
        </div>
        <div>
          <Link href="/internet">
            <a>Links &rarr;</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
