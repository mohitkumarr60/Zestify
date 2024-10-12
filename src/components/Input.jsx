export default function Input({ type, id }) {
  return (
    <>
      <input
        type={type}
        id={id}
        autoComplete="true"
        className="border w-full px-3 py-2 focus:outline-orange-300 focus:shadow-lg focus:shadow-purple-200 rounded-md"
      />
    </>
  );
}
