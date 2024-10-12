export default function Section({ children, style }) {
  return (
    <section className={style}>
      <div className={`container px-5 md:px-10 m-auto flex items-center`}>
        <div className="w-full py-20">{children}</div>
      </div>
    </section>
  );
}
