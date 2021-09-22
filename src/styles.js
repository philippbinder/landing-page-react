/*

Notizen:
% und vw und vh orientiert sich am parent container, absoulte Größen nicht
passt etwas mit (absoluten Zahlen) nicht in einen Container, dann hüpft es aus dem Container raus
auch gap von einem grid kann den Inhalt aus dem Container pushen
margin right vom Text im linken Div könnte den Inhalt des rechten Divs rauspushen
den Divs in den Containern Hintergrundfarben geben um genau zu sehen wo sie liegen udn wie sich verändern
grid columns und rows genauer anschauen - kann verwendet werden, um zb ein Bild in der rechten Hälfte (also 50% der Spalten auf der re Seite) über alle Rows gehen zu lassen während sich links der Text in schön lesbaren Zeilen aufteilt.
  Flexbox mit 2 Divs und display flex ordnet die zwei Divs im Motherdiv nebeneinander an, anschließend muss noch mit align items und justify content der Feinschliff vorgenommen werden

*/

import './images/backgroundImage_blogging-p-500.png';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import img1 from './images/signaturit1.png';

// export const global = css`
//   * {
//     box-sizing: border-box;
//     background-color: red;
//   }
// `;

export const navStyles = css`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 22vw;
  margin-right: 22vw;
  /* justify-content: space-b; */
  margin-top: 20px;
  /* padding-bottom: 20px; */
  border-bottom: 0px none #d6c0a7;
  background-color: #fff;
  /* box-sizing: border-box;
  border: 3px solid blue; */
  /* #fff; */
`;
// use grid? or column? for the nav elements for the distance between them
export const innerDivOfLogo = css`
  margin-left: 64px;
  margin-right: auto;
  float: left;
`;

export const motherSpan = css`
  margin-right: 120px;
  float: right;
`;

export const spanStyle = css`
  float: right;
`;

export const iAmSpecial = css`
  float: right;
  /* margin-right: 24px;
  margin-top: 5px; */
  box-sizing: border-box;
  background-color: #066756;
  border-radius: 8px;
  color: #fff;
  padding: 12px 17px;
  align-items: center;
  font-weight: 600;
  margin-right: 20px;

  /* p {
    padding: 12px, 17px;
  } */
`;

export const imgDiv = css`
  height: 64px;
  margin-left: 100px;
  width: auto;
  /* float: right; */
`;

export const logoStyle = css`
  height: 36px;
`;

export const hero = css`
  align-items: center;
  background-color: #6999be;
  background-image: linear-gradient(167deg, #fff 53%, #fce8d1 0, #fce8d1 103%);
  opacity: 1;
  display: block;
  height: 20vh;
  padding-top: 40px;
  padding-bottom: 60px;
  -webkit-box-align: center;
  line-height: 20px;
`;

// copied from Vorlage
// export const headsUp = css`
//   display: flex;
//   margin-top: 40px;
//   padding-top: 0px;
//   padding-right: 0px;
//   padding-left: 0px;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//   flex-direction: row;
//   -webkit-box-align: center;
//   align-items: center;
//   flex: 1;
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 940px;
// `;
export const headsUp = css`
  display: grid;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: 1fr 2fr 1fr 1fr; */
  /* 1/6 2/6 1/6 1/6; */
  /* grid-row-gap: 1/6; */
  /* grid-gap: 60px; */
  /* align-content: center;
  justify-content: center; */
  /* border: 3px solid blue; */
  height: 50vh;
  width: 50.9vw;
  margin-left: 33vw;
  margin-right: 22vw;
  position: relative;
  top: -18vh;
  right: 7vw;
  /* overflow: hidden; */
`;

export const linkesDiv = css`
  /* background-color: red; */
`;

export const rechtesDiv = css`
  /* background-color: blue; */
`;

export const newSpan = css`
  padding: 3px 8px;
  border: 1px solid #d6c0a7;
  border-radius: 4px;
  background-color: #d6c0a7;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
  margin-right: 10px;
`;

export const frontendParagraph = css`
  display: inline-block;
  /* margin-top: 20px;s */
  /* margin-right: 10px; */
  /* border: 1px none #d6c0a7;
  border-radius: 4px;
  background-color: transparent; */
  color: #926f46;
  font-size: 80%;
  font-style: normal;
  font-weight: 400;
`;

export const highQuality = css`
  margin-top: 25px;
  margin-bottom: 15px;
  font-family: 'Open Sans', sans-serif;
  color: #696663;
  font-size: 90%;
  line-height: 28px;
  font-weight: 400;
  text-align: left;
`;

export const getStarted = css`
  margin-top: 10px;
  /* margin-right: auto;
  margin-left: auto; */
  font-weight: 600;
  text-align: left;
  text-decoration: none;
  transition: opacity 300ms ease;
  color: #fff;
  border-radius: 8px;
  background-color: #066756;
  padding: 12px 17px;
`;
//   width: 120%;
//   max-width: 120%;
//   margin-top: 0px;
//   margin-bottom: 0px;
//   margin-left: -15px;
//   padding: 0px;
//   background-color: transparent;
//   opacity: 1;
//   transition: opacity 200ms ease;
// `;

// export const leftDiv = css`
//   border: 3px solid red;
//   margin-top: 2vh;
//   margin-left: 2vw;
//   padding: 100px 40px;
// `;

// export const rightDiv = css`
//   border: 3px solid green;
//   margin-top: 20vh;
//   margin-right: 20vw;
// `;

// export const headsUp = css`
//   /* display: flex; */
//   /* align-content: center; */
//   border: 3px solid blue;
//   height: 300px;
//   width: 300px;
//   margin-right: 500px;
//   /* margin-left: 33vw;
//   margin-right: 22vw;
//   */
//   position: relative;
//   top: 30vh;
//   right: 7vw;
// `;
export const trusted = css`
  text-align: center;
  width: 50.9vw;
  margin-left: 26vw;
  height: 3vh;
  font-size: 14px;
  line-height: 28px;
  font-weight: 400;
  color: #d6c0a7;
`;

export const spamContainer = css`
  display: flex;
  gap: 5%;
  height: 50vh;
  width: 50.9vw;
  margin-left: 26vw;
  /* position: relative; */
  top: -18vh;
  right: 7vw;
  justify-content: space-around;
  /* background-color: green; */
  /* background-color: red; */
  /* overflow: hidden; */
`;
