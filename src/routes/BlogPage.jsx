import TemplatePage from "./TemplatePage";

export default function Blog() {
  const contents = (
    <main>
      <h1>New Blog Page</h1>
      <p>Welcome to my new blog page!</p>
    </main>
  );

  return <TemplatePage contents={contents} />;
}
