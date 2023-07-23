import TemplatePage from "./TemplatePage";

export default function Blog() {
  const contents = (
    <main className="text-center">
      <h1>Under Construction!</h1>
      <p>Check back soon for thrilling content.</p>
    </main>
  );

  return <TemplatePage contents={contents} />;
}
