import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
        <form onSubmit={ onSubmit } aria-label='form' > 
            <input type="text" 
                placeholder='buscar gifs' 
                value={ inputvalue } 
                onChange={ onInputChange } />
        </form>
    )
}
    
    
AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
}
    