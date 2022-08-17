import lottie from 'lottie-web/build/player/lottie_light'

import { useEffect, useRef } from 'react'

const Lottie = ({ className, name, loop, autoplay, renderer, path }) => {
   const animationContainer = useRef(null)
    const anim = useRef( null )
    
    useEffect( () => {
        if ( animationContainer.current )
        {
            anim.current = lottie.loadAnimation( {
                container: animationContainer.current,
                renderer,
                loop,
                autoplay,
                animationData: path
                    ? require( `./animationData/${ path }` )
                    : require( `./animationData/check.json` ),
                name,
            } )


               return () => anim.current?.destroy()
        }
       
   }, [])

   return <div key={path} className={`container ${className}`} ref={animationContainer}></div>
}

Lottie.defaultProps = {
   loop: true,
   autoplay: true,
   renderer: 'svg',
   name: 'social',
}

export default Lottie
