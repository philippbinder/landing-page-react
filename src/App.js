/** @jsxImportSource @emotion/react */
import { ClassNames, css, Global, jsx } from '@emotion/react';
import Logo from './images/604b495774de0f31a16e487c_designwiz-logo.png';
import spam5 from './images/edreams5.png';
import spam3 from './images/FeatureUpvote3.png';
import spam2 from './images/kustomer2.png';
import spam4 from './images/saberFeedback4.png';
import spam1 from './images/signaturit1.png';
import girl from './images/strangeGirl.png';
// import Logo from './images/604b495774de0f31a16e487c_designwiz-logo.png';
import {
  frontendParagraph,
  getStarted,
  headsUp,
  hero,
  highQuality,
  iAmSpecial,
  imgDiv,
  innerDivOfLogo,
  leftDiv,
  linkesDiv,
  logoStyle,
  navStyles,
  newSpan,
  rechtesDiv,
  rightDiv,
  spamContainer,
  spanStyle,
  trusted,
} from './styles.js';

// https://www.designwiz.co/

function App() {
  return (
    <div /* Eigenes div als Container über den Zeilen drunter, damit sich nicht mehr als am Rand der Fensters ansiedelt */
    >
      {/* <Global css={{ global }} /> */}
      <Global
        styles={css`
          * {
            box-sizing: border-box !important;
          }
        `}
      />
      <nav css={navStyles}>
        <div css={innerDivOfLogo}>
          {/* <div css={imgDiv}> */}
          <img src={Logo} css={logoStyle} alt="Logo" />
          {/* </div> */}
        </div>
        <span css={spanStyle}> How it works </span>
        <span css={spanStyle}> Our work </span>
        <span css={spanStyle}> About us </span>
        <span css={spanStyle}> Login </span>
        <button css={iAmSpecial}> GET STARTED</button>
        {/* <header css={headsUp}> sad </header> */}
      </nav>
      <div css={hero}> </div>
      <header css={headsUp}>
        <div css={linkesDiv}>
          <div>
            {' '}
            <span css={newSpan}> NEW! </span>{' '}
            <p css={frontendParagraph}> Front-end development with Webflow </p>
          </div>{' '}
          <h1
            css={css`
              /* margin-top: 10px; */
              font-family: 'Open Sans', sans-serif;
              font-size: 185%;
              /* line-height: 48px; */
              font-weight: 600;
              text-decoration: none;
            `}
          >
            {' '}
            We Are Your Reliable, Affordable & Experienced Startup Design
            Partner!{' '}
          </h1>{' '}
          <div css={highQuality}>
            {' '}
            High-quality design work to help you grow your business. Save time
            and money with an expert design partner.{' '}
          </div>
          <button css={getStarted}> GET STARTED </button>
        </div>
        <div css={rechtesDiv}>
          {' '}
          <img
            src={girl}
            css={css`
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
              padding: 0px;
              background-color: transparent;
              opacity: 1;
              transition: opacity 200ms ease;
            `}
            alt="Blue hair coding girl, hire now!"
          />{' '}
        </div>
      </header>
      <div css={trusted}> Trusted by these amazing brands </div>
      <div css={spamContainer}>
        <div>
          {' '}
          <img
            src={spam1}
            css={css`
              width: 100%;
            `}
            alt="first spam"
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src={spam2}
            css={css`
              width: 100%;
            `}
            alt="second spam"
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src={spam3}
            css={css`
              width: 100%;
            `}
            alt="third spam"
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src={spam4}
            css={css`
              width: 100%;
            `}
            alt="fourth spam"
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src={spam5}
            css={css`
              width: 100%;
            `}
            alt="fifth spam"
          />{' '}
        </div>
      </div>
    </div>
  );
}

export default App;
