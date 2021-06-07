import { BsEyeFill, BsChevronDown } from "react-icons/bs";

export default function Step1({ form, updateForm }){

    const formFields = [
        { id: 11, name: 'name', ph: 'Your name'},
        { id: 12, name: 'email', ph: 'Email address'},
        { id: 13, name: 'type', ph: 'I would describe my user type as', icon: BsChevronDown},
        { id: 14, name: 'password', ph: 'Password', type: 'password', icon: BsEyeFill},
    ]

    return(
        <div className='onboard-form'>
            <h3>Let's set up your account</h3>
            <div className='small-p flex-row'>
                <p>Already have an account? </p><a href='/'>Sign in</a>
            </div>
            <div className='input-group flex-column'>
                {
                    formFields.map((field) => (
                        <div className='d-grid' key={field.id}>
                            <input
                                placeholder={field.ph}
                                name={field.name}
                                value={form[field.name] || ''}
                                onChange={updateForm}
                                className='input-box'
                                type={field.type || 'text'}
                            ></input>
                            {field.icon && <field.icon />}
                        </div>
                    ))
                }
                <div className='small-p input-hint flex-row mt-1'>
                    <p className='gray'>Minimum 8 Characters</p>
                </div>
            </div>

            <button className='btn-disabled'>
                Next
            </button>

            <div className='small-p flex-row mt-1 foot-text'>
                <p>By clicking the "Next" button, you agree to creating a free account, and to 
                    <a href='/'>Terms of Service </a>
                    and 
                    <a href='/'>Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}