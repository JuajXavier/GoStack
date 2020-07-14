import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

// Não possuem valor semântico (significado)
// Não possuem estilização própria, tudo precisa ser feito a partir de CSS
// Todos componentes possuem por padrão display:flex

// View: div, footer, header, main, aside, section, etc.
// Text: p, span, strong, h1, h2, h3 

export default function App() {
  const [projects, setProjects] = useState([]);

  // useEffect = chamada api
  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, []) // array sem variável = dispara a função uma unica vez.

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'João Xavier'
    });
    
    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id} // vai pegar cada item do array Data e vai passar por essa função pra pegar o valor unico de cada projeto (key)
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>

      </SafeAreaView>
      {/* <View style={styles.container}>
      {projects.map(project => (
        
      ))}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },

  project: {
    color: '#fff',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

});