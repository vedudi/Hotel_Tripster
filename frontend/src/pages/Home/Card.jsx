import { Link } from "react-router-dom";
import Availability from "../../components/Availability/Availability";

const Card = ({ place }) => {
  const color =
    place >= 4 ? "bg-green-500" : place >= 3 ? "bg-yellow-500" : "bg-red-500";
  return (
    <Link
      to={`/place/${place.id}`}
      className="cursor-pointer border rounded-md p-4  grid max-md:grid-cols-6 grid-cols-5 gap-5 min-h-[300px]"
    >
      <div className=" max-md:col-span-2">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={place.image_url}
          alt="resim"
        />
      </div>
      <div className="col-span-4 flex flex-col">
        <div className="col-span-4 flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl"> {place.name} </h1>
            <Availability status={place.availability} />
          </div>
          <p>{place.location}</p>
          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span key={key} className="border p-1 rounded-md">
                {i}
              </span>
            ))}
          </div>
          <p className={`${color} p-1 rounded-lg text-white font-bold w-fit`}>
            {place.rating}
          </p>
        </div>
        <div className="self-end flex flex-col items-end ">
          <span className="text-2xl font-bold">{place.price_per_night}$</span>
          <span className="text-xs text-gray-400">
            vergiler ücrete dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
