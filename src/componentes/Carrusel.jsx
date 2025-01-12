export function Carrusel(){
    return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/img-4352723-f.jpg" className="d-block w-50" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/img-4352726-t.jpg" className="d-block  w-50" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/img-4352727-f.jpg" className="d-block  w-50" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}