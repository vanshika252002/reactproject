import { Button } from '../../Components/Common';

function Logout() {
  const handleWheatherApi = () => {
    console.log('wheather api');
  };

  return (
    <div>
      <h1>logout</h1>
      <Button onClick={handleWheatherApi} />
    </div>
  );
}
export default Logout;
