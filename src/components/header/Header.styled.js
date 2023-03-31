import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 40px;
  background-color: #101820FF;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
`;

export const CurrencyList = styled.ul`
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  padding: 0 10px;
`;

export const CurrencyUAH = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: #fff;
`;

export const ItemCurrency = styled.li`
  display: flex;  
  justify-content: center;
  color: #fff;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;