import React, { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useUploadFileMutation } from '../../features/upload/uploadApiSlice'

const FieldFileupload = ({
   id,
   name,
   type,
   placeholder,
   error,
   valid,
   value,
   title,
   mediaType,
   disabled,
   hidden,
   label,
   required,
   setValues,
   values,
   inputHandler,
   validationHandler,
   campaignHeaderImageData,
   setCampaignHeaderImageData,
}) => {
   const [uploadFile, { data, isError, isLoading, isSuccess }] =
      useUploadFileMutation()
   const [selectedFile, setSelectedFile] = useState()
   const [selectedFileData, setSelectedFileData] = useState()
   const [selectedFileName, setSelectedFileName] = useState()

   const [fileUrl, setFileUrl] = useState()

   const [preview, setPreview] = useState()
   // create a preview as a side effect, whenever selected file is changed
   useEffect(() => {
      //   return () => URL.revokeObjectURL(objectUrl)
   }, [selectedFile, value])

   const onSelectFile = async e => {
      if (!e.target.files || e.target.files.length === 0) {
         setSelectedFile(undefined)
         return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
      setSelectedFileName(e.target.files[0].name)
      setFileUrl(URL.createObjectURL(e.target.files[0]))

      const fileData = new FormData()
      fileData.append('file', e.target.files[0], e.target.files[0].name)

      console.log('fileData', fileData)

      
      setCampaignHeaderImageData(fileData)
      
   }

   return (
      <div className='flex justify-center items-center w-full'>
         <label
            htmlFor={name}
            className={`flex flex-col justify-center items-center w-full h-64 overflow-hidden  bg-white rounded-xl border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100 `}>
            {fileUrl ? (
               <img className='w-full' src={fileUrl} />
            ) : (
               <div className='flex flex-col justify-center items-center pt-5 pb-6'>
                  <svg
                     width='72'
                     height='72'
                     viewBox='0 0 72 72'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M35.9998 0.964844C16.6226 0.964844 0.912109 16.6754 0.912109 36.0526C0.912109 55.4298 16.6226 71.1403 35.9998 71.1403C55.377 71.1403 71.0875 55.4298 71.0875 36.0526C71.0671 16.6841 55.3682 0.985314 35.9998 0.964844ZM35.9998 65.2923C19.8507 65.2923 6.76006 52.2017 6.76006 36.0526C6.76006 19.9034 19.8507 6.81279 35.9998 6.81279C52.149 6.81279 65.2396 19.9034 65.2396 36.0526C65.2221 52.1929 52.1402 65.2748 35.9998 65.2923Z'
                        fill='#ECEDEE'
                     />
                     <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M52.0818 22.8948H47.6958C47.1578 22.8451 46.649 22.6346 46.2338 22.2896L42.4531 18.5089C41.4911 17.6141 40.2367 17.0937 38.9239 17.0469H33.0759C31.763 17.0937 30.5087 17.6141 29.5467 18.5089L25.766 22.2896C25.3508 22.6346 24.842 22.8451 24.304 22.8948H19.918C16.687 22.8948 14.0701 25.5118 14.0701 28.7428V43.3627C14.0701 46.5936 16.687 49.2106 19.918 49.2106H52.0818C55.3127 49.2106 57.9297 46.5936 57.9297 43.3627V28.7428C57.9297 25.5118 55.3127 22.8948 52.0818 22.8948M42.5788 36.0527C42.5788 39.6872 39.6344 42.6317 35.9999 42.6317C32.3654 42.6317 29.4209 39.6872 29.4209 36.0527C29.4209 32.4182 32.3654 29.4738 35.9999 29.4738C39.6344 29.4738 42.5788 32.4182 42.5788 36.0527Z'
                        fill='#ECEDEE'
                     />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                     <span className='font-semibold'>
                        Click to upload a photo
                     </span>{' '}
                     or drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>
                     SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
               </div>
            )}
            <input
               type={type}
               name={name}
               id={name}
               title={title}
               required
               className='hidden'
               //    value={ value }
               onChange={e => {
                  onSelectFile(e)
                  // inputHandler(e)
               }}
            />
         </label>
      </div>
   )
}

export default FieldFileupload
