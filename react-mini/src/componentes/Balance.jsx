import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form'

const { ethereum } = window





export function Balance() {
    const { register, handleSubmit } = useForm();
    const [cuenta, setCuenta] = useState(null)
    const [balance, setBalance] = useState(null)
    const [ok, setOk] = useState(null)
    const [ko, setKo] = useState(null)

    useEffect(() => {
        ethereum && ethereum.request({ method: 'eth_requestAccounts' }).then(cuenta => {
            setCuenta(cuenta[0])

            ethereum.on('accountsChanged', (i) => { setCuenta(i[0]) })


        })
    }, [])

    useEffect(() => {
        if (cuenta) {
            const provider = new ethers.BrowserProvider(ethereum)

            provider.getBalance(cuenta).then(balance => {
                setBalance(ethers.formatEther(balance))
            })

        }
    }, [cuenta])

    async function submit(data) {
        setKo(null)
        setKo(null)
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = await provider.getSigner();

        const parametros = {
            from: cuenta,
            to: data.address,
            value: ethers.parseEther(data.amount)
           
            
        }
        console.log(parametros)
        //console.log(data.amount)
        try {
            const txResponse = await signer.sendTransaction(parametros);
            const receipt = await txResponse.wait();
            console.log('Transaccion confirmada:', receipt);
            setOk('Transaccion confirmada:', receipt.blockHash)
        } catch (error) {
            setKo("error en la transaccion", error.message)
        }


    }

    if (!ethereum) {
        return <div>Metamask no existe</div>
    }

    return (<div>
        <p>Cuenta: {cuenta ? cuenta : 'Cargando...'}</p>
        <p>Saldo: {balance ? balance : 'Cargando balance'}</p>
        <form className="form-inline" onSubmit={handleSubmit(submit)}>
            <div className="form=group mb-3">
                <label htmlFor="address">Address</label>
                <input defaultValue="0x3e3976a0d63A28c115037048A2Ae0FE9e456f474" id="address" className="form-control"{...register("address")} />
            </div>
            <div className="form=group mb-3">
                <label htmlFor="amount">Amount</label>
                <input id="amount" className="form-control"{...register("amount")} />
            </div>
            <button type="submit" className="'btn btn-primary mb-3">Send</button>
        </form>
        {ok && <div className="alert alert-info m-3"> {ok}</div>}
        {ko && <div className="alert alert-danger m-3"> {ko}</div>}
    </div>)
}