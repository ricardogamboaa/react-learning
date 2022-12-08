import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('testing on AddCategory component', () => { 
    const onNewCategory = () => { };
    const inputVal = 'Saitama'


    test('should change the input text value', () => { 
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: inputVal } } );
        
        expect( input.value ).toBe( inputVal );
    });
    
    test('should call onNewCategory if input has a value', () => { 
        const jestFn = jest.fn();
        render( <AddCategory onNewCategory={ jestFn } />);

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputVal } } );
        fireEvent.submit( form );

        expect( input.value ).toBe( '' );
        expect( jestFn ).toHaveBeenCalled();
        expect( jestFn ).toHaveBeenCalledTimes( 1 ); 
        expect( jestFn ).toHaveBeenCalledWith( inputVal );
    });
    
    test('should validate submit if input is empty', () => { 
        const jestFn = jest.fn();
        render( <AddCategory onNewCategory={ jestFn } />);

        const form = screen.getByRole( 'form' );
        fireEvent.submit( form );

        // expect( jestFn ).toBeCalledTimes( 0 );
        expect( jestFn ).not.toHaveBeenCalled();
    });
    
});