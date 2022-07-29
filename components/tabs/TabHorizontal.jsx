import React, { useEffect, useState } from 'react'

const initialTabs = [
   { title: 'Your Campaigns', href: '#', current: true },
   { title: 'Pinned', href: '#', current: false },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const TabHorizontal = ( { children, data } ) => {
   
   
   const [ _children, setChildren ] = useState( children )
 
   
   let _data = []
   if (_children) {
      _data = _children.map( ( item, idx ) => ( {
         title: item.props.title,
         body: item,
         href: item.props?.href || '',
         current: item.props.current || false,
      } ) )
      
 
      
      data = _data
   }
    
    

   const [tabs, setTabs] = useState(data || initialTabs)
   
    
   useEffect( () => {
       
      setChildren( children )
      let _data = []
      
         _data = children.map((item, idx) => ({
            title: item.props.title,
            body: item,
            href: item.props?.href || '',
            current: item.props.current || false,
         }))
        
      _data
      setTabs(_data)
      
    }, [children])
    
   const toggleTabs = e => {
      const _tabs = [...tabs]
      _tabs.map((tab, idx) => {
         if (tab.title.toUpperCase() == e.target.value.toUpperCase())
            _tabs[idx].current = true
         else _tabs[idx].current = false
      })
      setTabs(_tabs)
   }
    const toggleNavTabs = e => {
       e.preventDefault()
       const _tabs = [ ...tabs ]
 
      _tabs.map((tab, idx) => {
         if (tab.title.toUpperCase() == e.target.title.toUpperCase())
            _tabs[idx].current = true
         else _tabs[idx].current = false
      })
      setTabs(_tabs)
   }

   return (
      <div>
         <div className='sm:hidden  '>
            <label htmlFor='tabs' className='sr-only'>
               Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
               id='tabs'
               name='tabs'
               className='block w-full px-3 pl-3 py-3 font-medium text-md rounded-xl shadow-sm focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md transition-all ease-out duration-300'
               defaultValue={tabs.find(tab => tab.current).title}
               onChange={toggleTabs}>
               {tabs.map(tab => (
                  <option key={tab.title}>{tab.title}</option>
               ))}
            </select>
         </div>
         {/* {Mobile version} */}
         <div className='hidden sm:block'>
            <nav className='flex space-x-4 justify-between' aria-label='Tabs'>
               {tabs.map(tab => (
                  <a
                     key={tab.title}
                     href={tab.href}
                     name={tab.title}
                     title={tab.title}
                     onClick={toggleNavTabs}
                     className={classNames(
                        tab.current
                           ? 'bg-white text-gray-700'
                           : 'bg-gray-200 text-gray-500 hover:text-gray-700',
                        'w-full items-center text-center px-3 pl-3 py-3 font-medium text-lg rounded-xl  focus:outline-none  focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md  transition-all ease-out duration-300'
                     )}
                     aria-current={tab.current ? 'page' : undefined}>
                     {tab.title}
                  </a>
               ))}
            </nav>
         </div>
         <ul>{tabs.map(tab => tab.current && <ul>{tab.body}</ul>)}</ul>
      </div>
   )
}

export default TabHorizontal
