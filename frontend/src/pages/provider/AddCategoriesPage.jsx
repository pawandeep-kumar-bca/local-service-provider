import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const AddCategoriesPage = () => {
  return (
    <div className="w-full  flex items-center justify-center bg-black/40 h-screen z-90 relative">
      <div className="w-[30%]  bg-bg p-5 rounded-lg shadow_[0,0,30px_rgba(0,0,0,0.30)]">
        <h1 className="text-2xl text-text font-semibold mb-6 text-center">Add Category</h1>
        <div className="w-full h-[1px] bg-muted"></div>
        <div>
          <Input
            label="Category Name"
            type="text"
            id="category"
            placeholder="Enter category name"
          className="text-sm "/>
          <Input
            label="Description"
            type="text"
            id="description"
            placeholder="Enter description" className="text-sm "
          />
          <div className="flex gap-2 w-full">
            <Input
              label="Icon"
              type="text"
              id="description"
              placeholder="Paste icon URL" className="text-sm w-[80%]"
            />
            <Input type="file" label="Upload Icon" className="text-sm w-[25%]"/>
          </div>
         <div className="flex justify-end flex-col mb-5">
            <label htmlFor="status" className="text-sm font-semibold text-text mb-3">Status</label>
             <select name="status" id="status" className="p-1 border rounded outline-0 font-medium text-muted">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
         </div>
        </div>
        <div className="flex justify-center">
<Button color="blue" >Add Category</Button>
        </div>
        
      </div>
    </div>
  );
};

export default AddCategoriesPage;
