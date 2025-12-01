"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imgRectangle2521 from '../assets/mobile/imgRectangle2521.png';
import imgRectangle253 from '../assets/mobile/imgRectangle253.png';

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

export default function MobileCourseProgram() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="relative h-[163.200vw] w-full" data-name="course-program-block" data-node-id="3049:167">
        <div className="absolute h-[48.267vw] left-0 top-[14.933vw] w-[100.000vw]" data-name="Rectangle 252 1" data-node-id="3049:168">
          <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2521} />
        </div>
        <div className="absolute flex flex-col font-russo h-[14.400vw] justify-center leading-[0] left-[50.133vw] not-italic text-[6.400vw] text-black text-center top-[26.400vw] tracking-[-0.48px] translate-x-[-50%] translate-y-[-50%] w-[80.533vw]" data-node-id="3049:169">
          <p className="leading-[89.95500183105469%] whitespace-pre-wrap">Подробная программа курса</p>
        </div>
        
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
            <div className="absolute h-[126.133vw] left-[6.933vw] rounded-[10.933vw] top-[37.067vw] w-[86.400vw]" data-node-id="3049:170">
              <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10.933vw] size-full" src={imgRectangle253} />
              <div 
                className="absolute inset-0 rounded-[10.933vw]" 
                style={{ background: 'linear-gradient(90deg, #3F5E4F 33%, rgba(143, 119, 195, 0.52) 100%)' }} 
              />
            </div>
            <div className="absolute h-[126.133vw] left-[6.933vw] rounded-[10.933vw] top-[37.067vw] w-[86.400vw]" data-node-id="3049:171" />
            <div key={currentSlide} className="animate-fade-in absolute inset-0">
                <div className="absolute flex flex-col font-russo h-[12.267vw] justify-center leading-[0] left-[13.600vw] not-italic text-[4.267vw] text-white top-[48.533vw] translate-y-[-50%] w-[64.267vw]" data-node-id="3049:172">
                <p className="leading-[normal] whitespace-pre-wrap">{`Содержание курса "Общая биология":`}</p>
                </div>
                <div className="absolute flex flex-col font-arsenal font-bold h-[19.200vw] justify-center leading-[0] left-[13.600vw] not-italic text-[0vw] text-white top-[64.267vw] translate-y-[-50%] w-[73.600vw]" data-node-id="3049:173">
                <p className="leading-[normal] text-[3.733vw] whitespace-pre-wrap">
                    <span>{`${slide.module} `}</span>
                    <span className="font-arsenal not-italic">{slide.description}</span>
                </p>
                </div>
                <div className="absolute flex flex-col font-arsenal font-bold h-[98.400vw] justify-center leading-[0] left-[15.200vw] not-italic text-[0vw] text-white top-[114.000vw] translate-y-[-50%] w-[79.200vw]" data-node-id="3049:174">
                {slide.lectures.map((lecture, index) => (
                    <React.Fragment key={index}>
                        <ul className="mb-0">
                            <li className="leading-[normal] list-disc ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[3.733vw] whitespace-pre-wrap">
                                {lecture.number && <span>{`${lecture.number} лекция - `}</span>}
                                {lecture.type === 'exam' && <span>{`Экзамен - `}</span>}
                                {lecture.type === 'practicum' && <span>{`Практикум - `}</span>}
                                <span className="font-arsenal not-italic">{lecture.type === 'exam' ? lecture.text.replace('Экзамен - ', '') : (lecture.type === 'practicum' ? lecture.text.replace('Практикум - ', '') : lecture.title)}</span>
                            </li>
                        </ul>
                        <p className="leading-[normal] mb-0 text-[3.733vw] whitespace-pre-wrap">&nbsp;</p>
                    </React.Fragment>
                ))}
                </div>
            </div>
        </div>
      </div>
  );
}
