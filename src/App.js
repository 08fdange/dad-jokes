import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import SecondaryText from './components/SecondaryText';
import Setup from './components/Setup';
import Punchline from './components/Punchline';

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;

  @media only screen and (max-width: 800px) {
    padding: 50px 16px;
  }

  @media only screen and (max-width: 419px) {
    align-items: center;
    flex-direction: column;
  }
`;

const ApiLink = styled.a`
  @media only screen and (max-width: 419px) {
    margin-top: 16px;
  }
`;

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
`;

const PunchlineButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    setLoading(false);
    fetch('https://karljoke.herokuapp.com/jokes/random')
    .then(resp => {
      if (!resp.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${resp.status}`
        )
      }
      return resp.json()
    })
    .then(data => {
      setLoading(false);
      setShowPunchline(false);
      setJoke(data);
      setError(null);
    })
    .catch((err) => {
      setLoading(false);
      setError(err.message);
    })
  };

  return (
    <Wrapper>
      <Header>
        <Button
          color='#69b65b'
          onClick={getJoke}
        >
          Get New Random Joke
        </Button>
        <ApiLink
          href='https://karljoke.herokuapp.com'
          target="_blank"
        >
          View API Docs
        </ApiLink>
      </Header>
      <Line />
      {loading && (
        <SecondaryText>
          Loading your joke...
        </SecondaryText>
      )}
      {error && (
        <SecondaryText error>
          There was an error loading your joke.
        </SecondaryText>
      )}
      {joke && joke?.length !== 0 && (
        <div>
          <Setup>
            {joke?.setup}
          </Setup>
          <PunchlineButtonWrapper>
            <Button
              color='#006eb8'
              onClick={() => setShowPunchline(!showPunchline)}
            >
              {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
            </Button>
          </PunchlineButtonWrapper>
          <Punchline show={showPunchline}>
            {joke?.punchline}
          </Punchline>
        </div>
      )}
    </Wrapper>
  );
};

export default App;
