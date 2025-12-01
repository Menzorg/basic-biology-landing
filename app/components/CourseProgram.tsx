"use client";
import React, { useState } from 'react';

const slides = [
  {
    module: 'I модуль - "Теория эволюции":',
    description: 'История теории эволюции, Дарвиновская теория, синтетическая теория эволюции, современные уточнения и усложнения теории',
    lectures: [
      { number: 1, title: '"История теории эволюции, основные понятия синтетической теории эволюции".' },
      { number: 2, title: '"Факторы и механизмы эволюции".' },
      { number: 3, title: '"Типы и направления отбора".' },
      { number: 4, title: '"Уточнения и дополнения к синтетической теории эволюции".' },
      { type: 'exam', text: 'Экзамен - проверка полученных знаний.' },
      { type: 'practicum', text: 'Практикум - "Научный анализ специализированной литературы и данных".' }
    ]
  },
  {
    module: 'II модуль - "Антропогенез":',
    description: 'Происхождение человека, этапы эволюции приматов, формирование рода Homo.',
    lectures: [
      { number: 1, title: '"Приматы и их эволюция".' },
      { number: 2, title: '"Австралопитеки и ранние Homo".' },
      { number: 3, title: '"Homo erectus и гейдельбергский человек".' },
      { number: 4, title: '"Неандертальцы и кроманьонцы".' },
      { type: 'exam', text: 'Экзамен - проверка полученных знаний.' },
      { type: 'practicum', text: 'Практикум - "Сравнительная анатомия черепов".' }
    ]
  }
];

export default function CourseProgram() {
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
    <div className="absolute h-[58.802vw] left-0 top-[345.625vw] w-[99.948vw]" data-name="course-program-block" data-node-id="3049:27">
        <div className="absolute h-[30.677vw] left-0 top-0 w-[99.948vw]" data-name="background" data-node-id="3049:28">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/desktop/imgBackground.png" />
        </div>
        <div 
          className="absolute h-[50.208vw] left-[6.458vw] top-[8.594vw] w-[86.979vw]" 
          data-name="slider" 
          data-node-id="3049:29"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute h-[50.208vw] left-0 top-0 w-[87.031vw]" data-name="background" data-node-id="3049:30">
            <div className="absolute h-[50.208vw] left-0 rounded-[4.844vw] top-0 w-[87.031vw]" data-name="background-image" data-node-id="3049:31">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.844vw] size-full" src="/images/desktop/imgBackgroundImage.png" />
            </div>
            <div className="absolute h-[50.208vw] left-0 rounded-[4.844vw] top-0 w-[87.031vw]" data-name="background" data-node-id="3049:32" />
          </div>
          <div className="absolute h-[46.042vw] leading-[0] left-[7.240vw] not-italic text-white top-[1.979vw] w-[54.479vw]" data-name="content" data-node-id="3049:33">
            <div key={currentSlide} className="animate-fade-in absolute inset-0">
                <div className="absolute flex flex-col font-arsenal font-bold h-[37.240vw] justify-center left-0 text-[1.667vw] top-[29.609vw] translate-y-[-50%] w-[48.490vw]" data-node-id="3049:34">
                {slide.lectures.map((lecture, index) => (
                    <React.Fragment key={index}>
                    <ul className="mb-0">
                        <li className="leading-[normal] list-disc ms-[2.500vw] whitespace-pre-wrap">
                        {lecture.number && <span>{`${lecture.number} лекция - `}</span>}
                        {lecture.type === 'exam' && <span>{`Экзамен - `}</span>}
                        {lecture.type === 'practicum' && <span>{`Практикум - `}</span>}
                        <span className="font-arsenal not-italic">{lecture.type === 'exam' ? lecture.text.replace('Экзамен - ', '') : (lecture.type === 'practicum' ? lecture.text.replace('Практикум - ', '') : lecture.title)}</span>
                        </li>
                    </ul>
                    <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
                    </React.Fragment>
                ))}
                </div>
                <div className="absolute flex flex-col font-russo h-[6.042vw] justify-center left-0 text-[2.500vw] top-[3.021vw] translate-y-[-50%] w-[34.896vw]" data-node-id="3049:35">
                <p className="leading-[normal] whitespace-pre-wrap">{`Содержание курса "Общая биология":`}</p>
                </div>
                <div className="absolute flex flex-col font-arsenal font-bold h-[6.354vw] justify-center left-0 text-[1.667vw] top-[9.896vw] translate-y-[-50%] w-[54.479vw]" data-node-id="3049:36">
                <p className="leading-[normal] whitespace-pre-wrap">
                    <span>{`${slide.module} `}</span>
                    <span className="font-arsenal not-italic">{slide.description}</span>
                </p>
                </div>
            </div>
          </div>
          <div className="absolute h-0 left-[2.969vw] top-[25.104vw] w-[80.938vw]" data-name="navigation" data-node-id="3049:37">
            <div className="absolute inset-[-2.109vw_-0.35%]">
              <img alt="" className="block max-w-none size-full" src="/images/desktop/imgNavigation.svg" />
              {/* Prev Button */}
              <div 
                className="absolute left-0 top-0 w-[5vw] h-full cursor-pointer z-10"
                onClick={handlePrev}
                title="Предыдущий модуль"
              />
              {/* Next Button */}
              <div 
                className="absolute right-0 top-0 w-[5vw] h-full cursor-pointer z-10"
                onClick={handleNext}
                title="Следующий модуль"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-russo h-[4.583vw] justify-center leading-[0] left-[6.458vw] not-italic text-[3.333vw] text-black top-[4.740vw] tracking-[-0.067vw] translate-y-[-50%] w-[73.646vw]" data-node-id="3049:40">
          <p className="leading-[89.95500183105469%] whitespace-pre-wrap">Подробная программа курса</p>
        </div>
      </div>
  );
}
