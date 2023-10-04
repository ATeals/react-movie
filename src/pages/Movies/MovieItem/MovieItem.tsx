import { IMovie, makeImagePath } from "@/api";
import { Link } from "react-router-dom";
import { useMovieItem } from "./useMovieItem";

import * as S from "./MovieItem.style.tsx";

export const MovieItem = ({ movie }: { movie: IMovie }) => {
  const { imageErrorHandler, handleMouseOver, handelMouseOut } = useMovieItem(String(movie.id));

  return (
    <Link to={`movie/${movie.id}`}>
      <S.ShadowBox
        onMouseOver={handleMouseOver}
        onMouseOut={handelMouseOut}
        layoutId={"" + movie.id}
        key={movie.id}
        whileHover="hover"
        initial="normal"
        variants={boxVariants}
        transition={{ type: "tween" }}
      >
        <S.CharacterImg
          src={makeImagePath(movie.poster_path)}
          alt="poster"
          onError={imageErrorHandler}
        />
        <S.InFoBox variants={infoVariants}>
          <h1>{movie.title}</h1>
          <div>{movie.release_date}</div>
        </S.InFoBox>
      </S.ShadowBox>
    </Link>
  );
};

export const Skeleton = () => {
  return <S.ShadowBox />;
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duaration: 0.1,
      type: "tween",
    },
  },
};

const infoVariants = {
  normal: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};
