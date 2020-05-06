import styled from 'styled-components';

/* UI Components for PhoneList.js
  Added seperately for better readability */

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    padding: 0;
  }
`;
export const Item = styled.div`
  width: 200px;
  margin: 17px 4%;
  @media (max-width: 930px) {
    margin-left: 1%;
    margin-right: 1%;
  }
  @media (max-width: 460px) {
    width: 46%;
    margin: 2%;
  }
`;
export const ItemContent = styled.div`
  border-radius: 16px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translate(4px, -12px);
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.06);
  }
`;
