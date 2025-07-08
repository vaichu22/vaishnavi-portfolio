import React from 'react';

export default function Portfolio() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#4f46e5' }}>Vaishnavi Kalaivanan</h1>
      <p>Senior Backend Engineer | Java | Spring Boot | Microservices</p>
      <p>Bangalore, India | your.email@gmail.com | +91-XXXXXXXXXX</p>
      <p>
        <a href="https://github.com/yourhandle">GitHub</a> | 
        <a href="https://linkedin.com/in/yourprofile"> LinkedIn</a>
      </p>

      <h2>About Me</h2>
      <p>I am a Senior Backend Engineer with 7+ years of experience building robust backend systems with Java, Spring Boot, REST APIs, and Microservices...</p>

      <h2>Work Experience</h2>
      <ul>
        <li><strong>AAA Company</strong>: Backend API dev, monitoring dashboards, schedulers (2020–Present)</li>
        <li><strong>BBB Company</strong>: Java-based document utilities, Azure migration (2017–2020)</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Java, Spring Boot, MongoDB, MySQL, REST, JPA</li>
        <li>Jenkins, JIRA, Git, JUnit, Postman</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>QBox, QMoney, QEats, Q&A Form</li>
      </ul>

      <h2>Achievements</h2>
      <ul>
        <li>Spotlight of the Month – AAA (Mar 2024)</li>
      </ul>

      <h2>Education</h2>
      <p>B.Tech – Computer Science, ABC University</p>
    </main>
  );
}
