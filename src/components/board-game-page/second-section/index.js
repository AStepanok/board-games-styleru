import React from 'react';
import ImageCarousel from '../image-carousel'
import './second-section.css';

class SecondSection extends React.Component {

    render() {
        return (
            <div className='second-section'>
                <div className='second-section__content-wrapper'>
                    <h1 className = 'second-section__game-heading'>Monopoly</h1>
                    <ImageCarousel/>
                </div>
            </div>
        )
    }
}
/* Благодаря трём точкам объект раскладывается на поля прям что нужно для пропсов
* Дома: картинка по центру, со стрелочкой, без полосок. К картинкам описание.
*  */

export default SecondSection;
