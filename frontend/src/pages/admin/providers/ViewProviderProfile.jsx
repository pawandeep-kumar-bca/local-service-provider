import React, { useState } from 'react'
import { MdBlock, MdDeleteOutline, MdLockReset, MdOutlineEdit, MdOutlineVerifiedUser } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../../../components/common/Button'
import StatusBadge from '../../../components/common/StatusBadge'
import { FaAngleLeft } from 'react-icons/fa6'
import { RiResetLeftLine } from 'react-icons/ri'
import ResetPasswordModal from '../modals/ResetPasswordModal'
import DeleteModal from '../modals/DeleteModal'
import SuspendModal from '../modals/SuspendModal'
import VerifyProviderModal from '../modals/VerifyProviderModal'

const ViewProviderProfile = () => {
    const [resetPassword, setResetPassword] = useState(false);
      const [deleteProvider, setDeleteProvider] = useState(false);
      const [suspendProvider, setSuspendProvider] = useState(false);
      const [verifyProvider, setVerifyProvider] = useState(false);
  return (
      <>
          <div>
            <button
              className="flex items-center  cursor-pointer text-2xl text-text font-bold"
              type="button"
            >
              <FaAngleLeft />
              Back to Providers
            </button>
            <div className="flex gap-3 mt-4">
              <div className="border border-gray-300 rounded-2xl flex flex-col items-center gap-1 px-5 py-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[0.5]">
                <img
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="profile"
                  className="w-25 h-25 rounded-full object-cover"
                />
                <h2 className="text-xl font-bold text-text my-2">John Doe</h2>
                <p className="text-lg font-semibold text-muted">#PRO2343</p>
                <div className="flex justify-center gap-4 mt-5 w-full">
                  <StatusBadge badge="active" />
                  <StatusBadge category='plumbing' showIcon />
                </div>
              </div>
              <div className="border border-gray-300 rounded-2xl  gap-1 py-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[1.5]">
                <h1 className="text-2xl font-bold text-text mt-2">
                  Provider Information
                </h1>
                <div className="flex gap-15 mt-6">
                  <div className="flex-1 flex flex-col gap-5 ">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">Full Name</span>
                      <span className="text-lg text-muted font-semibold">
                        John Doe
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">Email</span>
                      <span className="text-lg text-muted font-semibold">
                        John.Doe@gmail.com
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">Phone</span>
                      <span className="text-lg text-muted font-semibold">
                        +91 30433 40344
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">Address</span>
                      <span className="text-lg text-muted font-semibold">
                        123, Green Park ,new Delhi
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-5 ">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">
                        Joined Date
                      </span>
                      <span className="text-lg text-muted font-semibold">
                        May 12,2024
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">
                        Status
                      </span>
                      <span className="text-lg text-muted font-semibold">
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">
                        Total Jobs
                      </span>
                      <span className="text-lg text-muted font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-text">
                        Total Earings
                      </span>
                      <span className="text-lg text-muted font-semibold">
                        ₹ 12,599
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <div className="border border-gray-300 rounded-2xl  gap-1 py-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-1">
                <div className="flex justify-around border-b border-gray-300">
                  <NavLink
                    to="/admin/providers/view-provider-profile"
                    end
                    className={({ isActive }) =>
                      ` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ? "text-primary border-b-[2px] pb-2 border-primary" : "text-muted border-b-[2px] pb-2 border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary"}`
                    }
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    to="/admin/providers/view-provider-profile/documents"
                    className={({ isActive }) =>
                      ` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ? "text-primary border-b-[2px] pb-2 border-primary" : "text-muted border-b-[2px] pb-2 border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary"}`
                    }
                  >
                    Documents
                  </NavLink>
                  <NavLink
                    to="/admin/providers/view-provider-profile/bank-details"
                    className={({ isActive }) =>
                      ` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ? "text-primary border-b-[2px] pb-2 border-primary" : "text-muted border-b-[2px] pb-2 border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary"}`
                    }
                  >
                    Bank Details
                  </NavLink>
                  <NavLink
                    to="/admin/providers/view-provider-profile/service-&-pricing"
                    className={({ isActive }) =>
                      ` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ? "text-primary border-b-[2px] pb-2 border-primary" : "text-muted border-b-[2px] pb-2 border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary"}`
                    }
                  >
                    Service & Pricing
                  </NavLink>
                </div>
                <div className="mt-4">
                  <Outlet />
                </div>
              </div>
              <div className="border border-gray-300 rounded-2xl  gap-1 pt-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[.5]">
                <h1 className="text-2xl font-bold text-text">Actions</h1>
                <div className="mt-6 mb-5">
                  <div className="flex gap-3 w-full">
                    <Button
                      color="blue"
                      fullWidth
                      onClick={() => setResetPassword(true)}
                    >
                      <RiResetLeftLine size={20} />
                     Reset Password
                    </Button>
                    <Button
                      color="success"
                      fullWidth
                      onClick={() => setVerifyProvider(true)}
                    >
                      <MdOutlineVerifiedUser size={20} />
                      Verify Provider
                    </Button>
                  </div>
                  <div className="flex mt-5 gap-3 flex-col w-full">
                    <Button
                      color="yellow"
                      fullWidth
                      onClick={() => setSuspendProvider(true)}
                    >
                      <MdBlock size={20} />
                      Suspend Provider
                    </Button>
                    <Button
                      color="danger"
                      fullWidth
                      onClick={() => setDeleteProvider(true)}
                    >
                      <MdDeleteOutline size={20} />
                      Delete Provider
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
         {resetPassword && (
        <ResetPasswordModal onClose={() => setResetPassword(false)} />
      )}

      {deleteProvider && (
        <DeleteModal
          close={() => setDeleteProvider(false)}
          text="Are you sure you want to delete this provider? This action cannot be undone."
          title="Provider"
          open={deleteProvider}
        />
      )}

      {suspendProvider && (
        <SuspendModal
          title="Provider"
          text="Are you sure you want to suspend this provider? Provider will not able to login or access the system."
          rightBtnText="Suspend Provider"
          close={() => setSuspendProvider(false)}
          open={suspendProvider}
          reason={[
            "Poor service quality",
            "Late arrivals",
            "Multiple booking cancellations",
            "Fake service listings",
            "Customer complaints",
            "Unprofessional behavior",
            "Fraudulent activity",
            "Violation of platform guidelines",
            "Low ratings from customers",
            "Incomplete service delivery",
            "Overcharging customers",
            "Using fake documents",
            "Inactive for long time",
            "Suspicious account activity",
            "Payment settlement issues",
            "Misbehavior with customers",
            "Safety policy violation",
            "Temporary suspension for review",
            "Permanent suspension by admin",
          ]}
        />
      )}

      {verifyProvider && (
        <VerifyProviderModal close={() => setVerifyProvider(false)} />
      )}
        </>
  )
}

export default ViewProviderProfile