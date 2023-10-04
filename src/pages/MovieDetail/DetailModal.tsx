import { makeBgPath } from "@/api";

import { useParams } from "react-router-dom";
import * as S from "./MovieDetail.style";
import { useDetailModal } from "./useDetailModal";

export const DetailModal = () => {
  const { id, movie, handleModalClose } = useDetailModal();

  const { title, backdrop_path, overview, genres, vote_average, runtime, release_date, original_language } = movie!;

  return (
    <S.ModalContainer onClick={handleModalClose}>
      <S.Modal layoutId={id}>
        <S.Poster.container $imgUrl={makeBgPath(backdrop_path)}>
          <S.Poster.title>{title}</S.Poster.title>
          <S.Poster.genres>
            {genres.map((genre) => (
              <span key={String(genre.id)}>#{genre.name}</span>
            ))}
          </S.Poster.genres>
        </S.Poster.container>

        <S.Poster.description>{overview}</S.Poster.description>
        <S.Poster.Box>
          <span>{original_language.toUpperCase()}</span>
          <span> {runtime}분</span>
          <span>{vote_average}점</span>
          <span>{release_date}</span>
        </S.Poster.Box>
      </S.Modal>
    </S.ModalContainer>
  );
};

export const Skeleton = () => {
  const { id } = useParams();
  return (
    <S.ModalContainer>
      <S.Modal layoutId={id} />
    </S.ModalContainer>
  );
};
