import { UserContext } from "@/App"
import { useContext, useEffect,useState } from "react"

export function Balance() {
    const {state,setState} =useContext(UserContext);
    const [balance, setBalance]= useState<number>(0)
    useEffect(()=>{
        const ethereum =window.ethereum;
        if (!ethereum) {
            alert("Instalar metamask");
            return;
          }
          ethereum.request({method: "eth_getBalance", params: [state.acc]}).then((balance:string)=>{
            setBalance(Number(balance)/10**18);
          })
    },[state.acc]);

    return <div>
        <h1>Balance</h1>
        <p>{state.acc} Tiene: {balance}</p>
    </div>
  }
  