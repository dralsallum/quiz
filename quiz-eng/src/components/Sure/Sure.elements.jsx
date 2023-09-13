import styled from "styled-components";

export const SureWrapper = styled.div`
  grid-column: 1;
  grid-row: 3;
  position: relative;
  z-index: 110;
  margin-bottom: 0.5rem;
`;
export const SureContainer = styled.div`
  transition: max-height 0.3s ease-in-out;
  width: 100%;
  @media screen and (max-width: 700px) {
    background: white;
    border-top: 2px solid lightgrey;
    max-height: 140px;
    overflow: visible;
    bottom: 0;
    position: absolute;
}
  }
`;
export const SureSubContainer = styled.div`
  grid-gap: 8px 16px;
  display: grid;
  justify-items: stretch;
`;

export const SureButtonContainer = styled.div`
  position: relative;
`;
export const SureButtonSpan = styled.span`
  color: white;
  letter-spacing: 0;
`;
export const SureButton = styled.button`
  cursor: pointer;
  min-width: 150px;
  width: 100%;
  background-color: #5ac900;
  border: none;
  border-bottom: 4px solid transparent; /* Replaced variable --__internal__lip-width */
  color: rgb(255, 255, 255); /* Replaced variable --web-ui_button-color */
  height: 50px; /* Replaced variable --web-ui_button-height */
  padding: 0 16px; /* Replaced variable --web-ui_button-padding */
  transition: filter 0.2s, transform 0.2s; /* Replaced variable --web-ui_button-transition-lip */
  border-radius: 12px; /* Replaced variable --__internal__border-radius */
  font: 700 15px / 1.2 din-round, sans-serif; /* Replaced font variables */
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 6px 8px #518210;

  &:hover {
    background-color: #76d925;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 4px 8px #73b420;
    box-shadow: none;
    transition: box-shadow 0.2s;
    z-index: -1;
  }
`;
