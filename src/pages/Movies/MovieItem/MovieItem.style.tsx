import styled from "styled-components";
import { motion } from "framer-motion";

export const InFoBox = styled(motion.div)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  bottom: 15%;
  h1 {
    font-weight: 600;
  }
  div {
    margin: 5px;
  }
`;

export const ShadowBox = styled(motion.div)`
  position: relative;
  border-radius: 28px;
  background: ${(props) => props.theme.default.gray};
  height: 300px;
  h1 {
    text-align: center;
    width: 100%;
  }
`;

export const CharacterImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 28px;
`;
