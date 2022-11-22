import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = ({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}) => {  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <div className="card-collection">
              <TeamMembers employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Employees