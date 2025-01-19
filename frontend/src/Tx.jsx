import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getTx } from "./api";

export function Tx() {
    const params = useParams()
    const { isLoading, isError, error, data } = useQuery(["tx", params.tx], () =>
        getTx(params.tx)
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
                        <th>Bloque</th>
                        <td>
                            <Link to={`/bloque/${data.blockNumber}`}>{data.blockNumber}</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>From</th>
                        <td>
                            <Link to={`/balance/${data.from}`}>{data.from}</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>To</th>
                        <td>
                            <Link to={`/balance/${data.to}`}>{data.to}</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>Value</th>
                        <td>{data.value}</td>
                    </tr>
                </thead>
            </table>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
