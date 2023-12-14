import Ranking from '../../../Elements/Ranking/Ranking';
import './Standing.css';
import groups from '../../../../data/groupes.json';
import { useState } from 'react';
export default function Standings(){
    const [groupsList,setgroupsList]=useState(groups);
    console.log(groupsList);
    return <>
        <div className='standings'>
            <div className='standings-title'>
                <h3>Standings</h3>
                <button className='view-all'>View All <i class="fa-solid fa-chevron-up"></i></button>
            </div>
            <div className='standings-list'>
                {groupsList.groups.map((group)=>(
                    <Ranking group={group.name} groupTeams={group}/>
                ))}
            </div>
        </div>
    </>
}