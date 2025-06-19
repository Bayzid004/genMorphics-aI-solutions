import Image from 'next/image'


const ChooseUs = () => {
  return (
    <div className='container px-7'>
      <div className='grid grid-cols-9 items-center'>
        <div className='col-span-4 space-y-4'>
          <p className='text-[#b04ba1] font-bold'>Why Chose Us?</p>
          <h1 className='text-4xl font-bold'>We Specialize in traing Large Language models</h1>
          <p className='pt-3'>Unleash the Potential of Your Data with Expert Labeling High-quality, Targeted Training Data for Superior Model Performance.</p>
        </div>
        <div className='col-span-5 space-y-5 pl-10'>
          <div className='flex justify-between text-lg font-bold '>
            <p>Machine Learning</p>
            <p>90%</p>
          </div>
          <div className='h-[2px] w-full bg-slate-300'/>
          <div className='flex justify-between text-lg font-bold '>
            <p>LLM Training</p>
            <p>95%</p>
          </div>
          <div className='h-[2px] w-full bg-slate-300'/>
          <div className='flex justify-between text-lg font-bold '>
            <p>AI Solutions</p>
            <p>90%</p>
          </div>
          <div className='h-[2px] w-full bg-slate-300'/>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
