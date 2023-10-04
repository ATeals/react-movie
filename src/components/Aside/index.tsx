import styled from "styled-components";

export const Aside = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AsideContainer>
        <IconBox>
          <i
            className="bi bi-arrow-up"
            onClick={handleClick}
          ></i>
        </IconBox>
      </AsideContainer>
    </>
  );
};

const AsideContainer = styled.aside`
  position: fixed;
  right: 0;
  margin: 40px;
  bottom: 0;
`;

const IconBox = styled.div`
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.default.red};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
