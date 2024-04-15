import { useState, useEffect } from 'react';
import logo from './assets/hogwarts.png';
import './App.css';

function App() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:3000/real/students');
      const data = await response.json();
      setStudents(data);
      console.log(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here is a list of all students:</p>
        <div className="App-intro">
          {students ? students.map(student =>
            student && <div className='glassmorph-card'>
              <img src={student.image} alt="Student image" className='student-img' />
              <div key={crypto.randomUUID()}>{student.name} : {student.house}</div>
            </div>
          ) : "Loading..."}
        </div>
      </header>
    </div>
  );
}

export default App;