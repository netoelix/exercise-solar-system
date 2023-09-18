import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions" className="mission">
      <Title headline="Missões" />
      <div className="missions-list">
        {missions.map((item) => (
          <MissionCard
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destination={ item.destination }
            key={ item.name }
          />

        ))}
      </div>
    </div>
  );
}
export default Missions;
