import React from 'react'
import Layout from '../../components/Layouts/Layout'
import UserMenu from '../../components/Layouts/UserMenu'

function Orders() {
  return (
    <Layout title={`Your orders`}>
    <div className='container-fluid m-3 p-3'>

        <div className='row'>
            <div className='col-md-3'>
              <UserMenu/>
            </div>
            <div className='col-md-9'></div>
            <h1>orders all</h1>
        </div>
    </div>

</Layout>
  )
}

export default Orders