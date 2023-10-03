import { PATH } from "@/constants";
import styled from "styled-components";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  return (
    <S.Header>
      <img
        src="/images/logo.png"
        alt="logo"
        width={140}
        height={100}
      />
      <nav>
        <S.HeaderList>
          {Object.keys(PATH.MOVIES).map((name) => (
            <HeaderItem
              key={name}
              title={name}
              path={PATH.MOVIES[name as keyof typeof PATH.MOVIES]}
            />
          ))}
        </S.HeaderList>
      </nav>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme.default.black};
    z-index: 99;
    width: 100%;
  `,
  HeaderList: styled.ul`
    display: flex;
    justify-content: round;
    align-items: center;
    & > li {
      margin: 5px;
    }
  `,
};
