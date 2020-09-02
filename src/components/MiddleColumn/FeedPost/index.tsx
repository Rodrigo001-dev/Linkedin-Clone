import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://lh3.googleusercontent.com/proxy/BqLlFYX53HCnxXERJwgb8zPliyL_0bG4yYYtJWTGGisdEQGQan3jA7kMArTw8T5NbEryfHGv3jTDq8png81kjoQWd0zDDNHGaI3w_OT0ZFEf1bwXkI75Lv7q_EKNm6ojWaE" alt="Funny" />
          <Column>
            <h3>BOY</h3>
            <h4>Kratos do Boy</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://conteudo.imguol.com.br/c/noticias/3c/2019/04/02/inteligencia-artificial-algoritmo-tecnologia-codigo-de-programacao-1554210815064_v2_450x337.jpg"
          alt="programming"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
