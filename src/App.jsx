import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  const [ selectedTeam, setTeam ] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [ 
                {id: 1, fullName: "Employee1", designation: "Developer1", gender: "male", teamName: "TeamA"},
                {id: 2, fullName: "Employee2", designation: "Developer2", gender: "female", teamName: "TeamA"},
                {id: 3, fullName: "Employee3", designation: "Developer3", gender: "male", teamName: "TeamA"},
                {id: 4, fullName: "Employee4", designation: "Developer4", gender: "male", teamName: "TeamB"},
                {id: 5, fullName: "Employee5", designation: "Developer5", gender: "female", teamName: "TeamB"},
                {id: 6, fullName: "Employee6", designation: "Developer6", gender: "female", teamName: "TeamB"},
                {id: 7, fullName: "Employee7", designation: "Developer7", gender: "male", teamName: "TeamC"},
                {id: 8, fullName: "Employee8", designation: "Developer8", gender: "female", teamName: "TeamC"},
                {id: 9, fullName: "Employee9", designation: "Developer9", gender: "male", teamName: "TeamC"},
                {id: 10, fullName: "Employee10", designation: "Developer10", gender: "female", teamName: "TeamD"},
                {id: 11, fullName: "Employee11", designation: "Developer11", gender: "female", teamName: "TeamD"},
                {id: 12, fullName: "Employee12", designation: "Developer12", gender: "male", teamName: "TeamD"},
        ]);

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() =>{
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  
  function handleTeamSelectionChange(event){

    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ?(employee.teamName === selectedTeam)
      ?{...employee, teamName: ""}:{...employee, teamName: selectedTeam}
      :employee);

    setEmployees(transformedEmployees);
  }
  
  return (
      <Router>
          <Nav />
          <Header 
            selectedTeam={selectedTeam}
            teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
            />
            <Routes>
              <Route path="/"
                element={<Employees 
                  employees={employees}
                  selectedTeam={selectedTeam}
                  handleTeamSelectionChange={handleTeamSelectionChange}
                  handleEmployeeCardClick={handleEmployeeCardClick}
                  />
                }>
              </Route>
              <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          <Footer />
      </Router>
  )
}
