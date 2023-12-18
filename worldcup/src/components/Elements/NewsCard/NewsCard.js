import './NewsCard.css';
import news from '../../../images/news.png';
export default function NewsCrad(){
    return <>
        <div className='news-card'>
            <img src={news}></img>
            <p>World Cup 2030</p>
            <div className='news-desc'>
                <h3>Epic multi-nation hosting proposal.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna...</p>
            </div>
        </div>
    </>
}