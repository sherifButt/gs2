import { Transition } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../redux/features/postsSlicer'
const PostLastUpdate = () => {
   const dispatch = useDispatch()
   const {
      id,
      author: { name },
      comment,
      comments,
      impressions: { loves, stars, likes, hot },
   } = useSelector(store => store.posts.Posts)

   return (
      <div>
         <div className='flex flex-col justify-center items-start w-[500px] gap-[11px] p-[17px] rounded-xl bg-white'>
            <div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0'>
               <div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10'>
                  
               </div>
               <div className='flex flex-col justify-start items-start self-stretch flex-grow relative gap-[9px] pl-[21px] pb-5'>
                  <p className='flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-black'>
                     Natasha
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-base text-left text-[#777]'>
                     1 day
                  </p>
                  <p className='self-stretch flex-grow-0 flex-shrink-0 w-[392.37px] text-base text-left text-black'>
                     Just completed my first training session,
                     absolutely EXHAUSTED. Thanks so much everyone for
                     your support.
                  </p>
               </div>
            </div>
            <div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5'>
               <div className='flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[15px] py-[19px] border border-[#eeeff0]'>
                  <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 gap-[11px]'>
                     <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5'>
                        <svg
                           width={27}
                           height={27}
                           viewBox='0 0 27 27'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           className='flex-grow-0 flex-shrink-0 w-[26.32px] h-[26.32px]'
                           preserveAspectRatio='none'>
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M0.00385938 13.1604C0.00385938 5.89468 5.89391 0.00461926 13.1597 0.00461926C20.4254 0.00461926 26.3155 5.89467 26.3155 13.1604C26.3155 20.4262 20.4254 26.3162 13.1597 26.3162C5.89392 26.3162 0.00385938 20.4262 0.00385938 13.1604Z'
                              fill='#EA0A0A'
                           />
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M20.8423 9.54148C20.1933 8.27775 18.9838 7.39647 17.5824 7.16713C16.181 6.9378 14.7538 7.38695 13.7361 8.37778L13.1552 8.90926L12.5926 8.39683C11.5769 7.38626 10.1354 6.92827 8.72317 7.16781C7.31908 7.38695 6.10751 8.27026 5.46806 9.5408C4.60547 11.2333 4.93812 13.2905 6.29187 14.6236L12.6674 21.1947C12.7953 21.3268 12.9715 21.4009 13.1552 21.4009C13.3388 21.4009 13.515 21.3268 13.6429 21.1947L20.0103 14.6359C21.3695 13.3014 21.7062 11.2394 20.8423 9.54149'
                              fill='#FFF0F0'
                           />
                        </svg>
                        <svg
                           width={27}
                           height={27}
                           viewBox='0 0 27 27'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           className='flex-grow-0 flex-shrink-0 w-[26.32px] h-[26.32px]'
                           preserveAspectRatio='none'>
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M0.313517 13.1604C0.313517 5.89468 6.20581 0.00461926 13.4743 0.00461926C20.7428 0.00461926 26.6351 5.89467 26.6351 13.1604C26.6351 20.4262 20.7428 26.3162 13.4743 26.3162C6.20582 26.3162 0.313517 20.4262 0.313517 13.1604Z'
                              fill='#9AA8C9'
                           />
                           <mask
                              id='mask0_6_96'
                              style={{ maskType: 'alpha' }}
                              maskUnits='userSpaceOnUse'
                              x={4}
                              y={3}
                              width={19}
                              height={18}>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M4.71969 20.9109V3.24736H22.2282V20.9109H4.71969Z'
                                 fill='white'
                              />
                           </mask>
                           <g mask='url(#mask0_6_96)'>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M22.1584 9.62225C21.9938 9.18033 21.573 8.88721 21.1018 8.88571H16.5275C16.3682 8.88571 16.2262 8.785 16.1728 8.63468L14.5308 3.98016C14.3662 3.53973 13.9454 3.24737 13.475 3.24737C13.0046 3.24737 12.5837 3.53973 12.4191 3.98016L12.4154 3.99218L10.7772 8.63468C10.7245 8.785 10.5825 8.88571 10.4232 8.88571H5.84743C5.37324 8.88571 4.94941 9.18183 4.78709 9.62826C4.62477 10.0739 4.76004 10.5737 5.12375 10.8781L9.01943 14.1099C9.13892 14.2091 9.18476 14.3707 9.13591 14.518L7.49918 19.4266C7.34437 19.8926 7.5082 20.4051 7.90423 20.6938C8.30101 20.9831 8.83908 20.9824 9.23511 20.6923L13.2525 17.7461C13.3848 17.6491 13.5644 17.6491 13.6967 17.7461L17.7126 20.6915C18.1086 20.9831 18.6467 20.9839 19.0442 20.6953C19.4417 20.4059 19.6056 19.8926 19.45 19.4266L17.8133 14.515C17.7644 14.3677 17.8103 14.2061 17.9298 14.1069L21.833 10.8706C22.1922 10.564 22.3222 10.0657 22.1584 9.62225'
                                 fill='white'
                              />
                           </g>
                        </svg>
                        <svg
                           width={27}
                           height={27}
                           viewBox='0 0 27 27'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           className='flex-grow-0 flex-shrink-0 w-[26.32px] h-[26.32px]'
                           preserveAspectRatio='none'>
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M0.632932 13.1604C0.632932 5.89468 6.52298 0.00461926 13.7887 0.00461926C21.0545 0.00461926 26.9445 5.89467 26.9445 13.1604C26.9445 20.4262 21.0545 26.3162 13.7887 26.3162C6.52299 26.3162 0.632932 20.4262 0.632932 13.1604Z'
                              fill='#7CA982'
                           />
                           <mask
                              id='mask0_6_102'
                              style={{ maskType: 'alpha' }}
                              maskUnits='userSpaceOnUse'
                              x={4}
                              y={3}
                              width={19}
                              height={18}>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M4.88942 20.2759V3.892H22.6885V20.2759H4.88942Z'
                                 fill='white'
                              />
                           </mask>
                           <g mask='url(#mask0_6_102)'>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M22.6885 11.7543C22.687 10.8138 21.9251 10.0519 20.9844 10.0504H15.89C15.8325 10.0504 15.7779 10.0239 15.7416 9.97924C15.706 9.93381 15.6923 9.87474 15.7052 9.8187C16.0006 8.6464 16.1831 7.44761 16.2505 6.24048C16.2831 5.6089 16.0786 4.98716 15.6772 4.49871C15.3424 4.11703 14.8607 3.89665 14.3532 3.89287C13.9617 3.87319 13.5792 4.01404 13.2944 4.28288C13.0088 4.55173 12.846 4.92507 12.8422 5.31659C12.871 8.21551 10.6238 10.629 7.72971 10.8077H5.45749C5.14392 10.8077 4.88943 11.0622 4.88943 11.3757V18.1914C4.88943 18.5049 5.14393 18.7593 5.45749 18.7593C8.89006 18.7593 10.0088 19.2402 10.9957 19.6628C11.8652 20.0853 12.8225 20.2943 13.789 20.2739H18.7121C19.3006 20.2739 19.8475 19.9695 20.1588 19.4697C20.4701 18.9706 20.5011 18.3458 20.2413 17.8172C21.073 17.3947 21.4108 16.3822 20.9988 15.5454C21.8304 15.1228 22.1682 14.1103 21.7562 13.2735C22.328 12.9827 22.6885 12.3958 22.6885 11.7543'
                                 fill='white'
                              />
                           </g>
                        </svg>
                        <svg
                           width={28}
                           height={27}
                           viewBox='0 0 28 27'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           className='flex-grow-0 flex-shrink-0 w-[26.32px] h-[26.32px]'
                           preserveAspectRatio='none'>
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M0.942599 13.1604C0.942599 5.89468 6.83489 0.00461926 14.1034 0.00461926C21.3719 0.00461926 27.2642 5.89467 27.2642 13.1604C27.2642 20.4262 21.3719 26.3162 14.1034 26.3162C6.8349 26.3162 0.942599 20.4262 0.942599 13.1604Z'
                              fill='#FFA841'
                           />
                           <mask
                              id='mask0_6_88'
                              style={{ maskType: 'alpha' }}
                              maskUnits='userSpaceOnUse'
                              x={7}
                              y={3}
                              width={14}
                              height={20}>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M7.44049 22.7144V3.60674H20.7668V22.7144H7.44049Z'
                                 fill='white'
                              />
                           </mask>
                           <g mask='url(#mask0_6_88)'>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M13.1443 3.72322C12.7575 3.51663 12.2811 3.5863 11.9696 3.89458C11.6573 4.20206 11.582 4.67769 11.783 5.06685C12.9633 7.37776 12.9745 10.1123 11.8135 12.4336C11.7782 12.4968 11.7102 12.5361 11.6373 12.5353C11.5644 12.5345 11.498 12.4936 11.4635 12.4296C11.2521 12.0356 11.1008 11.6128 11.0151 11.174C10.9727 10.969 10.8278 10.8009 10.6308 10.7288C10.4346 10.6567 10.2144 10.6928 10.051 10.8241C7.75455 12.6554 6.86173 15.7358 7.82421 18.5111C8.73464 21.1295 11.2601 22.8351 14.0291 22.7021C17.4154 22.7021 19.7831 20.9846 20.5278 17.9922C21.632 13.5746 18.9223 6.78523 13.1443 3.72323M16.9373 18.0387C16.7379 19.412 15.5128 20.4001 14.1284 20.304C12.8055 20.3048 11.6733 19.3559 11.4419 18.0531C11.4179 17.9202 11.4627 17.7841 11.5604 17.692C11.6589 17.5991 11.7966 17.5615 11.928 17.5927C12.7431 17.5799 13.4966 17.1547 13.9298 16.4637C14.4286 15.936 14.5704 15.1649 14.2925 14.4939C14.21 14.3473 14.2284 14.1648 14.3373 14.0375C14.447 13.9101 14.624 13.8645 14.7817 13.923C16.3576 14.6396 17.2456 16.3356 16.9373 18.0387'
                                 fill='white'
                              />
                           </g>
                        </svg>
                     </div>
                     <div className='flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 w-[51px] relative gap-5'>
                        <p className='flex-grow-0 flex-shrink-0 text-[17px] font-bold text-left text-black'>
                           2,345
                        </p>
                     </div>
                  </div>
                  <div className='flex justify-end items-center self-stretch flex-grow relative gap-[27px]'>
                     <p className='flex-grow-0 flex-shrink-0 text-[17px] text-right text-black'>
                        <span className='flex-grow-0 flex-shrink-0 text-[17px] font-bold text-right text-black'>
                           23
                        </span>
                        <span className='flex-grow-0 flex-shrink-0 text-[17px] text-right text-black'>
                           {' '}
                           comments
                        </span>
                     </p>
                  </div>
               </div>
               <div className='flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0'>
                  <div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[9px]'>
                     <svg
                        width={24}
                        height={22}
                        viewBox='0 0 24 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='flex-grow-0 flex-shrink-0 w-[22.42px] h-[20.73px]'
                        preserveAspectRatio='none'>
                        <path
                           d='M0.792087 7.49271H2.73902C3.27637 7.49271 3.71248 7.92925 3.71248 8.46713V20.1601C3.71248 20.698 3.27636 21.1345 2.73902 21.1345H0.792087'
                           stroke='#49535F'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                        />
                        <path
                           d='M3.71257 18.2091C10.8691 21.8421 10.52 21.3633 16.6478 21.3633C19.2143 21.3633 20.5074 19.6912 21.2621 17.2409V17.2253L23.1217 10.9851V10.9734C23.3002 10.3845 23.19 9.74585 22.8243 9.25054C22.4586 8.75522 21.8804 8.46174 21.2651 8.45882H16.4869C15.8823 8.45882 15.3109 8.17801 14.9423 7.69926C14.5727 7.21955 14.4469 6.5965 14.601 6.01148L15.461 2.75098C15.6668 1.96803 15.2816 1.15096 14.5473 0.810673C13.814 0.470385 12.9413 0.705366 12.4771 1.36839L7.71066 8.12048C7.34498 8.63822 6.75113 8.94633 6.11728 8.94633H3.71259'
                           stroke='#49535F'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                        />
                     </svg>
                     <p className='flex-grow-0 flex-shrink-0 text-[17px] text-left text-black'>
                        Like
                     </p>
                  </div>
                  <div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2'>
                     <svg
                        width={24}
                        height={25}
                        viewBox='0 0 24 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='flex-grow-0 flex-shrink-0 w-[22.42px] h-[22.42px]'
                        preserveAspectRatio='none'>
                        <path
                           d='M15.4146 10.0874V22.7578C15.4146 23.2958 14.978 23.7325 14.44 23.7325H1.76949C1.23148 23.7325 0.794834 23.2958 0.794834 22.7578V10.0874C0.794834 9.54936 1.23148 9.11271 1.76949 9.11271H5.6681'
                           stroke='#49535F'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                        />
                        <path
                           d='M19.3119 1.31802L23.2092 5.2153L19.3119 9.11258'
                           stroke='#49535F'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                        />
                        <path
                           d='M23.2093 5.21513H13.9501C10.9891 5.21513 8.5895 7.61565 8.5895 10.5778V12.0403'
                           stroke='#49535F'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                        />
                     </svg>
                     <p className='flex-grow-0 flex-shrink-0 text-[17px] text-left text-black'>
                        Share
                     </p>
                  </div>
                  <div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2'>
                     <svg
                        width={26}
                        height={25}
                        viewBox='0 0 26 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='flex-grow-0 flex-shrink-0 w-[23.39px] h-[22.37px]'
                        preserveAspectRatio='none'>
                        <path
                           fill-rule='evenodd'
                           clip-rule='evenodd'
                           d='M12.9985 1.34025C6.53885 1.34025 1.30173 5.6647 1.30173 10.9998C1.35665 13.6903 2.62804 16.2109 4.75992 17.8541L2.31884 23.7098L8.79989 20.0077C10.1577 20.4398 11.5736 20.6594 12.9985 20.6594C19.4582 20.6594 24.6953 16.335 24.6953 10.9998C24.6953 5.66469 19.4582 1.34024 12.9985 1.34024L12.9985 1.34025Z'
                           stroke='#49535F'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                        />
                     </svg>
                     <p className='flex-grow-0 flex-shrink-0 text-[17px] text-left text-black'>
                        Comment
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostLastUpdate
