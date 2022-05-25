import React from 'react'
import Head from 'next/head'
const Header = ({title,description,keywords}) => {
  return (
     <Head>
        <title>{title}</title>
        <meta charSet='utf8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta
           name='viewport'
           content='width=device-width, initial-scale=1.0'
        />
        
     </Head>
  )
}
 Header.defaultProps = {
    title: 'Give Star Supporter Application',
    description: '',
    keywords:''
}
export default Header