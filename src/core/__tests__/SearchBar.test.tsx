import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../../components/SearchBar';


describe("SearchBar component test", () => {
    test("Find Buscar label", () => {
         render(<SearchBar getSearch={() => {}} />);
         const {getByText} = screen;
         const buttonLabel = getByText('Buscar');
         expect(buttonLabel).toBeInTheDocument();
    });

});