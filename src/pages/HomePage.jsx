import { Card } from "../components/Card";
import { Titre } from "../components/Titre";

export function HomePage() {
  return (
    <div>
      <p>page d'acceuil</p>
      <Titre>MEN WATCHES</Titre>
      <Card />
      <Card />
      <Card />
      <Titre>SMARTPHONES</Titre>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
