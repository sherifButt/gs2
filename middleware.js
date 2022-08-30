import { NextRequest, NextResponse } from 'next/server'

export const config = {
   matcher: '/basecamp/:path*',
}

export const middleware = ( req, res ) => {
    const cookies = req.cookies
    
    if ( !cookies.isAuthenticated ) return
    
    console.log( 'cookies', cookies )
    // if (req.cookies.isAuthenticated.split('=')[1]) return
    
    return NextResponse.rewrite(new URL('/',req.url))
}
