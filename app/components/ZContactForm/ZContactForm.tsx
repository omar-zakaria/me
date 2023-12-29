import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { TextInputLiveFeedback } from './TextInputLiveFeedback';

interface IValues {
    firstName: string,
    lastName: string,
    companyName: string,
    email: string,
    jobTitle: string,
    message: string
}

export default function ZContactForm() {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required').min(2, 'Minimum 2 caracters').max(200, 'Maximum 200 caracters'),
        lastName: Yup.string().required('Required').min(2, 'Minimum 2 caracters').max(200, 'Maximum 200 caracters'),
        companyName: Yup.string().notRequired().min(2, 'Minimum 2 caracters').max(200, 'Maximum 200 caracters'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        jobTitle: Yup.string().notRequired(),
        message: Yup.string().required().min(50, 'Message must be a minimum of 50 characters').max(1000, 'Message must not exceed 1000 characters.')
    })

    const initialValues: IValues = {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        jobTitle: '',
        message: ''
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(
                    values: IValues,
                    { setSubmitting }: FormikHelpers<IValues>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}>
                <Form className='grid grid-cols-4 gap-3'>
                    {/* <Field
                        id="firstName"
                        name="firstName"
                        placeholder='First Name'
                        type="text"
                        className='col-span-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    /> */}
                    <TextInputLiveFeedback
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="First Name"
                        className="col-span-2 text-gray-900"
                    />
                    <TextInputLiveFeedback
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Last Name"
                        className="col-span-2 text-gray-900"
                    />
                    <TextInputLiveFeedback
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        className="col-span-2 text-gray-900"
                    />
                    <TextInputLiveFeedback
                        id="companyName"
                        name="companyName"
                        type="text"
                        label="Company Name"
                        className="col-span-2 text-gray-900"
                    />
                    <TextInputLiveFeedback
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        label="Job Title"
                        className="col-span-2 text-gray-900"
                    />
                    <TextInputLiveFeedback
                        id="message"
                        name="message"
                        type="text"
                        label="Message"
                        as="textarea"
                        placeholder='Message'
                        cols={100}
                        rows={5}
                        maxLength={1000}
                        className="col-span-4 text-gray-900 resize-y block w-full"
                    />

                    <button
                        type="submit"
                        className="mt-10 col-start-4 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark sm:ml-3 sm:w-auto"
                    >
                        Submit
                    </button>
                </Form>
            </Formik>
        </>
    )
}