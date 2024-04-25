export function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="card-card">
        <div className="card-info">
          <p className="card-titre">Naviforce</p>
          <p className="card-description">LEATHER STRAPS WRISTWATCH</p>
        </div>
        <div className="card-infoprix">
          <p className="card-prix">120$</p>
        </div>
      </div>
    </div>
  );
}
