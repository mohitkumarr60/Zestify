import Input from "./Input";
export default function FeedbackForm() {
  return (
    <div className="px-[20px] sm:px-[50px] lg:px-[60px] xl:px-[100px] m-auto py-20">
      <h3 className="text-2xl font-bold">Feedback</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quae!
      </p>
      <br />

      <div className="">
        <label htmlFor="name">Name</label>
        <div className="mt-2">
          <Input type="text" id="name" />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="email">Email</label>
        <div className="mt-2">
          <Input type="email" id="email" />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="message">Message</label>
        <div className="mt-2">
          <textarea
            type="text"
            id="message"
            className="border w-full px-3 py-2 focus:outline-purple-300 focus:shadow-lg focus:shadow-purple-200 rounded-md resize-none h-32 overflow-y-scroll"
          />
        </div>
      </div>

      <div className="mt-3">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 w-full">
          Submit
        </button>
      </div>
    </div>
  );
}
