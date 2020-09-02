import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQHNbXe8srzXoQ/profile-displayphoto-shrink_100_100/0?e=1604534400&v=beta&t=JNNmSjqYQd8AfTV3zUsbtydXH8szg_VAxlhKh2VgvVw" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;