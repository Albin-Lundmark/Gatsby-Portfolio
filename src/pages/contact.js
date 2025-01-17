import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = (/* { data } */) => {
  const { title, pageText, email } = {
    title: 'Contact',
    pageText: 'Get in touch!',
    email: 'falbinlundmark@gmail.com'
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
        <h2 className='font-heading text-2xl md:text-4xl mb-6'>{title}</h2>
      <div className='max-w-2xl mx-auto'>
        <p className='font-body mb-8 text-2xl font-semibold md:text-3xl text-gray-600'>{pageText}</p>
        <p className='font-body mb-8 text-base font-semibold md:text-xl text-emerald-600'>This form is still in the works so send me an email or reach out on my socials instead</p>

        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Name:
            </label>
            <input
            placeholder='John Doe'
              type='text'
              id='name'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email:
            </label>
            <input
            placeholder='John.Doe@email.com'
              type='email'
              id='email'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Message:
            </label>
            <textarea
            placeholder='Whats on your mind?'
              id='message'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full font-body px-4 py-2 bg-emerald-100 hover:bg-emerald-200 hover:text-gray-800 rounded-lg'
          >
            Send Message
          </button>
        </form>
        <div className='mt-8 text-center'>
          <p className='font-body text-xl text-gray-600'>
            Or send me an email:{' '}
            <a
              href={`mailto:${email}`}
              className='text-blue-500 hover:underline'
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='Contact'></Seo>

export default Contact

/* export const query = graphql`
  query ContactPageQuery {
    contentfulContactPage {
      title
      pageText
      email
    }
  }
` */
