import { motion } from "framer-motion";
import styled from "styled-components";

export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열을 동일한 너비로 설정 */
  grid-gap: 20px; /* 열과 행 사이의 간격 설정 */
  padding: 20px;
  margin-top: 40px;
`;
