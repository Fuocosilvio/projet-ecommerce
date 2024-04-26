import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Titre } from "../components/Titre";

export function DetailProduit() {
  return (
    <div className="container">
      <div>
        <div className="card-detail">
          <img
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <img
            className="n-3"
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="detail-text">
          <p>marque</p>
          <p>STAINLESS STEEL WRIST WATCH 699$</p>
          <p>description</p>
          <p>
            {" "}
            Watch Crown With Environmental IPS Bronze Electroplating; Display
            system of 12 hours
          </p>
          <p>Note</p>
          <p>4.05 / 5</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="text-button">
          <Titre>dans la meme categorie</Titre>
          <Button>TOUT VOIR</Button>
        </div>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
