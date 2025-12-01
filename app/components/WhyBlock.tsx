"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imgVector from '../assets/desktop/imgVector.png';
import imgSliderImage2 from '../assets/desktop/imgSliderImage2.png';
import imgSliderImage3 from '../assets/desktop/imgSliderImage3.png';
import imgSliderImage4 from '../assets/desktop/imgSliderImage4.png';
import imgDescriptionBackground1 from '../assets/desktop/imgDescriptionBackground1.png';
import imgSpanner from '../assets/desktop/imgSpanner.svg';
import imgMessageIcon from '../assets/desktop/imgMessageIcon.svg';
import imgFileIcon from '../assets/desktop/imgFileIcon.svg';
import imgBackgroundImage from '../assets/desktop/imgBackgroundImage.png';
import imgSignUpButtonBackground from '../assets/desktop/imgSignUpButtonBackground.png';
import imgNavigation1 from '../assets/desktop/imgNavigation1.svg';

const slides = [
  {
    title: 'Но у меня уже есть диплом / я сам преподаю.',
    text: 'Отлично! Этот курс — не пересказ университетского учебника. Это авторский взгляд Дробышевского, который связывает разрозненные факты в единую систему. Вы получите свежие данные "с полей", разбор современных научных мифов и, возможно, совершенно новый взгляд на дисциплины, которые, как вам казалось, вы знаете от и до. Это идеальное повышение квалификации.',
    image: imgVector
  },
  {
    title: 'Но это, наверное, скучно, сложно и оторвано от жизни.',
    text: 'Забудьте. Дробышевский превращает генетику в детектив, а палеонтологию — в блокбастер. Это живой диалог, экспедиционные байки и разбор фейков из интернета в реальном времени. Сложные вещи (теломеры, СТЭ, органогенез) объясняются с юмором и на примерах, которые вы узнаете.',
    image: imgSliderImage2
  },
  {
    title: 'Но у меня нет времени на годовой курс.',
    text: 'Курс создан для занятых людей. Вы можете подключиться онлайн, выбрать только один интересующий вас семестр или даже посетить одну-единственную лекцию. Вы сами управляете глубиной погружения.',
    image: imgSliderImage3
  },
  {
    title: 'Но что мне это даст, кроме "общего развития"?',
    text: 'Это трамплин. В зависимости от вашей цели, вы выйдете с:\n• Углубленной подготовкой к ЕГЭ или Олимпиадам.\n• Удостоверением о повышении квалификации (для учителей).\n• Дипломом о профпереподготовке (1000+ часов) на преподавателя биологии и экологии.',
    image: imgSliderImage4
  }
];

export default function WhyBlock() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

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
        <div className="absolute h-[33.177vw] left-0 top-[41.563vw] w-[100.000vw]" data-name="description" data-node-id="3049:95">
          <div className="absolute h-[30.677vw] left-0 top-[4.635vw] w-[100.000vw]" data-name="description-background 1" data-node-id="3049:96">
            <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDescriptionBackground1} />
          </div>
          <div className="absolute h-[19.375vw] left-[49.792vw] top-[8.229vw] w-[39.271vw]" data-name="descritpion-secondary" data-node-id="3049:97">
            <div className="absolute h-[4.375vw] left-0 top-[15.000vw] w-[37.135vw]" data-name="paragraph-3" data-node-id="3049:98">
              <div className="absolute bottom-[22.62%] left-0 right-[93.41%] top-[22.62%]" data-name="spanner" data-node-id="3049:99">
                <div className="absolute inset-[-7.61%_-7.45%]">
                  <Image fill alt="" className="block max-w-none size-full" src={imgSpanner} />
                </div>
              </div>
              <div className="absolute flex flex-col font-arsenal h-[4.375vw] justify-center leading-[0] left-[4.844vw] not-italic text-[1.667vw] text-black top-[2.188vw] translate-y-[-50%] w-[32.292vw]" data-node-id="3049:100">
                <p className="leading-[normal] whitespace-pre-wrap">Практикумы, которые учат анализировать, а не зубрить.</p>
              </div>
            </div>
            <div className="absolute h-[5.156vw] left-0 top-[8.698vw] w-[38.333vw]" data-name="paragraph-2" data-node-id="3049:101">
              <div className="absolute bottom-[26.26%] left-0 right-[93.61%] top-[27.27%]" data-name="message-icon" data-node-id="3049:102">
                <div className="absolute inset-[-7.61%_-7.45%]">
                  <Image fill alt="" className="block max-w-none size-full" src={imgMessageIcon} />
                </div>
              </div>
              <div className="absolute flex flex-col font-arsenal h-[5.156vw] justify-center leading-[0] left-[4.844vw] not-italic text-[1.667vw] text-black top-[2.578vw] translate-y-[-50%] w-[33.490vw]" data-node-id="3049:103">
                <p className="leading-[normal] whitespace-pre-wrap">{`Тесты, обсуждения и мгновенная обратная связь в течение всего курса. `}</p>
              </div>
            </div>
            <div className="absolute h-[7.083vw] left-0 top-0 w-[39.271vw]" data-name="paragraph-1" data-node-id="3049:104">
              <div className="absolute h-[2.969vw] left-0 top-[2.083vw] w-[2.448vw]" data-name="file-icon" data-node-id="3049:105">
                <div className="absolute inset-[-6.14%_-7.45%]">
                  <Image fill alt="" className="block max-w-none size-full" src={imgFileIcon} />
                </div>
              </div>
              <div className="absolute flex flex-col font-arsenal h-[7.083vw] justify-center leading-[0] left-[4.844vw] not-italic text-[1.667vw] text-black top-[3.542vw] translate-y-[-50%] w-[34.427vw]" data-node-id="3049:110">
                <p className="leading-[normal] whitespace-pre-wrap">Каждое занятие начинается с опроса, чтобы знания не ложились мертвым грузом, а сразу начинали работать.</p>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-arsenal h-[19.896vw] justify-center leading-[0] left-[10.781vw] not-italic text-[0vw] text-black top-[18.021vw] translate-y-[-50%] w-[34.583vw] whitespace-pre-wrap" data-node-id="3049:111">
            <p className="leading-[normal] mb-0 text-[1.667vw]">{`Это не тот предмет, который вы учили в школе или университете. Станислав Дробышевский ломает рамки между дисциплинами. Вы увидите, как законы экологии влияют на генетику, а анатомия диктует эволюцию. `}</p>
            <p className="leading-[normal] mb-0 text-[1.667vw]">&nbsp;</p>
            <p className="leading-[normal] text-[1.667vw]">
              <span>{`Вполне вероятно, что после этого `}</span>
              <span className="font-arsenal not-italic">курса</span>
              <span>{` вы и на другие науки начнете смотреть по-другому — системно.`}</span>
            </p>
          </div>
          <div className="absolute flex flex-col font-russo h-[6.510vw] justify-center leading-[0] left-[50.521vw] not-italic text-[2.500vw] text-black text-center top-[5.339vw] translate-x-[-50%] translate-y-[-50%] w-[51.875vw]" data-node-id="3049:112">
            <p className="leading-[normal] whitespace-pre-wrap">Это не монолог лектора. Это диалог.</p>
          </div>
        </div>
        <div 
          className="absolute h-[35.677vw] left-[6.458vw] top-[7.083vw] w-[87.031vw]" 
          data-name="why-block-slider" 
          data-node-id="3049:113"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute h-[35.677vw] left-0 rounded-[4.844vw] top-0 w-[87.031vw]" data-name="slider-background-image" data-node-id="3049:114">
            <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.844vw] size-full" src={imgBackgroundImage} />
          </div>
          <div className="absolute bg-gradient-to-r from-[#3f5e4f] from-[32.919%] h-[35.677vw] left-0 rounded-[4.844vw] to-[99.072%] to-[rgba(143,119,195,0.52)] top-0 w-[87.031vw]" data-name="slider-background" data-node-id="3049:115" />
          <div key={currentSlide} className="animate-fade-in absolute inset-0">
            <ul className="absolute block font-arsenal h-[17.396vw] leading-[0] left-[5.052vw] not-italic text-[1.667vw] text-white top-[10.208vw] w-[46.5vw]" data-node-id="3049:116">
                <li className="ms-[2.500vw] whitespace-pre-wrap">
                <span className="leading-[normal]">{slide.text}</span>
                </li>
            </ul>
            <p className="absolute font-russo h-[13.073vw] leading-[normal] left-[7.292vw] not-italic text-[2.500vw] text-white top-[2.969vw] w-[47.135vw] whitespace-pre-wrap" data-node-id="3049:117">
                {slide.title}
            </p>
            <div className="absolute left-[49.063vw] overflow-clip size-[28.854vw] top-[5.313vw]" data-name="slider-image" data-node-id="3049:121">
                <div className="absolute bottom-0 left-[-2.85%] right-[2.85%] top-0" data-name="Vector" data-node-id="3049:122">
                <Image fill alt="" className="block max-w-none size-full object-contain" src={slide.image} />
                </div>
            </div>
          </div>
          <div className="absolute h-[3.594vw] left-[7.292vw] top-[28.750vw] w-[25.833vw]" data-name="sign-up-button" data-node-id="3049:118">
            <a href="#" className="group block relative h-full w-full cursor-pointer transition-transform hover:scale-105 active:scale-95">
              <div className="absolute h-[3.594vw] left-0 rounded-[0.729vw] top-0 w-[25.833vw]" data-name="sign-up-button-background" data-node-id="3049:119">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[0.729vw]">
                  <Image fill alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[0.729vw] size-full" src={imgSignUpButtonBackground} />
                  <div className="absolute bg-[rgba(79,199,87,0.86)] inset-0 rounded-[0.729vw] group-hover:bg-[rgba(79,199,87,0.95)] transition-colors" />
                </div>
              </div>
              <div className="absolute flex flex-col font-arsenal h-[1.979vw] justify-center items-center leading-[0] left-[50%] not-italic text-[1.667vw] text-center text-white top-[50%] translate-x-[-50%] translate-y-[-50%] w-[23.646vw]" data-node-id="3049:120">
                <p className="leading-[normal] whitespace-pre-wrap">{`ЗАПИСАТЬСЯ НА КУРС `}</p>
              </div>
            </a>
          </div>
          <div className="absolute h-0 left-[1.875vw] top-[16.042vw] w-[82.552vw]" data-name="navigation" data-node-id="3049:123">
            <div className="absolute inset-[-2.109vw_-0.35%]">
              <Image fill alt="" className="block max-w-none size-full" src={imgNavigation1} />
              {/* Prev Button */}
              <div 
                className="absolute left-[1vw] top-1/2 -translate-y-1/2 w-[3vw] h-[3vw] cursor-pointer z-10 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
                onClick={handlePrev}
                title="Предыдущий слайд"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-white/30 backdrop-blur-sm shadow-sm hover:bg-white/50 transition-colors" />
              </div>
              {/* Next Button */}
              <div 
                className="absolute right-[1vw] top-1/2 -translate-y-1/2 w-[3vw] h-[3vw] cursor-pointer z-10 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
                onClick={handleNext}
                title="Следующий слайд"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-white/30 backdrop-blur-sm shadow-sm hover:bg-white/50 transition-colors" />
              </div>
            </div>
          </div>
        </div>
        <p className="absolute font-russo h-[4.167vw] leading-[normal] left-[52.214vw] not-italic text-[2.500vw] text-black text-center top-[1.094vw] translate-x-[-50%] w-[57.135vw] whitespace-pre-wrap" data-node-id="3049:126">{`Почему этот курс закроет все ваши "но"?`}</p>
      </div>
  );
}
