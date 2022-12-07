import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"



describe('gif item component tests', () => { 
    
    const title = "My Title"
    const url = "https://media0.giphy.com/media/DuVRadBbaX6A8/giphy.gif?cid=071c1690ixpua1kwp4zpbhimm1ir5dkao6rvadzbf2twwg4r&rid=giphy.gif&ct=g";

    test('should evaluate against snapshot', () => { 
        
        const { container } = render( <GifItem 
                                        title={ title }
                                        url={ url } /> );        
        expect( container ).toMatchSnapshot();
     });
 });