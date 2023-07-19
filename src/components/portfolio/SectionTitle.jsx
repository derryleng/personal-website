export default function SectionTitle({ children, id }) {
  return (
    <h1
      id={id}
      className="mb-5 text-2xl font-bold underline transition-colors duration-500 underline-offset-8 decoration-4 text-stone-900 dark:text-white"
    >
      {children}
    </h1>
  );
}
