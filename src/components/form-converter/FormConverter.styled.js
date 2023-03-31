import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	padding-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconSwitch = styled.div`
	padding: 5px;
  margin: 5px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputSelect = styled.select`
  width: 90px;
	margin-right: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  font-size: 24px;
`;

export const InputOptions = styled.option`
  font-size: 24px;
  width: 100px;
`;

export const InputValue = styled.input`
  width: 250px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

export const ButtonSubmit = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #cfd0d1;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

   &:hover, :focus {
      background-color: #b7bdc7;
    }
  `;