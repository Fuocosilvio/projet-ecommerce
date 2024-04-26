import { Card } from "../components/Card";
import { Titre } from "../components/Titre";

export function CategoriePage() {
  return (
    <div className="container">
      <div className="categorie-titre">
        <Titre>MENS-WATCHES</Titre>
      </div>
      <div className="card-categorie">
        <Card></Card>
        <Card></Card>

        <Card></Card>
        <Card></Card>

        <Card></Card>
        <Card></Card>

        <Card></Card>
      </div>
    </div>
  );
}
