import { useParams } from "react-router-dom";

export default function Dish() {
  const { id } = useParams();
  return <h1 className="text-2xl font-bold">Dish Details for ID: {id}</h1>;
}
