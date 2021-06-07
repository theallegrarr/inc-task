import { useState } from 'react'
import { GiPlainCircle, GiCircle } from "react-icons/gi";
import { Helmet } from 'react-helmet'

import Step1 from '../components/Step1'

export default function Onboarding(){
    const [ form, setForm ] = useState({})

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
    <>
        <Helmet>
            <title>Create Your Account: Step 1</title>
        </Helmet>
        <div className='flex-row onboard-container'>
            <div className='flex-column'>
                <div className='flex-row steps'>
                    <p>Step 1 of 3</p>
                    <GiPlainCircle />
                    <div className="small">
                        <GiCircle />
                    </div>
                    <div className="small">
                        <GiCircle />
                    </div>
                </div>
                <Step1 
                    form={form}
                    updateForm={updateForm}
                />
            </div>
            <div className='cta-area'>
                <h2>Dummy Heading</h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit justo ut ultricies malesuada. Etiam tincidunt tempor lacus quis congue. Aliqua</h5>
            </div>
        </div>
    </>);
}