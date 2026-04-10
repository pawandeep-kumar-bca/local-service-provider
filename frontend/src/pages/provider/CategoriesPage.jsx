import Button from "../../components/common/Button";
import { MdAdd } from "react-icons/md";

const CategoriesPage = () => {
  return <div className="p-3">
    <div className="shadow-[0_0_34px_rgba(0,0,0,0.35)] rounded-lg w-full">
     <div>
        <h1>Categories</h1>
        <Button color="blue"><MdAdd />Add Category</Button>
     </div>
     <div className="w-full h-[1px] bg-muted"></div>
     <div>
        <div>
            <ul>
                <li>Icon</li>
                <li>Category Name</li>
                <li>Description</li>                <li>Status</li>
                <li>Action</li>
            </ul>
        </div>
        <div>
            
                <MdPlumbing />
                <h3>Plumbing</h3>
                <p>I am a plumber.</p>
                <Button>Action</Button>
                <div>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                    
                </div>
            
        </div>

        <div>
            <p>Showing 1 to 8 of 8 entries</p>
            <div>
                <Button>Previous</Button>
                <Button>Next</Button>
            </div>
        </div>
     </div>
    </div>
  </div>;
};

export default CategoriesPage;
