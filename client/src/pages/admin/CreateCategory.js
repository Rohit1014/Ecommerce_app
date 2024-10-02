import React from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from '../../components/Layouts/AdminMenu'

function CreateCategory() {
  return (
    <Layout title={"Dashboard-Create-category"}>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                  <AdminMenu />
                </div>
                <div className='col-md-9'></div>
                <h1>create category</h1>
            </div>
            </div>
        </Layout>
  )
}

export default CreateCategory