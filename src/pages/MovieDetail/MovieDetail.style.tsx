import styled from "styled-components";
import { motion } from "framer-motion";

export const Poster = {
  container: styled.div<{ $imgUrl: string }>`
    height: 70%;
    border: none;
    border-radius: 28px;
    background-size: cover;
    background-image: url(${(props) => props.$imgUrl});
    padding: 10px;
    position: relative;
    margin-bottom: 40px;
  `,

  title: styled.h1`
    position: absolute;
    bottom: 20%;
    font-size: 42px;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 20px;
  `,

  genres: styled.div`
    position: absolute;
    bottom: 10%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  `,

  description: styled.p`
    padding: 10px;
    font-size: 18px;
    overflow-y: clip;
    max-height: 10%;
  `,

  Box: styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;

    span {
      font-size: 18px;
    }
  `,
};

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled(motion.div)`
  width: 80%;
  height: 80%;
  background-color: ${(props) => props.theme.default.gray};
  border-radius: 25px;
`;
