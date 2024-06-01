import React from 'react'

const CopyRight = ({children}) => {
  return (
    <div className="h-8  py-12 g:py-10 w-full flex justify-center items-center border-t-[0.4px] border-t-white border-opacity-60">
      <h4 className="text-sm font-normal text-[#cfcfcfbf] tracking-wider md:text-sm">
        {children}
      </h4>
    </div>
  );
}

export default CopyRight
