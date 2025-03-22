// import Prompt from '../../Components/Atom/Blocker';
//import { Link } from 'react-router-dom';
import { useDemoApiQuery } from '../../Services/Api/module/demoApi';
import Body from '../body/Body';
import Header from '../header/Header';
//import { ROUTES } from '../../Shared/Constants';

export default function Dashboard() {
  const { data, error } = useDemoApiQuery('');
  console.log(data, error);
  return (
    <div>
      Dashboard
      <Header/>
       
    
      <Body />
      {/* <Prompt when message="Are you sure you want to leave?" /> */}
    </div>
  );
}
