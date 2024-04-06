import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        src: 'https://global-mt.ru/upload/iblock/cca/9uor26v7qfowv4mtzlg83trq09ux4sx0/banner_mgt-_1_.jpg',
        altText: 'Заголовок баннера в пару строк',
        text: "Заголовок баннера в пару строк",
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        key: 1,
    },
    {
        src: 'https://global-mt.ru/upload/iblock/8f7/1u0nk661qk8pv2kssq261ydgao3b0isb/Baner_HD_350.png',
        altText: 'Slide 2',
        text: "Заголовок баннера в пару строк",
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        key: 2,
    },
    {
        src: 'https://global-mt.ru/upload/iblock/1e0/xhm58vzjel3b8j2793v3bnrfwtni23x8/fibro.png',
        altText: 'Slide 3',
        text: "Заголовок баннера в пару строк",
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        key: 3,
    },
    {
        src: 'https://global-mt.ru/upload/iblock/1e0/xhm58vzjel3b8j2793v3bnrfwtni23x8/fibro.png',
        altText: 'Slide 3',
        text: "Заголовок баннера в пару строк",
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        key: 3,
    },
];

function CaruselData(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className='flex justify-between bg-[#E5E4ED] w-[95%] mx-auto rounded-3xl'>
                    <div className='mt-[32px] ml-[60px]' >
                        <h1 className='text-5xl text-black h-[106px] mb-[25px] w-[538px]'>{item.text}</h1>
                        <p className='w-[379px] h-[44px] text-start '>{item.caption}</p>
                        <div className='w-[300px] h-[100px] flex items-center gap-8'>
                            <button className='w-[170px] h-[40px] bg-[#088269] rounded-full text-[16px] font-semibold text-white'>Запросить цену</button>
                            <button className='w-[126px] h-[40px] bg-[#D5D1E1] rounded-full text-[#088269]'>В каталог</button>
                        </div>
                    </div>
                    <div>
                        <img src={item.src} alt={item.altText} className="rounded-3xl" />
                    </div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className='relative'>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    className='text-black bg-gray-400 absolute w-[60px] h-[60px] rounded-full top-[70%] left-[85%]  hover:bg-gray-600'
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    className='text-black bg-gray-400 absolute w-[60px] h-[60px] rounded-full top-[70%] right-[5%] hover:bg-gray-600'
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default CaruselData;