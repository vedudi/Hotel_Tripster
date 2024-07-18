import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Availability = ({ status, expand }) => {
  return (
    <div
      className={`flex  items-center gap-4 justify-center p-2 border rounded-lg ${
        status ? "bg-green-100" : "bg-red-100"
      } ${expand ? "pe-4" : ""}`}
    >
      {status ? (
        <MdEventAvailable className="text-3xl text-blue-700" />
      ) : (
        <CgUnavailable className="text-3xl text-red-700" />
      )}
      {expand && (
        <p className="text-lg font-semibold">
          {status ? "Şu an konaklanabilir" : "Konaklamak için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Availability;
