import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDSTD } from "../redux/action/useraction";
import { Link } from "react-router-dom";

const Add = () => {
    const [name,setname] = useState()
    const [phone,setphone] = useState()
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        const obj = {
            name:name,
            phone:phone
        }
        dispatch(ADDSTD(obj))
        console.log(obj);
    }
  return (
    <div align="center">
      <h1>add user</h1>

      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setname(e.target.value)}
            value={name||""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setphone(e.target.value)}
            value={phone||""}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Link to={'/view'}>View</Link>
    </div>
  );
};
export default Add;
