import React from "react";
import { useSelectProviderByCategory } from "../../hooks/useProvider";
import { useNavigate, useParams } from "react-router-dom";
import SelectProviders from "./SelectProviders";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../components/common/Button";
const SelectProvidersList = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data } = useSelectProviderByCategory(slug);
  const providers = data?.providers || [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <Button color="white" type="button" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
          Back
        </Button>
      </div>
      <div className="border border-muted rounded-md mt-5">
        {providers.map((provider, index) => (
          <>
            <SelectProviders provider={provider} key={provider._id} />
            {index !== providers.length - 1 && (
              <div className="w-full h-px bg-gray-200"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectProvidersList;
