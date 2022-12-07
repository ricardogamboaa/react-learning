import { getGifs } from "../../src/helpers/getGifs";

describe('testing on function that get gifs', () => { 
    const category = 'One Punch';


    test('should return a gifs array', async() => { 
        
        const gifs = await getGifs( category );
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
     });
 });

