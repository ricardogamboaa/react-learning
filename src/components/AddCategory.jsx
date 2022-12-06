
import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputvalue, setInputvalue] = useState('')
    
    const onInputChange = ( event ) => {
        setInputvalue( event.target.value )
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        const val = inputvalue.trim(); 
        if ( val.length <= 1 ) return;
        onNewCategory( val );
        setInputvalue('');
    }
    
    return (
        <form onSubmit={ onSubmit }> 
            <input type="text" 
                placeholder='buscar gifs' 
                value={ inputvalue } 
                onChange={ onInputChange } />
        </form>
    )
}
    
    
    
    