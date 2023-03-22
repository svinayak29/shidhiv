import cardStyle from './menu-card.module.css'
import {RxCrossCircled} from 'react-icons/rx'
// RxCrossCircled

export default function MenuCard ({pages,handleClickCloseBtn}) {
    return (
        <div className={cardStyle.wrapper}>
            <div>
                <RxCrossCircled style={{fontSize : '20px'}} onClick = {handleClickCloseBtn}/>
            </div>
            <div>
                {pages.map(page => (
                    <p>{page}</p>
                ))}
            </div>
            
        </div>
    )

}