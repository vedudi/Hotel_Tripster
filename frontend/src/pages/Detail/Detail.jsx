import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlace } from "../../api/Api";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import Container from "../../components/Container/Container";
import Features from "./Features";
import Rating from "./Rating";
import Availability from "../../components/Availability/Availability";
import Price from "./Price";
import Button from "./Button";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["place"],
    queryFn: () => getPlace(id),
  });
  console.log(data);
  return (
    <Container designs={"max-w-3xl"}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} queryKey="place" />
      ) : (
        <div className="flex flex-col gap-4">
          <Button id={data.id}/>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <Rating point={data.rating} />
          </div>
          <p>{data.description}</p>
          <img className="rounded-lg" src={data.image_url} alt="detail resmi" />
          <div className="flex justify-between gap-2 items-center">
            <Availability expand={true} status={data.availability} />
            <Price price={data.price_per_night} />
          </div>
          <Features arr={data.amenities} />

        </div>
      )}
    </Container>
  );
};

export default Detail;
