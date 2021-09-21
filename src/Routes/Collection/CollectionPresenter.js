import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const CollectionInfo = styled.div``;

const CollectionName = styled.h2`
  font-size: 50px;
  font-weight: 600;
`;

const CollectionOverview = styled.p`
  opacity: 0.7;
  line-height: 1.4;
  width: 100%;
  margin: 10px 0 30px;
`;

const CollectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: max(2vw, 30px);
`;

const PartContent = styled.div`
  text-align: center;
  font-size: 16px;
  position: relative;
`;

const PartName = styled.span`
  transition: filter 0.15s linear;
`;

const PartImage = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 60vh;
  width: calc(60vh * 9 / 16);
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;

  &:hover {
    top: -10px;
    -webkit-box-shadow: 8px 34px 50px -3px rgba(0, 0, 0, 0.78);
    box-shadow: 8px 34px 50px -3px rgba(0, 0, 0, 0.78);
  }

  &:hover + ${PartName} {
    font-size: 18px;
    font-weight: 600;
  }
`;

const CollectionPresenter = ({ result, error, loading }) => {
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      {error ? (
        <>
          <Helmet>
            <title>Not found | Nomflix</title>
          </Helmet>
          <Message color="#e74c3c" text={error} />
        </>
      ) : (
        <>
          <Helmet>
            <title>{result.name} | Nomflix</title>
          </Helmet>
          <Backdrop
            bgImage={
              result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` ??
                  `https://image.tmdb.org/t/p/original${result.poster_path}`
                : `https://image.tmdb.org/t/p/original${result.parts[0].backdrop_path}`
            }
          />
          <CollectionInfo>
            <CollectionName>{result.name}</CollectionName>
            <CollectionOverview>{result.overview}</CollectionOverview>
          </CollectionInfo>
          <CollectionContainer>
            {result.parts?.length > 0 &&
              result.parts.map((part) => (
                <Link to={`/movie/${part.id}`} key={part.id}>
                  <PartContent>
                    <PartImage
                      bgUrl={
                        part.poster_path
                          ? `https://image.tmdb.org/t/p/w500${part.poster_path}`
                          : require('../../assets/noPoster.png').default
                      }
                    />

                    <PartName>{part.original_title}</PartName>
                  </PartContent>
                </Link>
              ))}
          </CollectionContainer>
        </>
      )}
    </Container>
  );
};

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;
