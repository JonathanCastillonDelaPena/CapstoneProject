import React from "react";
import '../../src/assets/style/settingUp.css'

const SettingUpAcc = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Add a Photo</h1>
            <p>Show your unique personality and style</p>
            <img src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" alt="" />
            <br />
            <form className="container d-flex flex-column flex-auto w-50">
                First Name <br />
                <input type="text" /><br />
                Last Name <br />
                <input type="text" /><br />
                <label for="country">Country</label> <br />
                    <select id="country" name="country">
                        <option value="">--Please select a country--</option>
                        <option value="PH">Philippines</option>
                        <option value="US">United States</option>
                        <option value="JP">Japan</option>
                        <option value="NK">North Korea</option>
                        <option value="MS">Malaysia</option>
                    </select><br />
                Birthday <br />
                <input type="date" />
                <div className="d-flex justify-content-between p-2 ">
                <p>Or Skip this step for now.</p>
                <button type="button" class="btn btn-danger">Save & Continue</button>
                </div>
            </form>
        </div>
    )
};

export default SettingUpAcc;
