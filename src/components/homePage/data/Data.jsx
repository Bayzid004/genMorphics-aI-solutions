import Image from 'next/image'


const Data = () => {
    return (
        <div className='container my-10'>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-5'>
                    <Image src='/img/dataImage.png.png' width={450} height={400} alt='Data Image' />
                </div>
                <div className='col-span-7 grid grid-cols-2'>
                    <div className='space-y-5'>
                        <div>
                            <button className='bg-green-600 px-5 py-2'>Data Cleaning</button>
                        </div>
                        <div>
                            <button className='bg-green-600 px-5 py-2'>SQL Database</button>
                        </div>
                        <div>
                            <button className='bg-green-600 px-5 py-2'>LLM Resorces</button>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div>
                            <button className='bg-green-600 px-5 py-2'>Data Quality Audit</button>
                        </div>
                        <div>
                            <button className='bg-green-600 px-5 py-2'>Data Annotation</button>
                        </div>
                        <div>
                            <button className='bg-green-600 px-5 py-2'>API Integration Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
