import { PropTypes } from "prop-types";

export default function TeamMember({
  name,
  designation,
  description,
  img,
  link,
}) {
  function handleClick() {
    window.open(link, "_blank");
  }

  return (
    <>
      <div
        className="w-full md:w-[350px] rounded-2xl border overflow-hidden shadow-md hover:scale-105 transition-all duration-200 hover:shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="w-full md:h-[350px]">
          <img
            className="h-[350px] w-full object-cover border-b"
            src={img}
            alt="ProfileImage"
          />
        </div>
        <div className="p-3 text-center">
          <h5 className="font-bold text-lg">{name}</h5>
          <p className=" font-semibold text-zinc-600 text-sm">{designation}</p>
          <p className=" font-normal  text-xs">{description}</p>
        </div>
      </div>
    </>
  );
}

//props validation
TeamMember.propTypes = {
  name: PropTypes.string,
  designation: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};
