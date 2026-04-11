import Button from "../../components/common/Button";
import { MdAdd, MdPlumbing } from "react-icons/md";

const CategoriesPage = () => {
  return (
    <div className="p-3">
      <div className="shadow-[0_0_34px_rgba(0,0,0,0.35)] rounded-lg w-full p-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-semibold">Categories</h1>
          <Button color="blue">
            <MdAdd className="text-2xl" />
            Add Category
          </Button>
        </div>
        <div className="w-full h-[1px] bg-muted"></div>
        <div className="mt-8">
          <div>
            <ul className="grid grid-cols-5 items-center justify-items-center text-[1.1rem] text-muted font-semibold border p-1 rounded">
              <li>Icon</li>
              <li>Category Name</li>
              <li>Description</li> <li>Status</li>
              <li>Action</li>
            </ul>
          </div>
          <div className="border rounded-lg bg-muted/20 mt-5 mb-3">
            <div className="grid grid-cols-5 items-center justify-items-center mb-3 mt-3">
              <div className="text-2xl"><MdPlumbing /></div>
              <h3>Plumbing</h3>
              <p>I am a plumber.</p>
              <Button>Action</Button>
              <div className="flex gap-3">
                <Button color="white" className="text-primary">
                  Edit
                </Button>
                <Button color="white" className="text-danger    ">
                  Delete
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <p>Showing 1 to 8 of 8 entries</p>
            <div className="flex gap-3 mr-13">
              <Button color="white" className="text-primary">
                Previous
              </Button>
              <Button color="blue">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
