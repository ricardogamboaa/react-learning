import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('testing on AddCategory component', () => { 
    const onNewCategory = () => { };

    test('should change the input text value', () => { 
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe( 'Saitama' );
     });
 });