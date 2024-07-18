import { useQueryClient } from "@tanstack/react-query";

const Error = ({ info, queryKey }) => {
  const queryClient = useQueryClient();
  const retry = () => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
  };
  return (
    <>
      <div className="mt-10 bg-red-500 rounded-lg p-4 text-white font-semibold text-center">
        <p className="mb-5">opps Dur bi Sanırım Hata Var</p>
        <p> {info.message} </p>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={retry}
          className="border hover:bg-zinc-200 px-4 py-1 rounded-md"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
