import datos from '../datos.json'


export function CardPrecios({data}){
    return <div className="card w-100  m-2">
        <div className="card-header">
            <h4 className='text-center'>{data.titulo}</h4>
        </div>
        <div className="card-body">
            <ul className='list-unstyled'>
                {
                    data.features.map((i, index)=>
                    <li key={index} className='mt-1'>{i}</li>)
                }
            </ul>
            <button className='btn btn-outline-primary btn-lg w100'>{data.textButton}</button>
        </div>
    </div>
}

export function Precios(){
    return <div className="my-5 d-flex justify-content-between">
       {
        datos.precios.map((i, index)=> <CardPrecios key={index} data={i} ></CardPrecios>)
       }

    </div>
}