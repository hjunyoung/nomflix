import React from 'react';
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

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const Item = styled.span``;

const Country = styled.p`
  font-size: 20px;
  margin-top: -5px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  opacity: 0.7;
  line-height: 1.4;
  width: 50%;
`;

const ImdbTooltip = styled.div`
  opacity: 0;
  position: absolute;
  background-color: #262a2c;
  font-size: 12px;
  padding: 4px;
  border: 1px solid rgba(20, 20, 20, 0.8);
  border-radius: 3px;
  width: 104px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -170%);
  pointer-events: none;
  transition: opacity 0.05s linear;
`;

const Imdb = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const ImdbLink = styled.a`
  position: relative;
  display: block;
  width: 40px;
  &:hover {
    ${ImdbTooltip} {
      opacity: 1;
    }
  }
`;

const MoreInfo = styled.div`
  margin-top: 20px;
`;

const ContainerStyle = styled.div`
  margin-bottom: 10px;
`;

const TrailerContainer = styled(ContainerStyle)``;

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Trailers = styled(Grid)`
  position: relative;
  gap: ${(props) => (props.trailerView ? '5px' : 0)};
`;

const Name = styled.span`
  user-select: none;
  font-size: 0;
  font-weight: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const TrailerName = styled(Name)``;

const Trailer = styled.div`
  height: ${(props) => (props.trailerView ? '153px' : 0)};
  width: 272px;
  border-radius: 5px;
  padding: 0 40px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  transition: height 0.05s linear, filter 0.15s linear;
`;

const TrailerContent = styled.div`
  position: relative;
  text-align: center;

  &:hover {
    ${Trailer} {
      filter: brightness(0.4);
    }
    ${TrailerName} {
      font-size: ${(props) => (props.trailerView ? '16px' : 0)};
    }
  }
`;

const Header = styled.div`
  user-select: none;
  display: inline-flex;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  h5 {
    font-size: 16px;
  }
`;

const TrailerHeader = styled(Header)`
  span {
    transform: ${(props) => props.trailerView && 'rotate(90deg)'};
  }
`;

const CollectionContainer = styled(ContainerStyle)``;

const CollectionHeader = styled(Header)`
  span {
    transform: ${(props) => props.collectionView && 'rotate(90deg)'};
  }
`;

const CollectionName = styled(Name)`
  position: fixed;
  transform: translate(-100vw, -50vh);
  opacity: 0;
  font-style: italic;
  pointer-events: none;
  text-align: right;

  transition: transform 0.2s ease-in-out, opacity 0.2s linear;
`;

const Collection = styled.div`
  height: ${(props) => (props.collectionView ? '300px' : 0)};
  width: 200px;
  transition: height 0.05s linear;
  border-radius: 5px;

  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;

  &:hover {
    filter: brightness(0.4);

    & + ${CollectionName} {
      font-size: ${(props) => (props.collectionView ? '200px' : 0)};
      transform: translate(-10%, -30%);
      opacity: 0.25;
    }
  }
`;

const SeasonContainer = styled(ContainerStyle)``;

const SeasonHeader = styled(Header)`
  span {
    transform: ${(props) => props.seasonView && 'rotate(90deg)'};
  }
`;

const Seasons = styled(Grid)`
  gap: ${(props) => (props.seasonView ? '5px' : 0)};
`;

const SeasonName = styled(Name)``;

const Season = styled.div`
  height: ${(props) => (props.seasonView ? '272px' : 0)};
  transition: height 0.05s linear;
  width: 181px;

  img {
    width: 181px;

    border-radius: 5px;
    height: ${(props) => (props.seasonView ? '100%' : 0)};
  }
`;

const SeasonContent = styled(TrailerContent)`
  &:hover {
    ${Season} {
      filter: brightness(0.4);
    }
    ${SeasonName} {
      font-size: ${(props) => (props.seasonView ? '16px' : 0)};
    }
  }
`;

const Companies = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  img {
    height: 40px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const DetailPresenter = ({
  result,
  error,
  loading,
  trailerView,
  toggleView,
  collectionView,
  seasonView,
}) => {
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
            <title>Not fount | Nomflix</title>
          </Helmet>
          <Message color="#e74c3c" text={error} />
        </>
      ) : (
        <>
          <Helmet>
            <title>
              {result.original_title || result.original_name} | Nomflix
            </title>
          </Helmet>
          <Backdrop
            bgImage={
              result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                : `https://image.tmdb.org/t/p/w500${result.poster_path}`
            }
          />
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                  : require('../../assets/noPoster.png').default
              }
            />
            <Data>
              <Title>{result.original_title || result.original_name}</Title>
              <ItemContainer>
                <Item>
                  {result.release_date?.substring(0, 4) ||
                    result.first_air_date?.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.runtime || result.episode_run_time?.[0]} mins
                </Item>
                <Divider>•</Divider>
                <Item>
                  <Country>
                    {result.production_countries &&
                      String.fromCodePoint(
                        ...result.production_countries[0].iso_3166_1
                          .toUpperCase()
                          .split('')
                          .map((char) => 127397 + char.charCodeAt())
                      )}
                  </Country>
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres?.map((genre) => genre.name).join(' / ')}
                </Item>
                {result.imdb_id && (
                  <>
                    <Divider>•</Divider>
                    <Item>
                      <ImdbLink
                        href={`https://www.imdb.com/title/${result.imdb_id}`}
                        target="_blank"
                      >
                        <Imdb
                          alt="imbd"
                          src={require('../../assets/imdb.png').default}
                        />
                        <ImdbTooltip>
                          <span>Open IMDb page</span>
                        </ImdbTooltip>
                      </ImdbLink>
                    </Item>
                  </>
                )}
              </ItemContainer>

              <Overview>{result.overview || ''}</Overview>

              <MoreInfo>
                <TrailerContainer>
                  <TrailerHeader onClick={toggleView} trailerView={trailerView}>
                    <span>▶</span>
                    <h5>Trailers</h5>
                  </TrailerHeader>
                  <Trailers trailerView={trailerView}>
                    {result.videos &&
                      result.videos.results.length > 0 &&
                      result.videos.results.map((video) => (
                        <TrailerContent
                          key={video.id}
                          trailerView={trailerView}
                        >
                          <a
                            href={`https://www.youtube.com/watch?v=${video.key}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Trailer
                              trailerView={trailerView}
                              bgUrl={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                            ></Trailer>
                          </a>
                          <TrailerName>{video.name}</TrailerName>
                        </TrailerContent>
                      ))}
                  </Trailers>
                </TrailerContainer>

                {result.belongs_to_collection && (
                  <CollectionContainer>
                    <CollectionHeader
                      onClick={toggleView}
                      collectionView={collectionView}
                    >
                      <span>▶</span>
                      <h5>Collection</h5>
                    </CollectionHeader>

                    <Collection
                      collectionView={collectionView}
                      bgUrl={`https://image.tmdb.org/t/p/w500${result.belongs_to_collection.poster_path}`}
                      aria-label={`${result.belongs_to_collection.name}`}
                    ></Collection>
                    <CollectionName>
                      {result.belongs_to_collection.name}
                    </CollectionName>
                  </CollectionContainer>
                )}

                {result.seasons && (
                  <SeasonContainer>
                    <SeasonHeader onClick={toggleView} seasonView={seasonView}>
                      <span>▶</span>
                      <h5>Seasons</h5>
                    </SeasonHeader>
                    <Seasons seasonView={seasonView}>
                      {result.seasons?.length > 0 &&
                        result.seasons.map((season) => (
                          <SeasonContent seasonView={seasonView}>
                            <Season key={season.id} seasonView={seasonView}>
                              <img
                                src={
                                  season.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
                                    : require('../../assets/noPoster.png')
                                        .default
                                }
                                alt={`${season.name} poster`}
                              />
                            </Season>
                            <SeasonName>{season.name}</SeasonName>
                          </SeasonContent>
                        ))}
                    </Seasons>
                  </SeasonContainer>
                )}
              </MoreInfo>
            </Data>
          </Content>
        </>
      )}

      <Companies>
        {result.production_companies &&
          result.production_companies.map(
            (company) =>
              company.logo_path && (
                <img
                  alt={`${company.name}`}
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                  title={company.name}
                />
              )
          )}
      </Companies>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
