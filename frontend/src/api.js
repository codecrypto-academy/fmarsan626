export async function getBlock(bloque) {
    const response = await fetch(`http://localhost:3333/bloque/${bloque}`);
    const data = await response.json();
    return data;
  }
  
  export async function getTx(tx) {
    const response = await fetch(`http://localhost:3333/tx/${tx}`);
    const data = await response.json();
    return data;
  }
  
  export async function getBalance(address) {
    const response = await fetch(`http://localhost:3333/balance/${address}`);
    const data = await response.json();
    return data;
  }