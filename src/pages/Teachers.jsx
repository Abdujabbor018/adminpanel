import React from "react"
import { useState, useEffect } from "react";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
  
    useEffect(() => {
      fetch("https://697e035197386252a2699feb.mockapi.io/api/21/teachers")
        .then(res => res.json())
        .then(data => {
          setTeachers(data);
        })
        .catch(err => {
          console.error(err);
        });
    }, []); 
  return (
    <div className="page">
      <h1>Teachers</h1>
      <p>
        O‘qituvchilar bo‘limi — kurslar, tajriba va darslar bilan bog‘liq barcha
        ma’lumotlar shu yerda.
      </p>

      <div className="students">
        {teachers.map(teachers => (
          <div key={teachers.id} className="student-card">
            <img src={teachers.avatar} alt={teachers.name} />
            <h3>{teachers.name}</h3>
            <span>ID: {teachers.id}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teachers
