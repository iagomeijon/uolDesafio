import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../../components/SearchBar';


describe("SearchBar teste", () => {
    render(<SearchBar getSearch={() => {}} />);
    const {getByText} = screen;
    expect(getByText('Buscar')).toBeInTheDocument();
});