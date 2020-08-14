import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import api from '../../services/api';

import './styles.css';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface Props {
  teacher: Teacher;
}

const TeacherItem: React.FC<Props> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
          <p>Preço/hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <a
            target="_blank"
            onClick={createNewConnection}
            href={`https://wa.me/+55${teacher.whatsapp}`}
          >
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato
          </a>
        </footer>
    </article>
  );
}

export default TeacherItem;
