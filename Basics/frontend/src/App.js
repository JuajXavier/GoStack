import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);
  // na linha com map pode por o html na mesma linha sem return porque é uma linha só.
  
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);
  
  async function handleAddProject() {
    /* projects.push(`Novo projeto ${Date.now()}`); */
    /* setProjects([...projects,`Novo projeto ${Date.now()}`]) */
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
	    owner: "João Xavier"
    });

    const project = response.data;

    setProjects([...projects, project]); // versão indireta do .push, pra adicionar e atualizar o array.
  }

  return (
  <>
  <Header title="Projects"/>

  <ul>
    {projects.map(project => <li key={project.id}>{project.title}</li>)} 
  </ul>

  <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;