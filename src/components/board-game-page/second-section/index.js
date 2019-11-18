import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './second-section.css';

class SecondSection extends React.Component {
    state = {
        slides: [
            'https://i.pinimg.com/736x/64/9f/8a/649f8aa6a67facba3db108992eb3d848.jpg',
            'https://i.pinimg.com/736x/64/9f/8a/649f8aa6a67facba3db108992eb3d848.jpg',
            'https://i.pinimg.com/736x/64/9f/8a/649f8aa6a67facba3db108992eb3d848.jpg',
            'https://i.pinimg.com/736x/64/9f/8a/649f8aa6a67facba3db108992eb3d848.jpg'
        ]
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className='second-section'>

                <div className='second-section__content-wrapper'>
                    <h1 className='second-section__heading'>Монополия</h1>
                    <Slider { ...settings }>
                        {this.state.slides.map((image) => {
                            return this.renderSlide(image);
                            }) }
                    </Slider>
                    <p className='second-section__description'>
                        Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение модели развития.
                    </p>
                </div>
            </div>
        )
    }
    renderSlide(url) {
        return (
            <div className='second-section__slide-container'>
                <img className='second-section__slide-image' src={ url}/>
            </div>
        );
    }
}

export default SecondSection;