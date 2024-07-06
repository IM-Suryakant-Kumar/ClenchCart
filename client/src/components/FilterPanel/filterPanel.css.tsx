import { Box, Button, Checkbox, Slider, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({
  sx: {
    p: "0.25em",
    width: { xs: "100%", sm: "15rem" },
    position: { sm: "absolute" },
  }
})``

export const ButtonCont = styled(Stack).attrs({
  direction: "row",
  justifyContent: "space-around"
})``

export const FiltersButton = styled(Button).attrs({
  variant: "text",
  size: "large",
  sx: {
    textTransform: "capitalize",
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
  }
})``

export const ClearButton = styled(Button).attrs({
  variant: "text",
  size: "small",
  sx: {
    textTransform: "capitalize",
    fontFamily: "var(--font-cinzel)",
  }
})``

export const FiltersCont = styled(Stack).attrs({
  sx: {
    bgcolor: "#fff",
    width: { xs: "100%", sm: "15rem" },
    position: "absolute",
    left: { sm: 0 },
    zIndex: 3,
    transition: "all 0.5s ease-in-out",
  }
}) <{ show: string }>`
  left: ${props => props.show === "true" ? 0 : "-100%"};
`

export const FiltersItem = styled(Stack).attrs({
  sx: {
    mx: "1em",
    mb: "1em",
  }
})``

export const Heading = styled(Typography).attrs({
  variant: "caption",
  sx: {
    fontSize: { xs: "small", sm: "smaller" },
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
  }
})``

export const PriceRange = styled(Slider).attrs({
  min: 99,
  max: 1000,
  step: 100,
  valueLabelDisplay: "auto",
  marks: [{ value: 99, label: '99', }, { value: 1000, label: '1000', },],
  sx: {
    color: "var(--color-logo)",
    width: "90%",
    mx: "auto",
  }
})``

export const CategoryItem = styled.label.attrs({
  style: {
    fontSize: "small",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
})``

export const CCheckbox = styled(Checkbox).attrs({
  size: "small",
})``

export const RatingRange = styled(Slider).attrs({
  min: 1.0,
  max: 5.0,
  step: 0.1,
  valueLabelDisplay: "auto",
  marks: [{ value: 1.0, label: '1.0', }, { value: 5.0, label: '5.0', },],
  sx: {
    color: "var(--color-logo)",
    width: "90%",
    mx: "auto",
  }
})``

export const SortItem = styled.label.attrs({
  style: {
    margin: "1em 0 0 1em",
    fontSize: "small",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
})``

export const CRadio = styled.input.attrs({
  type: "radio",
  name: "sort",
})``