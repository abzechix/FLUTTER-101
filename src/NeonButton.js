import styled, { css } from 'styled-components';

const NeonButton = styled.button`
  background-color: #c092d5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px #c092d5;
  animation: glow 1.5s infinite alternate;

  ${props => props.outlined && css`
    border: 2px solid #c092d5;
  `}

  @keyframes glow {
    from { box-shadow: 0 0 10px #c092d5; }
    to { box-shadow: 0 0 20px #c092d5; }
  }
`;

export default NeonButton;