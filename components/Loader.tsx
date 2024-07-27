import React from 'react'
import Image from 'next/image'
import LoaderIcon from "../public/assets/icons/loader.svg"

const Loader = () => {
    return (
        <div className='loader'>
            <Image
            src={LoaderIcon}
            alt="loader"
            width={32}
            height={32}
            className='animate-spin'
            />

        </div>
    )
}

export default Loader