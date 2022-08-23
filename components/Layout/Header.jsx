import React from 'react'
import Head from 'next/head'
const Header = ({title,description,keywords}) => {
  return (
     <Head>
        <title>{title}</title>
        <meta charSet='utf8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#FACC15' />
     </Head>
  )
}
 Header.defaultProps = {
    title: 'GiveStar',
    description: '',
    keywords:''
}
export default Header