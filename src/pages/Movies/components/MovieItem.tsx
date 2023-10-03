import { IMovie, makeImagePath } from "@/api";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MovieItem = ({ movie }: { movie: IMovie }) => {
  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "images/logo.png";
  };

  return (
    <ShadowBox
      key={movie.id}
      initial={{ scale: 0.6, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
    >
      <CharacterImg
        src={makeImagePath(movie.poster_path)}
        alt="poster"
        onError={imageErrorHandler}
      />
      <h1>{movie.title}</h1>
    </ShadowBox>
  );
};

export const Skeleton = () => {
  return <ShadowBox />;
};

const ShadowBox = styled(motion.div)`
  border-radius: 28px;
  background: ${(props) => props.theme.default.gray};
  height: 300px;
  h1 {
    text-align: center;
    width: 100%;
  }
`;

const CharacterImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90%;
  border: none;
  border-radius: 28px;
`;
