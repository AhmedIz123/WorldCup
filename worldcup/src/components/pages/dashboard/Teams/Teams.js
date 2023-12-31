import './Teams.css';
import test from '../../../../images/Morocco (MA).svg';
import { useState,useEffect } from 'react';
export default function Teams(){
    const countries = [
        'MA','ES','PT','DE', 'DZ', 'BE','FR', 'AD', 'BR', 'EG', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB',
        'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA',
        'EH', 'YE', 'ZM', 'ZW'
    ];
    const countries2 = countries.map(str => str.toLowerCase());
    return <>
        <div className='teams'>
            <div className='teams-title'>
                <h3>Teams</h3>
                <button className='view-all'>View All <i class="fa-solid fa-chevron-up"></i></button>
            </div>
            <div className='teams-list'>
                {
                    countries.map((flag)=>(
                        <div className='flag'>
                            <img src={`https://media.api-sports.io/flags/${flag}.svg`}></img>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}