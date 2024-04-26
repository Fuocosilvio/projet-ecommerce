import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Titre } from "../components/Titre";

export function HomePage() {
  return (
    <div className="container">
      <div className="photo">
        <div className="acceuil">
          <div className="acceuil-text">
            <Titre>
              LET'S <br></br>EXPLORE<br></br> UNIQUE<br></br> ITEMS.
            </Titre>
          </div>
          <Button>Decouvrir les produits</Button>
        </div>
        <div className="image-acceuil">
          <img src="/photo.png" alt="" />
        </div>
      </div>
      <div className="">
        <div className="text-button">
          <Titre>MEN WATCHES</Titre>
          <Button>TOUT VOIR</Button>
        </div>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <div className="text-button">
          <Titre>SMARTPHONES</Titre>
          <Button>TOUT VOIR</Button>
        </div>
        <div className="cards2-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
