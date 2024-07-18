import { toast } from "react-toastify";
import { addPlace } from "../../api/Api";
import Container from "../../components/Container/Container";
import { inputs } from "../../Constants";
import InputField from "./InputField";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate=useNavigate()
  const mutation=useMutation({
    mutationKey:["add"],
    mutationFn:(data)=>addPlace(data),
    onSuccess:()=>{
      toast.success("konaklama kaydı oluşturuldu")
      navigate("/")
    },
    onError:()=>{
      toast.error("işlem başarısız oldu")
    }
  })

const handleSubmit=(e)=>{
e.preventDefault()
const form=new FormData(e.target)
const formData=Object.fromEntries(form.entries())
formData.amenities=formData.amenities.split(",")
formData.availability=formData.availability?true:false
mutation.mutate(formData)
}

  return (
    <Container>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 gap-5 ">
        {inputs.map((props, key) => (
          <InputField key={key} {...props} />
        ))}
        <div className="flex justify-center items-center ">
        <button disabled={mutation.isPending} className="bg-red-500 p-1 px-4 text-white font-bold rounded-md w-fit">Oluştur</button>
        </div>
      </form>
    </Container>
  );
};

export default Create;
