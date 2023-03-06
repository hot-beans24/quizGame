import React from 'react';

import styled from 'styled-components';

import Category from '../parts/Category';

import { categories } from '../data/categories';


const CategoryList = () => {
  return (
    <SDiv>
      {categories.map((category, index) => (
        <Category key={index} title={category.title} id={category.id} icon={category.icon} />
      ))}
    </SDiv>
  );
};

/* styledElements */

const SDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export default CategoryList
