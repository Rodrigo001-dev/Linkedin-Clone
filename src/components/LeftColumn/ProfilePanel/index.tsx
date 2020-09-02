import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHNbXe8srzXoQ/profile-displayphoto-shrink_100_100/0?e=1604534400&v=beta&t=JNNmSjqYQd8AfTV3zUsbtydXH8szg_VAxlhKh2VgvVw"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Rodrigo Rael</h1>
        <h2>studying full stack programming with JavaScript and TypeScript</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
