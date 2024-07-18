import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { delPlace } from "../../api/Api";
import { toast } from "react-toastify";

const Button = ({ id }) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: "delete",
    mutationFn: () => delPlace(id),
    onSuccess: () => {
      toast.info("Hotel seçeneklerden kaldırıldı");
      navigate("/");
    },
    onError: () => {
        toast.error("hemen üzülme sadece bir hata oluştu")
    },
  });
  return (
    <div className="flex justify-between mb-5">
      <Link
        to={-1}
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-gray-300 hover:shadow"
      >
        <MdKeyboardArrowLeft />
        geri
      </Link>
      <button
      disabled={mutation.isPending}
        onClick={mutation.mutate}
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-red-300 hover:shadow"
      >
        sil
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default Button;
