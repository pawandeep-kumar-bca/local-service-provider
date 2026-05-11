
import Button from "../../components/common/Button";
import { IoMdAdd } from "react-icons/io";
import ServicesList from "../../components/provider/ServicesList";
import { useNavigate } from "react-router-dom";


const ServicesPage = () => {
  const navigate= useNavigate()

  return (
    <>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between ">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text">
              My Services
            </h1>

            <p className="text-sm md:text-base text-muted mt-1">
              Manage your services and pricing.
            </p>
          </div>

          <Button
            color="purple"
            onClick={() => navigate("/provider/my-services/add-service")}
            className="shrink-0"
          >
            <IoMdAdd size={22} />
            Add Service
          </Button>
        </div>

        {/* Services List */}
        <ServicesList />
      </div>

      
    </>
  );
};

export default ServicesPage;