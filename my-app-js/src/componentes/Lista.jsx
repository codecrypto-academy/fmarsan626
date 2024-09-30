import { useQuery } from 'react-query';

export function Lista() {

    const { data, isLoading } = useQuery(["query1"], () => {
        return [1, 2, 3, 4]
    })
    if (isLoading) {
        return <div>Cargando..</div>
    }
    return <p>
        <ul>

            {
                data && data.map((item, index) =>
                    <li key={index}>{item}</li>)
            }
        </ul>


    </p>
}