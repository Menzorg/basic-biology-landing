"use client";
import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Но у меня уже есть диплом / я сам преподаю.',
    text: 'Отлично! Этот курс — не пересказ университетского учебника. Это авторский взгляд Дробышевского, который связывает разрозненные факты в единую систему. Вы получите свежие данные "с полей", разбор современных научных мифов и, возможно, совершенно новый взгляд на дисциплины, которые, как вам казалось, вы знаете от и до. Это идеальное повышение квалификации.',
    image: '/images/mobile/imgImage1.png'
  },
  {
    title: 'Но это, наверное, скучно, сложно и оторвано от жизни.',
    text: 'Забудьте. Дробышевский превращает генетику в детектив, а палеонтологию — в блокбастер. Это живой диалог, экспедиционные байки и разбор фейков из интернета в реальном времени. Сложные вещи (теломеры, СТЭ, органогенез) объясняются с юмором и на примерах, которые вы узнаете.',
    image: '/images/desktop/imgSliderImage2.png' // Using desktop image as mobile specific wasn't provided for all slides
  },
  {
    title: 'Но у меня нет времени на годовой курс.',
    text: 'Курс создан для занятых людей. Вы можете подключиться онлайн, выбрать только один интересующий вас семестр или даже посетить одну-единственную лекцию. Вы сами управляете глубиной погружения.',
    image: '/images/desktop/imgSliderImage3.png'
  },
  {
    title: 'Но что мне это даст, кроме "общего развития"?',
    text: 'Это трамплин. В зависимости от вашей цели, вы выйдете с:\n• Углубленной подготовкой к ЕГЭ или Олимпиадам.\n• Удостоверением о повышении квалификации (для учителей).\n• Дипломом о профпереподготовке (1000+ часов) на преподавателя биологии и экологии.',
    image: '/images/desktop/imgSliderImage4.png'
  }
];

export default function MobileWhyBlock() {
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
    <div className="absolute h-[307.733vw] left-0 top-[259.467vw] w-[100.000vw]" data-name="why-block" data-node-id="3049:219">
        <div className="absolute h-[165.867vw] left-0 top-[141.867vw] w-[100.000vw]" data-name="description" data-node-id="3049:220">
          <div className="absolute h-[85.600vw] left-0 top-[80.267vw] w-[100.000vw]" data-name="background-mark-2" data-node-id="3049:221">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/mobile/imgBackgroundMark4.png" />
          </div>
          <div className="absolute left-[17.067vw] size-[65.867vw] top-[91.467vw]" data-name="image" data-node-id="3049:222">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/mobile/imgImage.png" />
          </div>
          <div className="absolute h-[44.533vw] left-[4.800vw] top-[47.733vw] w-[87.467vw]" data-name="content-2-block" data-node-id="3049:223">
            <div className="absolute h-[10.133vw] left-0 top-[34.400vw] w-[82.667vw]" data-name="paragraph-3" data-node-id="3049:224">
              <div className="absolute flex flex-col font-arsenal h-[10.133vw] justify-center leading-[0] left-[14.400vw] not-italic text-[3.733vw] text-black top-[5.067vw] translate-y-[-50%] w-[68.267vw]" data-node-id="3049:225">
                <p className="leading-[normal] whitespace-pre-wrap">Практикумы, которые учат анализировать, а не зубрить.</p>
              </div>
              <div className="absolute aspect-[47/46] left-[1.29%] right-[87.42%] top-1/2 translate-y-[-50%]" data-name="spanner" data-node-id="3049:226">
                <div className="absolute inset-[-4.41%_-4.29%]">
                  <img alt="" className="block max-w-none size-full" src="/images/mobile/imgSpanner.svg" />
                </div>
              </div>
            </div>
            <div className="absolute h-[12.000vw] left-[1.067vw] top-[18.400vw] w-[86.400vw]" data-name="paragraph-2" data-node-id="3049:227">
              <div className="absolute flex flex-col font-arsenal h-[12.000vw] justify-center leading-[0] left-[14.133vw] not-italic text-[3.733vw] text-black top-[6.000vw] translate-y-[-50%] w-[72.267vw]" data-node-id="3049:228">
                <p className="leading-[normal] whitespace-pre-wrap">Тесты, обсуждения и мгновенная обратная связь в течение всего курса.</p>
              </div>
              <div className="absolute aspect-[47/46] left-[1.23%] right-[88.27%] top-1/2 translate-y-[-50%]" data-name="message-icon" data-node-id="3049:229">
                <div className="absolute inset-[-4.55%_-4.41%]">
                  <img alt="" className="block max-w-none size-full" src="/images/mobile/imgMessageIcon.svg" />
                </div>
              </div>
            </div>
            <div className="absolute h-[17.333vw] left-[1.067vw] top-0 w-[86.400vw]" data-name="paragraph-1" data-node-id="3049:230">
              <div className="absolute flex flex-col font-arsenal h-[17.333vw] justify-center leading-[0] left-[13.333vw] not-italic text-[3.733vw] text-black top-[8.667vw] translate-y-[-50%] w-[73.067vw]" data-node-id="3049:231">
                <p className="leading-[normal] whitespace-pre-wrap">Каждое занятие начинается с опроса, чтобы знания не ложились мертвым грузом, а сразу начинали работать.</p>
              </div>
              <div className="absolute h-[8.800vw] left-[0.800vw] top-[4.267vw] w-[7.200vw]" data-name="file-icon" data-node-id="3049:232">
                <div className="absolute inset-[-4.55%_-5.56%]">
                  <img alt="" className="block max-w-none size-full" src="/images/mobile/imgFileIcon.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[48.267vw] left-0 top-0 w-[100.000vw]" data-name="content-1-block" data-node-id="3049:237">
            <div className="absolute h-[48.267vw] left-0 top-0 w-[100.000vw]" data-name="bacground-mark" data-node-id="3049:238">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/mobile/imgBacgroundMark1.png" />
            </div>
            <div className="absolute flex flex-col font-arsenal h-[38.400vw] justify-center leading-[normal] left-[9.600vw] not-italic text-[3.733vw] text-black top-[27.733vw] translate-y-[-50%] w-[81.067vw] whitespace-pre-wrap" data-node-id="3049:239">
              <p className="mb-0">{`Это не тот предмет, который вы учили в школе или университете. Станислав Дробышевский ломает рамки между дисциплинами. Вы увидите, как законы экологии влияют на генетику, а анатомия диктует эволюцию. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="absolute flex flex-col font-russo h-[10.933vw] justify-center leading-[0] left-[50.133vw] not-italic text-[4.267vw] text-black text-center top-[5.467vw] translate-x-[-50%] translate-y-[-50%] w-[87.467vw]" data-node-id="3049:240">
            <p className="leading-[normal] whitespace-pre-wrap">Это не монолог лектора. Это диалог.</p>
          </div>
        </div>
        <div 
          className="absolute h-[130.400vw] left-[6.933vw] top-[9.333vw] w-[86.400vw]" 
          data-name="slider" 
          data-node-id="3049:241"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute h-[130.400vw] left-0 rounded-[10.933vw] top-0 w-[86.400vw]" data-name="background-image" data-node-id="3049:242">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10.933vw] size-full" src="/images/mobile/imgRectangle253.png" />
            <div 
              className="absolute inset-0 rounded-[10.933vw]" 
              style={{ background: 'linear-gradient(90deg, #3F5E4F 33%, rgba(143, 119, 195, 0.52) 100%)' }} 
            />
          </div>
          <div className="absolute h-[130.400vw] left-0 rounded-[10.933vw] top-0 w-[86.400vw]" data-name="background" data-node-id="3049:243" />
          <div key={currentSlide} className="animate-fade-in absolute inset-0 flex flex-col">
            <p className="font-russo text-[4.267vw] text-white leading-[normal] whitespace-pre-wrap mt-[6.667vw] ml-[7.200vw] w-[71.733vw] shrink-0 z-10">
                {slide.title}
            </p>
            <ul className="block font-arsenal leading-[0] not-italic text-[3.733vw] text-white mt-[4vw] ml-[6.667vw] w-[73.067vw] shrink-0 z-10">
                <li className="ms-[5.600vw] whitespace-pre-wrap">
                <span className="leading-[normal]">{slide.text}</span>
                </li>
            </ul>
            <div className="relative flex-1 w-[58.400vw] ml-[13.867vw] min-h-0 mt-[4vw] mb-[6vw] z-0">
                <img alt="" className="absolute inset-0 size-full object-contain" src={slide.image} />
            </div>
          </div>
        </div>
        <p className="absolute font-russo h-[25.867vw] leading-[normal] left-[50.000vw] not-italic text-[4.267vw] text-black text-center top-0 translate-x-[-50%] w-[100.000vw] whitespace-pre-wrap" data-node-id="3049:247">{`Почему этот курс закроет все ваши "но"?`}</p>
      </div>
  );
}
