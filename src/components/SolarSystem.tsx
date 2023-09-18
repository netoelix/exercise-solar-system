import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  const newText = 'Planetas';
  return (
    <div data-testid="solar-system" className="planets">
      <Title headline={ newText } />
      <div className="planets-list">
        {planets.map((item) => (
          <PlanetCard
            planetName={ item.name }
            planetImage={ item.image }
            key={ item.name }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
