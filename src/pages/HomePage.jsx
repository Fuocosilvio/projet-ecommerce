import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Titre } from "../components/Titre";

export function HomePage() {
  return (
    <div className="container">
      <div>
        <Titre>MEN WATCHES</Titre>
        <Button>tout voir</Button>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <Titre>SMARTPHONES</Titre>
        <Button>tout voir</Button>
        <div className="cards2-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
