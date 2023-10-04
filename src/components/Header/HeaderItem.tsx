import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderItem = ({ title, path }: { title: string; path: string }) => {
  const { pathname } = useLocation();

  const category = pathname.split("/")[1];

  return (
    <li>
      <Link to={path}>
        {category === path ? (
          <HighLight
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </HighLight>
        ) : (
          <h1>{title}</h1>
        )}
      </Link>
    </li>
  );
};

const HighLight = styled(motion.h1)`
  color: ${(props) => props.theme.default.red};
`;
