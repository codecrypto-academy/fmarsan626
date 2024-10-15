import { useEffect, useState } from "react"

type Data ={
  p1: String
  p2: String
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null)
  useEffect(() => {
    fetch('http://localhost:3333/111/222')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


if (!data) return <div>Loading...</div>

  return (
    <div>
      {data.p1} {data.p2}
    </div>
  )
}
