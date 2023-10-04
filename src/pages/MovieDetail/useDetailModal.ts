import { getMovie } from "@/api";
import { PATH, QUERY_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useDetailModal = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data } = useQuery([QUERY_KEY.MOVIE, id], () => getMovie(id!));

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget !== e.target) return;

    navigate(pathname.replace(`${PATH.DETAIL}/${id}`, ""));
  };

  return { id, movie: data, handleModalClose };
};
