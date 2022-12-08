import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Testing on GifExpertApp', () => { 
    const inputVal = 'Dragon Ball';
    
    test('should add new category if does not exist', () => { 
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole( 'form' );
        
        fireEvent.input( input, { target: { value: inputVal } } );
        fireEvent.submit( form );
        
        expect( screen.getByText( inputVal ) ).toBeTruthy();
    });
    
    test('should avoid to create a new category if it exists', async() => { 
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole( 'form' );
        
        fireEvent.input( input, { target: { value: inputVal } } );
        fireEvent.submit( form );
        fireEvent.input( input, { target: { value: inputVal } } );
        fireEvent.submit( form );

        expect( (await screen.findAllByText( inputVal )).length ).toBe( 1 );
    }); 
});