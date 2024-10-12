import "./NoPage.css";

export default function NoPage() {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div className="loader">
        <div
          data-glitch="Error 404 : No Page found"
          className="glitch text-lg sm:text-3xl md:text-5xl"
        >
          Error 404 : No Page found
        </div>
      </div>
    </div>
  );
}
