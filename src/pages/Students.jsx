import { useEffect, useState } from "react";
import React from "react";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://697e035197386252a2699feb.mockapi.io/api/21/Teachers")
      .then(res => res.json())
      .then(data => {
        setStudents(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []); 

  return (
    <div className="page">
      <h1>Students</h1>
      <p>
        Bu yerda barcha talabalar ro‘yxati, ularning rasmi, ismi va idsi chiqadi
      </p>

      <div className="students">
        {students.map(student => (
          <div key={student.id} className="student-card">
            <img src={student.avatar} alt={student.name} />
            <h3>{student.name}</h3>
            <span>ID: {student.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
