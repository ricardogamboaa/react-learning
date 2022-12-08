import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' );

describe('test component gifGrid', () => { 
    const category = 'One Punch';
    
    test('should show loading starting', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={ category } />);
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });
    
    test('should show images when useFetchGifs images are loaded', () => { 
        const gifs = [
            {
                id: 'abc',
                title: 'Goku',
                url: 'goku.com'
            },
            {
                id: 'def',
                title: 'Saitama',
                url: 'saitama.com'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={ category } />);
        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );
    });
});