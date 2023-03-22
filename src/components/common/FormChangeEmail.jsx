import React, { useRef } from "react";
import { Await } from "react-router-dom";
import '../../assets/style/changeEmail.css';
const ChangeEmail = () => {
//    const { currentUser, setLoading, setAlert, setModal, Modal} = useAuth(); 
//     const emailRef = useRef();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//     try {
//         await updateEmail(currentUser, emailRef.current.value)
//         setAlert({
//             isAlert: true,
//             severity: 'success',
//             message: 'Your email has been updated',
//             timeOut: 8000,
//             location: 'main',
//         });
//     } catch (errror) {
//         setAlert({
//             isAlert: true,
//             severity: 'error',
//             message: Error.message,
//             timeOut: 5000,
//             location: 'modal',
//         });
//         console.log(Error);
//     }
//         setLoading(false);
//     }; 
    
    return (
        <form className="border-box container mx-auto">
            <h1>General Account Settings</h1>
            <div className="form-group container">
            <label for="name" className="name">Name</label>
                <p>Monkey D. Goku</p>
            <button className="" type="button" class="btn btn-secondary" >Edit</button>
            </div>
            <div className="form-group">
            <label for="phone" className="number">Phone Number</label>
                <p>+092922223412</p>
            <button className="" type="button" class="btn btn-secondary" >Edit</button>
            </div>
            <div className="form-group">
            <label for="email" className="contact">Add account contact</label>
                <p>goku@gmail.com</p>
            <button className="" type="button" class="btn btn-secondary" >Edit</button>
            </div><br />
            <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>

    )
};

export default ChangeEmail;