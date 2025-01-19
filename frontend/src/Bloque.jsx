import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getBlock } from "./api";

export function Bloque() {
  const params = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["bloque", params.bloque],
    () => getBlock(params.bloque)
  );

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Lista de transacciones</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/tx/${item}`}>{item}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
