import React from 'react'
import Container from './Container'
import { FreeShipping, Warranty } from '../assets'

const FooterTop = () => {
    const incentives = [
        {
            name: "Free shipping",
            image: <img src={FreeShipping} alt="delivery_image" className='mx-auto h-16 w-16 text-blue'/>,
            description: "Its not really free an NGO is paying for it and you should thank them."
        },
        {
            name: "10-year warranty",
            image: <img src={Warranty} alt="warranty_image" className='mx-auto h-16 w-16 text-blue'/>,
            description: "if our products stops working on its own without any physical damage within 10years of purchase we w'll replace it. After you we can't help you."
        },
        {
            name: "Exchanges",
            image: <img src='https://cdn3d.iconscout.com/3d/premium/thumb/cloth-exchange-3d-icon-download-in-png-blend-fbx-gltf-file-formats--clothes-shopping-pack-e-commerce-icons-6713675.png)' alt="return_image" className='mx-auto h-16 w-16 text-blue'/>,
            description: "if you don't like the items you brought or it is faulty, you are allow to return it within 7 working days or contact our customer service agent."
        }
    ]
  return (
    <Container className='py-0'>
        <div className='rounded-2xl border border-[#0000FF] px-6 py-18 sm:p-14 md:p-14 lg:p-20'>
            <div className='mx-auto max-w-xl lg:max-w-none mt-4'>
                <div className='text-center'>
                    <h2 className='text-xl sm:text-2xl font-bold tracking-tight text-[#0000FF]'>We built our business on customer service</h2>
                </div>
            </div>
            <div className='mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3'>
                {incentives.map((item) => (
                    <div className="text-center sm:flex sm:text-left lg:block lg:text-center" key={item?.name}>
                        <div className='sm:flex-shrink-0'>
                            <div className='flex-root'>
                                {item?.image}
                            </div>
                        </div>
                        <div className='mt-3 sm:ml-6 lg:ml-0'>
                            <h3 className='text-base font-medium font-semibold text-skyText'>{item?.name}</h3>
                            <p className='mt-2 text-sm text-skyText mb-4'>{item?.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    </Container>
  )
}

export default FooterTop