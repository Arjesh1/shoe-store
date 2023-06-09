import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EditPayment from './EditPayment'
import CustomModal from '../modal/CustomModal'
import { setShowModal } from '../../system/systemSlice'
import "./payment_table.css"


const PaymentTable = () => {

  const dispatch = useDispatch()
    const {payment} = useSelector(state => state.payOption)
    const [selectedPayOpt, SetSelectedPayOpt] = useState({})

    const handleOnEdit = (item) =>{
      SetSelectedPayOpt(item)
      dispatch(setShowModal(true))
     
      

      

    }

  
  return (
    <>
    {SetSelectedPayOpt && (
        <CustomModal heading="Update Payment">
          <EditPayment editPayOpt={selectedPayOpt} />
        </CustomModal>
      )}
<Table striped bordered hover responsive> 
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payment.map((item, i )=>(
            <tr key={item}>
            <td>{i + 1}</td>
            <td>
              <div className='d-flex justify-content-center pt-1 pb-1'>
            <img className='payment_image' src={item.thumbnail} alt='logo'/>
              </div></td>
            <td>{item.name}</td>
            {item.status === "Active"? (
              <td ><span className='bg-success p-1 pe-2 ps-2 rounded text-white'>{item.status}</span></td>
            ):(
              <td ><span className='bg-danger p-1 pe-2 ps-2 rounded text-white'>{item.status}</span></td>
            )}
            <td className=''><Button variant='warning' onClick={()=>{handleOnEdit(item)}} >Edit</Button></td>
          </tr>

        ))}
        
        
      </tbody>
    </Table>
      
    </>
  )
}

export default PaymentTable
