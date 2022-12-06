import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState([ 'One Punch' ]);
  
  const onAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return;
    setCategories( [ newCategory, ...categories ] );
  }
  
  return (
    <>
      {/* title */}
      <h1>Gif Expert App</h1>
      
      {/* input */}
      <AddCategory 
          onNewCategory={ ( value ) => onAddCategory( value ) } />
      <hr />
      {/* lista */}
      {
        categories.map( c => ( <GifGrid 
                                  key={ c }
                                  category={ c } /> 
        ))
      }
    </>
  )
}
    