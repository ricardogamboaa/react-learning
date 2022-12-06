import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getGifsByCategory = async() => {
        const gifs = await getGifs( category );
        setImages( gifs );
        setIsLoading( false );
    }

    useEffect( () => {
        getGifsByCategory();
    }, []);

    return {
        images,
        isLoading
    }
}
