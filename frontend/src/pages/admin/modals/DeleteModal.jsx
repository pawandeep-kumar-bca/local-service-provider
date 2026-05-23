import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Modal from "../../../components/common/Modal";
const DeleteModal = ({open,close,text,title}) => {
  return (
    <Modal isOpen={open} onClose={close} title="Delete User" showFooter size="sm"
        children={<div className="flex flex-col items-center text-center">
          <div className="text-red-500 bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <RiDeleteBin6Line size={26}/>
          </div> 
          <h2 className="text-xl text-red-500 font-bold mb-4">Delete {title}</h2>
          <p className="text-red-500 font-semibold text-sm mb-4">
       {text}</p>
          </div>

        } rightBtnText="Delete Permanently" rightBtnColor="danger" leftBtnColor="white"/>
  )
}

export default DeleteModal