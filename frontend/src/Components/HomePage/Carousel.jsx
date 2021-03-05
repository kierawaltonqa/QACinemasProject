import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const CarouselPage = ({ image1, image2, image3 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            src: image1,
            altText: 'button to show films',
            caption: 'Top Rated Films.'
        },
        {
            src: image2,
            altText: 'Slide 2',
            caption: 'Now Showing in 3D'
        },
        {
            src: image3,
            altText: 'Slide 3',
            caption: ''
        }
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem

                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} style={{ height: "600px", width: "100%" }} />
                <CarouselCaption captionText={item.caption} />
                {/* captionHeader={item.caption}*/}
            </CarouselItem>
        );
    });

    return (
        <Carousel
            pause="false"
            activeIndex={activeIndex}
            next={next}
            previous={previous}

        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}
export default CarouselPage;