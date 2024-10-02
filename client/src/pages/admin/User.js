import React from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from '../../components/Layouts/AdminMenu'

function User() {
  return (
    <Layout title={"Dashboard-All user"}>
        <div className='container-fluid m-3 p-3'>

            <div className='row'>
                <div className='col-md-3'>
                  <AdminMenu/>
                </div>
                <div className='col-md-9'></div>
                <h1>user</h1>
            </div>
        </div>
 
    </Layout>
  )
}

export default User