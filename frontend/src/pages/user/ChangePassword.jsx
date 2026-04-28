import React from "react";
import { CiLock } from "react-icons/ci";
import Input from "../../components/common/Input";

const ChangePassword = () => {
  return (
    <div>
      <div>
        <CiLock />
        <div>
          <h3>Change Password</h3>
          <p>Update your password to keep your account secure</p>
        </div>
      </div>
      <div>
        <Input label="Current Password" id="currentPassword" type="password" required/>
        <Input label="New Password" id="newPassword" type="password" required/>
        <Input label="Confirm New Password" id="confirmPassword" type="password" required/>
      </div>
      <div>
        <div>
            <CiLock />
            <div>
                <h4>Password must contain:</h4>
                <p>At least 8 characters</p>

                <p>One number</p>
                <p>One upper case letter</p>
                <p>One lower case letter</p>
                <p>One number or special character</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
