import React from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { IoCloudUploadSharp } from 'react-icons/io5'
const AddCategoriesPage = () => {
  return (
    <div>
        <div>
            <h1>Add Category</h1>
            <div>
                <Input label='Category Name' type='text' id='category'/>
                <Input label='Description' type='text' id='description'/>
                <div>
                    <Input label='Icon' type='text' id='description'/>
                    <Button><IoCloudUploadSharp />Upload Icon</Button>
                </div>
                <Input label='Status' type='text' id='status'/>
            </div>
            <Button>Add Category</Button>
        </div>
    </div>
  )
}

export default AddCategoriesPage