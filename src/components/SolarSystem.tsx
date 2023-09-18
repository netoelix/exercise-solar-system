import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  const newText = 'Planetas';
  return (
    <div data-testid="solar-system">
      <Title headline={ newText } />
      {planets.map((item) => (
        <PlanetCard
          planetName={ item.name }
          planetImage={ item.image }
          key={ item.name }
        />
      ))}
    </div>
  );
}

export default SolarSystem;
