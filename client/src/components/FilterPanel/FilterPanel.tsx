import { useState } from "react";
import { ButtonCont, CategoryItem, CCheckbox, ClearButton, Container, CRadio, FiltersButton, FiltersCont, FiltersItem, Heading, PriceRange, RatingRange, SortItem } from "./filterPanel.css";

export const FilterPanel = () => {
  const [showFilters, setShowFilters] = useState("false");
  return (
    <Container>
      <ButtonCont>
        <FiltersButton onClick={() => setShowFilters(prevState => prevState === "false" ? "true" : "false")}>Filters</FiltersButton>
        <ClearButton>Clear All</ClearButton>
      </ButtonCont>
      <FiltersCont show={`${showFilters}`}>
        <FiltersItem>
          <Heading>Price</Heading>
          <PriceRange />
        </FiltersItem>
        <FiltersItem>
          <Heading>Category</Heading>
          <CategoryItem><CCheckbox />Car</CategoryItem>
          <CategoryItem><CCheckbox />Bike</CategoryItem>
          <CategoryItem><CCheckbox />Robot</CategoryItem>
        </FiltersItem>
        <FiltersItem>
          <Heading>Rating</Heading>
          <RatingRange />
        </FiltersItem>
        <FiltersItem>
          <Heading>Sort By</Heading>
          <SortItem><CRadio value="lth" />&nbsp;&nbsp;&nbsp;Price: Low to High</SortItem>
          <SortItem><CRadio value="htl" />&nbsp;&nbsp;&nbsp;Price: High to Low</SortItem>
        </FiltersItem>
      </FiltersCont>
    </Container>
  )
}