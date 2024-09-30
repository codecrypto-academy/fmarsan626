import { useMutation } from "react-query"
export function Tx() {
    const { mutate, isLoading, isError } = useMutation(() => {
        console.log("Funcion")

    })
    const { mutate:m2, isLoading:isL2, isError:isE2 } = useMutation(() => {
        console.log("Funcion2")

    })
    return <div>
        <button onClick={() => mutate()}>Llamar</button>
        <button onClick={() => m2()}>Llamar funcion 2</button>
    </div>
}