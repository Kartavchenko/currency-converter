import { useState } from "react";
import { TbSwitchVertical } from "react-icons/tb";
import { RotatingLines } from "react-loader-spinner";
import {
  fetchRequestFirstField,
  fetchRequestSecondField,
} from "../../service/fetchCurrency";
import {
  FormWrapper,
  Form,
  InputWrapper,
  InputValue,
  InputSelect,
  InputOptions,
  IconSwitch,
  ButtonSubmit,
} from "./FormConverter.styled";

export default function FormConverter() {
  const [convertTo, setConvertTo] = useState("USD");
  const [convertFrom, setConvertFrom] = useState("UAH");
  const [amountConvertFirstField, setAmountConvertFirstField] = useState("");
  const [amountConvertSecondField, setAmountConvertSecondField] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currencyArray = ["UAH", "USD", "EUR"];

  const getAmountFromFirstField = async () => {
    try {
      setIsLoading(true);
      const response = await fetchRequestFirstField(
        convertTo,
        convertFrom,
        amountConvertFirstField
      );

      if (!response.ok) {
        throw new Error(response.status);
      }

      setAmountConvertSecondField(response.result);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getAmountFromSecondField = async () => {
    setIsLoading(true);
    try {
      const response = await fetchRequestSecondField(
        convertFrom,
        convertTo,
        amountConvertSecondField
      );

      setAmountConvertFirstField(response.result);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeAmount = (e) => {
    const { name, value } = e.target;
    if (name === "firstField") {
      setAmountConvertFirstField(value);
      setAmountConvertSecondField("");
    }
    if (name === "secondField") {
      setAmountConvertSecondField(value);
      setAmountConvertFirstField("");
    }
  };

  const handleChangeCurrency = (e) => {
    const { name, value } = e.target;
    if (name === "firstSelect") {
      setConvertFrom(value);
    } else if (name === "secondSelect") {
      setConvertTo(value);
    }
  };

  const renderSelects = () => {
    const option = currencyArray.map((item) => {
      return (
        <InputOptions key={item} value={item}>
          {item}
        </InputOptions>
      );
    });

    return option;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amountConvertFirstField) {
      getAmountFromFirstField();
    } else if (amountConvertSecondField) {
      getAmountFromSecondField();
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputSelect
            name="firstSelect"
            onChange={handleChangeCurrency}
            value={convertFrom}
          >
            {renderSelects()}
          </InputSelect>
          <InputValue
            name="firstField"
            type="number"
            min={0}
            onChange={handleChangeAmount}
            value={amountConvertFirstField}
          />
        </InputWrapper>
        <IconSwitch>
          <TbSwitchVertical />
        </IconSwitch>
        <InputWrapper>
          <InputSelect
            name="secondSelect"
            onChange={handleChangeCurrency}
            value={convertTo}
          >
            {renderSelects()}
          </InputSelect>
          <InputValue
            name="secondField"
            type="number"
            min={0}
            onChange={handleChangeAmount}
            value={amountConvertSecondField}
          />
        </InputWrapper>
        {isLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="56"
            visible={true}
          />
        ) : (
          <ButtonSubmit type="submit">exchange</ButtonSubmit>
        )}
      </Form>
    </FormWrapper>
  );
}
