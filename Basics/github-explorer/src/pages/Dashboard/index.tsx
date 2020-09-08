import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';
 
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt='Github Explorer' />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img 
            src="https://avatars2.githubusercontent.com/u/60194147?s=460&u=7b15cc0fdb6fa5fe381a9aceddbe6cde2f748f89&v=4" 
            alt="Juaj"
          />

          <div>
            <strong>JuajXavier/Ecoleta</strong>
            <p>App de coleta.</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img 
            src="https://avatars2.githubusercontent.com/u/60194147?s=460&u=7b15cc0fdb6fa5fe381a9aceddbe6cde2f748f89&v=4" 
            alt="Juaj"
          />

          <div>
            <strong>JuajXavier/Ecoleta</strong>
            <p>App de coleta.</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        
        <a href="teste">
          <img 
            src="https://avatars2.githubusercontent.com/u/60194147?s=460&u=7b15cc0fdb6fa5fe381a9aceddbe6cde2f748f89&v=4" 
            alt="Juaj"
          />

          <div>
            <strong>JuajXavier/Ecoleta</strong>
            <p>App de coleta.</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

      </Repositories>
    </> 
  );
};

export default Dashboard;