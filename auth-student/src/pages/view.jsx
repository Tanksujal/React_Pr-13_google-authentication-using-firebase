import { useSelector } from "react-redux";

const View = () => {
  const record = useSelector(state => state)
  console.log(record);
  return (
    <>
      <h2>View User</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record && record.map((val,i)=>{
              return(
                <tr>
            <th scope="row">{++i}</th>
            <td>{val.name}</td>
            <td>{val.phone}</td>
            <td>@mdo</td>
          </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};
export default View;
