import { useEffect, useState } from "react"

type Data = {
  jsonrpc: string
  id: number
  result: string
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null)
  useEffect(() => {
    fetch('http://localhost:5556', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [
          '0x3e3976a0d63A28c115037048A2Ae0FE9e456f474',
          'latest'
        ],
        id: '1'
      })
    })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error)
  }, [])


  if (!data) return <div>Loading...</div>

  return (
    <div>
      {Number(data.result)/10**18}
    </div>
  )
}
