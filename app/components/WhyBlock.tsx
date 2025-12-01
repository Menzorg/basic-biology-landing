"use client";
import React, { useState } from 'react';

const slides = [
  {
    title: 'Но у меня уже есть диплом / я сам преподаю.',
    text: 'Отлично! Этот курс — не пересказ университетского учебника. Это авторский взгляд Дробышевского, который связывает разрозненные факты в единую систему. Вы получите свежие данные "с полей", разбор современных научных мифов и, возможно, совершенно новый взгляд на дисциплины, которые, как вам казалось, вы знаете от и до. Это идеальное повышение квалификации.',
    image: '/images/desktop/imgVector.png'
  },
  {
    title: 'Но это, наверное, скучно, сложно и оторвано от жизни.',
    text: 'Забудьте. Дробышевский превращает генетику в детектив, а палеонтологию — в блокбастер. Это живой диалог, экспедиционные байки и разбор фейков из интернета в реальном времени. Сложные вещи (теломеры, СТЭ, органогенез) объясняются с юмором и на примерах, которые вы узнаете.',
    image: '/images/desktop/imgSliderImage2.png'
  },
  {
    title: 'Но у меня нет времени на годовой курс.',
    text: 'Курс создан для занятых людей. Вы можете подключиться онлайн, выбрать только один интересующий вас модуль (например, "Генетика и цитология") или даже посетить одну-единственную лекцию. Вы сами управляете глубиной погружения.',
    image: '/images/desktop/imgSliderImage3.png'
  },
  {
    title: 'Но что мне это даст, кроме "общего развития"?',
    text: 'Это трамплин. В зависимости от вашей цели, вы выйдете с:\n• Углубленной подготовкой к ЕГЭ или Олимпиадам.\n• Удостоверением о повышении квалификации (для учителей).\n• Дипломом о профпереподготовке (1000+ часов) на преподавателя биологии и экологии.\n• Сертификатом от Центра "Архэ", который усилит ваше резюме.',
    image: '/images/desktop/imgSliderImage4.png'
  }
];

export default function WhyBlock() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
    setTouchEnd(0);
    setTouchStart(0);
  };

  const slide = slides[currentSlide];

  return (
    <div className="absolute h-[74.740vw] left-0 top-[90.052vw] w-[100.000vw]" data-name="why-block" data-node-id="3049:94">
        <div 
          className="absolute h-[35.677vw] left-[6.458vw] top-[7.083vw] w-[87.031vw]" 
          data-name="why-block-slider" 
          data-node-id="3049:113"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute h-[35.677vw] left-0 rounded-[4.844vw] top-0 w-[87.031vw]" data-name="slider-background-image" data-node-id="3049:114">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.844vw] size-full" src="/images/desktop/imgBackgroundImage.png" />
          </div>
          <div className="absolute bg-gradient-to-r from-[#3f5e4f] from-[32.919%] h-[35.677vw] left-0 rounded-[4.844vw] to-[99.072%] to-[rgba(143,119,195,0.52)] top-0 w-[87.031vw]" data-name="slider-background" data-node-id="3049:115" />
          <div key={currentSlide} className="animate-fade-in absolute inset-0">
            <ul className="absolute block font-arsenal h-[17.396vw] leading-[0] left-[5.052vw] not-italic text-[1.667vw] text-white top-[10.208vw] w-[40.729vw]" data-node-id="3049:116">
                <li className="ms-[2.500vw] whitespace-pre-wrap">
                <span className="leading-[normal]">{slide.text}</span>
                </li>
            </ul>
            <p className="absolute font-russo h-[13.073vw] leading-[normal] left-[7.292vw] not-italic text-[2.500vw] text-white top-[2.969vw] w-[47.135vw] whitespace-pre-wrap" data-node-id="3049:117">
                {slide.title}
            </p>
            <div className="absolute left-[49.063vw] overflow-clip size-[28.854vw] top-[5.313vw]" data-name="slider-image" data-node-id="3049:121">
                <div className="absolute bottom-0 left-[-2.85%] right-[2.85%] top-0" data-name="Vector" data-node-id="3049:122">
                <img alt="" className="block max-w-none size-full object-contain" src={slide.image} />
                </div>
            </div>
          </div>
          <div className="absolute h-[3.594vw] left-[7.292vw] top-[28.750vw] w-[25.833vw]" data-name="sign-up-button" data-node-id="3049:118">
            <div className="absolute h-[3.594vw] left-0 rounded-[0.729vw] top-0 w-[25.833vw]" data-name="sign-up-button-background" data-node-id="3049:119">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[0.729vw]">
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[0.729vw] size-full" src="/images/desktop/imgSignUpButtonBackground.png" />
                <div className="absolute bg-[rgba(79,199,87,0.86)] inset-0 rounded-[0.729vw]" />
              </div>
            </div>
            <div className="absolute flex flex-col font-arsenal h-[1.979vw] justify-center leading-[0] left-[12.917vw] not-italic text-[1.667vw] text-center text-white top-[2.083vw] translate-x-[-50%] translate-y-[-50%] w-[23.646vw]" data-node-id="3049:120">
              <p className="leading-[normal] whitespace-pre-wrap">{`ЗАПИСАТЬСЯ НА КУРС `}</p>
            </div>
          </div>
          <div className="absolute h-0 left-[1.875vw] top-[16.042vw] w-[82.552vw]" data-name="navigation" data-node-id="3049:123">
            <div className="absolute inset-[-2.109vw_-0.35%]">
              <img alt="" className="block max-w-none size-full" src="/images/desktop/imgNavigation1.svg" />
              {/* Prev Button */}
              <div 
                className="absolute left-0 top-0 w-[5vw] h-full cursor-pointer z-10"
                onClick={handlePrev}
                title="Предыдущий слайд"
              />
              {/* Next Button */}
              <div 
                className="absolute right-0 top-0 w-[5vw] h-full cursor-pointer z-10"
                onClick={handleNext}
                title="Следующий слайд"
              />
            </div>
          </div>
        </div>
        <p className="absolute font-russo h-[4.167vw] leading-[normal] left-[52.214vw] not-italic text-[2.500vw] text-black text-center top-[1.094vw] translate-x-[-50%] w-[57.135vw] whitespace-pre-wrap" data-node-id="3049:126">{`Почему этот курс закроет все ваши "но"?`}</p>
      </div>
  );
}
