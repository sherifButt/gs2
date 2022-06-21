import Link from 'next/link'
import React from 'react'

function Icon({
   className,
   viewBox,
}) {
   return (
      <Link href='/' passHref>
         <a href='#'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               viewBox={viewBox}
               width={144}
               height={32}
               fill='#495360'
               strokeWidth={1.5}
               stroke='black'
               className={className}>
               <path
                  fillRule='evenodd'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.1087 0.250012C14.922 0.436641 14.7072 0.526823 14.6309 0.450739C14.5548 0.374431 14.4924 1.17264 14.4924 2.22417C14.4924 3.57309 14.583 4.2113 14.8001 4.39144C14.9693 4.53175 15.1541 5.13191 15.2112 5.72514C15.3255 6.91474 16.1255 8.05622 16.3799 7.39295C16.4582 7.18909 16.6818 7.09376 16.9299 7.15866C17.2799 7.25018 17.371 7.10271 17.4867 6.25773C17.738 4.42456 17.646 0.948194 17.335 0.523019C16.9389 -0.0189672 15.5479 -0.189485 15.1087 0.250012ZM4.59755 4.23301C3.66309 5.11289 3.69039 5.60721 4.7289 6.60011C6.253 8.05712 8.19039 9.1111 9.21839 9.04218C9.70218 9.00973 10.1401 8.85645 10.1918 8.70159C10.2894 8.40912 8.20718 5.55127 7.29442 4.72531C7.00732 4.46528 6.57097 4.19989 6.32483 4.13521C6.07868 4.07077 5.71304 3.94993 5.5121 3.86691C5.28184 3.77158 4.94395 3.90696 4.59755 4.23301ZM24.4502 5.34114C23.9579 5.7106 23.4906 6.1821 23.4116 6.38864C23.3329 6.59541 23.0057 7.0085 22.6844 7.3068C22.3633 7.60531 22.1006 7.96716 22.1006 8.11127C22.1006 8.25538 21.8992 8.55569 21.653 8.77835C20.8891 9.46982 21.1901 11.1195 21.9632 10.4779C22.123 10.3452 22.3154 10.2985 22.3908 10.3741C22.6103 10.5934 26.2061 8.09919 27.105 7.10405C27.9031 6.22081 27.9146 6.18299 27.5541 5.63273C26.776 4.44537 25.7693 4.35071 24.4502 5.34114ZM28.3406 13.699C27.6498 13.8502 26.7532 14.1391 26.3484 14.3412C25.9434 14.543 25.3506 14.712 25.0311 14.7163C24.7115 14.7207 24.2118 14.8566 23.9205 15.0179C23.4779 15.2634 23.4504 15.3345 23.7527 15.4507C23.9516 15.527 24.1145 15.7436 24.1145 15.9323C24.1145 16.1207 24.2324 16.2749 24.3765 16.2749C24.5206 16.2749 24.7977 16.4129 24.9919 16.5814C25.234 16.7916 26.2672 16.9267 28.2757 17.0111C31.4564 17.1449 31.5025 17.1306 32.0861 15.8273C32.4642 14.9823 31.7576 13.6972 30.8104 13.5079C29.9786 13.3414 29.9717 13.3418 28.3406 13.699ZM0.862838 14.7769C0.0194505 15.0723 -0.195592 15.646 0.173628 16.6168L0.394488 17.1979L2.80023 17.0983C5.71752 16.9777 6.35369 16.8412 7.21521 16.1509C8.10491 15.4382 7.83102 15.2074 5.62913 14.8149C3.48609 14.4329 1.88166 14.4202 0.862838 14.7769ZM22.6864 21.7457C22.816 22.0832 22.5725 22.1955 21.9097 22.1044C21.7432 22.0816 21.459 22.1197 21.2784 22.1888C21.0086 22.2924 21.0424 22.4448 21.4689 23.0432C21.7544 23.4437 21.9882 23.8409 21.9882 23.9262C21.9891 24.2778 24.39 26.58 25.3309 27.1314C26.4453 27.7846 26.657 27.7154 27.1822 26.5278C27.5357 25.7285 27.0712 25.1418 24.9876 23.7568C24.1205 23.1801 23.3237 22.479 23.217 22.1987C23.1104 21.9183 22.9176 21.6235 22.7882 21.5437C22.6459 21.4557 22.6058 21.5354 22.6864 21.7457ZM8.83709 22.1121C7.73815 22.411 4.75643 25.0592 3.90342 26.4938C3.72351 26.7964 4.14196 28.043 4.35252 27.8322C4.42995 27.7548 4.62821 27.8031 4.79268 27.9396C5.01667 28.1256 5.24178 28.0898 5.6891 27.7966C7.24564 26.7767 9.76416 23.9289 9.41687 23.5814C9.34258 23.5073 9.38107 23.3182 9.50213 23.1613C9.62319 23.0045 9.66257 22.6663 9.58985 22.4097C9.47998 22.0223 9.35265 21.9717 8.83709 22.1121ZM14.9843 25.2073C14.6329 26.4428 14.6871 30.3385 15.0657 31.0709C15.4765 31.8653 16.1731 31.8262 16.7796 30.9745C17.4312 30.0597 17.5267 28.6461 17.0579 26.8595C16.4343 24.4823 15.4202 23.6742 14.9843 25.2073Z'
                  clipRule='evenodd'></path>
               <path
                  fillRule='evenodd'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='hidden lg:block'
                  d='M49.0105 3.23054C46.8449 3.72509 45.1637 4.65689 43.5333 6.26651C41.8969 7.88173 40.8964 9.62249 40.3068 11.8802C39.7874 13.8682 39.9481 17.5117 40.6335 19.2972C41.6767 22.0136 43.9215 24.244 46.6969 25.3215C49.3417 26.3482 53.8833 26.0745 56.5397 24.7283L57.6565 24.1623V18.6836V13.2049H53.8435H50.0302L50.0953 15.0229L50.1602 16.8411L51.9504 16.869L53.7405 16.8972V19.3444V21.7919L52.9574 21.9969C52.5266 22.1094 51.3182 22.1591 50.2721 22.107C47.4913 21.9687 45.7735 20.9785 44.6121 18.8445C43.4724 16.7504 43.4541 13.7091 44.566 11.2312C46.3374 7.2838 51.0388 5.66299 55.4372 7.48318C55.7111 7.59642 55.9516 7.26635 56.5001 6.02461C56.8901 5.14204 57.209 4.33622 57.209 4.23395C57.209 4.13169 56.5294 3.8363 55.6985 3.57717C53.7571 2.97208 50.8107 2.81946 49.0105 3.23054ZM98.0469 3.44805C96.7076 3.87166 95.8873 4.35658 95.107 5.1859C94.0616 6.29695 93.6279 7.32654 93.5098 8.97734C93.3213 11.6123 94.4661 13.8192 96.6855 15.0994C97.1881 15.3894 98.6444 15.946 99.9216 16.3362C102.678 17.1787 103.305 17.6771 103.305 19.024C103.305 21.7791 100.554 22.883 96.9281 21.5827C96.0665 21.2736 95.2164 20.9993 95.039 20.9731C94.7664 20.9326 93.0121 23.5273 93.0121 23.9706C93.0121 24.2523 95.7457 25.3233 97.3176 25.6572C99.9147 26.2088 102.335 25.8487 104.267 24.6233C106.882 22.9649 107.923 19.0645 106.485 16.3114C105.584 14.5872 104.428 13.8075 101.333 12.8343C98.1214 11.8251 97.2637 11.1401 97.2637 9.58489C97.2637 8.40962 97.7296 7.67362 98.7404 7.25113C99.7999 6.8085 102.283 6.87116 103.751 7.37779C104.426 7.61096 104.993 7.78394 105.011 7.76201C105.029 7.7403 105.411 6.98842 105.86 6.09152L106.676 4.46064L105.887 4.13102C103.551 3.15468 99.9624 2.84229 98.0469 3.44805ZM59.6704 5.70842V7.16296H61.5725H63.4745V5.70842V4.25387H61.5725H59.6704V5.70842ZM108.9 8.16995V9.40072H108.117H107.333V10.9672V12.5336H108.117H108.9V16.4239C108.9 21.3056 109.126 22.1562 110.908 23.9835C112.935 26.0618 115.238 26.4531 118 25.1884C118.656 24.8881 119.193 24.5361 119.193 24.4065C119.193 24.1341 117.174 21.4806 116.976 21.4925C116.903 21.4969 116.592 21.6444 116.284 21.8203C115.348 22.3554 114.566 22.2276 113.651 21.3904L112.816 20.6249L112.746 16.5792L112.676 12.5336H114.704H116.732V10.9672V9.40072H114.718H112.704V8.16995V6.93919H110.802H108.9V8.16995ZM122.214 9.16733C121.154 9.39826 119.148 10.1363 119.146 10.2958C119.145 10.3574 119.473 11.1426 119.875 12.0406C120.446 13.3188 120.683 13.6402 120.962 13.5198C123.434 12.453 126.819 12.551 127.991 13.723L128.48 14.2119L126.577 14.3594C123.943 14.5635 122.284 15.2301 120.871 16.652C119.235 18.2981 118.802 20.0954 119.538 22.183C119.962 23.3827 121.023 24.5347 122.214 25.0874C123.327 25.6037 125.829 25.6493 127.381 25.1814C128.053 24.9791 128.509 24.9357 128.554 25.0695C128.595 25.1901 129.476 25.2888 130.512 25.2888H132.396L132.394 19.8623C132.394 16.8775 132.292 14.0718 132.168 13.6272C131.653 11.773 129.826 9.94114 127.945 9.39312C126.834 9.06909 123.303 8.93012 122.214 9.16733ZM83.2121 9.58713C80.9198 10.4055 79.1966 12.4483 78.6727 14.9689C78.3178 16.6768 78.5291 19.5387 79.1086 20.8713C79.7862 22.4296 81.3609 23.9992 83.002 24.752C84.2318 25.3164 84.6485 25.3911 86.5228 25.3842C88.1344 25.3781 88.9675 25.2588 89.9666 24.8907C90.6916 24.624 91.3448 24.3454 91.4182 24.272C91.4918 24.1986 91.162 23.4102 90.6853 22.5205L89.8189 20.9026L88.6743 21.2982C87.1994 21.808 85.7483 21.8042 84.6116 21.2877C83.7532 20.8979 82.4949 19.6743 82.4949 19.2296C82.4949 19.1099 84.4596 19.0231 87.1652 19.0231H91.8355L91.9868 17.6847C92.2692 15.1894 91.39 12.2671 89.9561 10.9358C88.2373 9.33986 85.4603 8.78467 83.2121 9.58713ZM141.906 9.7384C141.167 10.0414 139.984 10.6971 139.276 11.1954L137.99 12.1015V10.751V9.40072H136.088H134.186V17.3448V25.2888H136.088H137.99V22.0799C137.99 18.9578 138.008 18.8342 138.665 17.5193C139.516 15.8168 141.153 14.2717 143.044 13.3868C144.123 12.882 144.471 12.6128 144.375 12.3602C144.302 12.172 144.083 11.3787 143.886 10.5975C143.69 9.81605 143.466 9.17941 143.389 9.18232C143.312 9.18523 142.644 9.43541 141.906 9.7384ZM59.6704 17.3448V25.2888H61.5725H63.4745V17.3448V9.40072H61.5725H59.6704V17.3448ZM64.6737 9.73504C64.7444 9.91899 65.9205 13.4976 67.2873 17.6874L69.7727 25.3052L71.8108 25.2412L73.8489 25.1769L76.265 17.5686C77.5937 13.3839 78.683 9.8344 78.6859 9.68044C78.6895 9.47837 78.1656 9.40072 76.7971 9.40072H74.9035L73.4405 13.9537C72.6361 16.4577 71.9778 18.6429 71.9778 18.8096C71.9778 19.634 71.4427 18.2898 70.0809 14.0441L68.5915 9.40072H66.5683C64.8655 9.40072 64.5658 9.45353 64.6737 9.73504ZM87.3093 13.6838C87.5899 13.9743 87.8869 14.4386 87.9694 14.7154C88.1191 15.218 88.1147 15.2189 85.4189 15.2189C82.5238 15.2189 82.3689 15.1466 83.083 14.1269C83.938 12.9064 86.3171 12.6569 87.3093 13.6838ZM128.549 19.2138C128.637 20.4315 128.257 20.8894 126.74 21.3931C124.488 22.1412 122.997 21.7339 122.997 20.37C122.997 19.1052 124.898 18.1038 127.137 18.1889L128.48 18.2399L128.549 19.2138Z'
                  clipRule='evenodd'></path>
            </svg>
         </a>
      </Link>
   )
}

Icon.defaultProps = {
   
   viewBox: '0 0 144 32'
}

export default Icon
