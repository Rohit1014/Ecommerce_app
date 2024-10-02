import React from 'react'
import Layout from '../components/Layouts/Layout'
import { useAuth } from '../context/auth'
export const Homepage = () => {
  const [auth,setauth]=useAuth()
  return (

    <Layout title={"Home-Ecommerce"}>
    <div>Homepage</div>
    <pre>{JSON.stringify(auth,null,4)}</pre>
    
    </Layout>
  )
}
