import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBalance } from "./api";

export function Balance() {
  const params = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["balance", params.address],
    () => getBalance(params.address)
  );

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
