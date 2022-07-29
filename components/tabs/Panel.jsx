import React, { useEffect, useState } from 'react'

const Panel = ( { children, title } ) => {
    const [ _children, setChildren ] = useState( children )
    useEffect(() => {
       setChildren(children)

      
    }, [children])
    
   return <li title={title}>{_children}</li>
}

export default Panel
