import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon 
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>

            <button>
              <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQHNbXe8srzXoQ/profile-displayphoto-shrink_100_100/0?e=1604534400&v=beta&t=JNNmSjqYQd8AfTV3zUsbtydXH8szg_VAxlhKh2VgvVw" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;