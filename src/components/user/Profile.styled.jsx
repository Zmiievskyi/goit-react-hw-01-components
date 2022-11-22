import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 25px 0px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px black;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: rgb(138, 138, 138);
  font-weight: 700;
  font-size: 16px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  background-color: rgb(197, 189, 189);

  ${(props) => {
    // console.log(props);
  }}
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  color: #000000;
`;

export const Tag = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;

export const Location = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  border-radius: 5px;
  color: rgb(133, 132, 132);
  font-weight: 400;
  font-size: 12px;
  & li:nth-child(odd) {
    background-color: rgb(219, 209, 209);
  }
  
`;

export const Item = styled.li`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border: solid 1px black;
`;

export const Label = styled.span`
  color: #000000;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
`;
