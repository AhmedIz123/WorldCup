import Countdown from '../../Elements/countdown/Countdown';
import LiveScore from '../../Elements/LiveScore/LiveScore';
import HostCountries from '../dashboard/HostCountries/HostCountries';
import Teams from './Teams/Teams';
import './Dashboard.css';
import Matches from './Matches/Matches';
import Standings from './Standings/Standings';
export default function Dashboard(){
    return <>
        <div className='row Cd-Ls' style={{margin:"5px",width:"99%",position:"relative"}}>
            <div className='col-12	col-sm-12	col-md-12	col-lg-12	col-xl-8	col-xxl-8'>
              <Countdown/>
            </div>
            <div className='col-12	col-sm-12	col-md-12	col-lg-12	col-xl-4	col-xxl-4'>
              <LiveScore/>
            </div>
        </div>
        <div className='row dash-content' style={{margin:"5px",width:"99%",position:"relative"}}>
            <HostCountries/>
            <Teams/>
            <Matches/>
            <div className='trait'></div>
            <Standings/>
            <div className='trait'></div>
            <div className='trait'></div>
        </div>
    </>
}