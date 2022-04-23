import Head from "next/head";

export default function Posts() {
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>

      <main>
        <div>
          <a href="/posts/building-early-stage-products">
            Testing and shipping at early stage companies
          </a>
        </div>
        <div>
          <a href="/posts/yc-lessons-1">YC Lessons: Week 1</a>
        </div>
        <div>
          <a href="/posts/yc-lessons-2">YC Lessons: Week 2</a>
        </div>
        <div>
          <a href="/posts/yc-lessons-3">YC Lessons: Week 3</a>
        </div>
        <div>
          <a href="/posts/yc-lessons-4">YC Lessons: Week 4-5</a>
        </div>
        <div>
          <a href="/posts/on-building-product">On building product</a>
        </div>
        <div>
          <a href="/posts/fyp">Final Year: Choosing a project</a>
        </div>
        <div>
          <a href="/posts/software-development-nature">
            Revision Notes: The Nature of Software Development
          </a>
        </div>
        <div>
          <a href="/posts/command-line-lessons">Lessons in the Command Line</a>
        </div>
        <div>
          <a href="/posts/tourists">Don&apos;t be a tourist</a>
        </div>
      </main>
    </div>
  );
}
