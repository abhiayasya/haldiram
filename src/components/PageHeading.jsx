import React from 'react'

const PageHeading = ({headings}) => {
  return (
    <div className="mb-8">
    <h3 className="text-3xl text-[#B50020] uppercase font-semibold mb-4">
      {headings.subHeading}
    </h3>
    <p className="text-lg text-black font-normal">
     {headings.description}
    </p>
    <p className="text-lg text-black font-normal">
    {headings.subDescription}
    </p>
  </div>
  )
}

export default PageHeading
