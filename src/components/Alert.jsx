export default function Alert({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[999999999999999] flex justify-center items-center bg-black/50 backdrop-blur">
      <div className="bg-stone-900 text-white p-6 rounded-xl">{children}</div>
    </div>
  );
}
