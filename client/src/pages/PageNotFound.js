import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found-Ecommerce"}>
      <div className='pnf'>
        <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-heading'>OOPS! Page Not Found</h2>
        <Link to="/" className='pnf-button'>go back
        </Link>


        </div>
    </Layout>
  )
}
