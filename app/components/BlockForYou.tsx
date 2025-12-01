import React from 'react';
import Image from 'next/image';
import imgBackground2 from '../assets/desktop/imgBackground2.png';
import imgImageBackground1 from '../assets/desktop/imgImageBackground1.png';
import imgImage45 from '../assets/desktop/imgImage45.png';
import imgSignUpButtonBackground from '../assets/desktop/imgSignUpButtonBackground.png';
import imgSchoolBlock from '../assets/desktop/imgSchoolBlock.png';
import imgQuoteBlockImageBackground1 from '../assets/desktop/imgQuoteBlockImageBackground1.png';
import imgQuoteBlockBackground1 from '../assets/desktop/imgQuoteBlockBackground1.png';
import imgQuoteBlockLine from '../assets/desktop/imgQuoteBlockLine.svg';

export default function BlockForYou() {
  return (
    <div className="absolute h-[101.875vw] left-px top-[200.833vw] w-[100.000vw]" data-name="block-for-you" data-node-id="3049:65">
        <div className="absolute h-[101.927vw] left-0 top-[-1px] w-[100.000vw] z-50" data-name="background" data-node-id="3049:66">
          <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBackground2} />
        </div>
        <div className="absolute h-[40.260vw] left-[5.208vw] top-[54.427vw] w-[94.792vw] z-50" data-name="bottom-content" data-node-id="3049:67">
          <div className="absolute h-[5.833vw] left-[50.990vw] top-[3.333vw] w-[43.802vw]" data-name="indiana-jones-block" data-node-id="3049:68">
            <div className="absolute h-[51.302vw] left-[-7.708vw] top-[-19.844vw] w-[51.510vw]" data-name="image-background 1" data-node-id="3049:69">
              <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBackground1} />
            </div>
            <div className="absolute flex flex-col font-russo h-[5.833vw] justify-center leading-[0] left-[21.875vw] not-italic text-[2.500vw] text-center text-white top-[2.917vw] translate-x-[-50%] translate-y-[-50%] w-[43.750vw]" data-node-id="3049:70">
              <p className="leading-[normal] whitespace-pre-wrap">Почувствуйте себя Индианой Джонсом: от теории к практике</p>
            </div>
          </div>
          <div className="absolute left-[54.167vw] overflow-clip size-[20.938vw] top-[8.021vw]" data-name="image 45" data-node-id="3049:71">
            <Image fill alt="" className="block max-w-none size-full" src={imgImage45} />
          </div>
          <div className="absolute h-[3.594vw] left-[8.854vw] top-[39.844vw] w-[25.833vw]" data-name="sign-up-button" data-node-id="3049:73">
            <a href="#" className="group block relative h-full w-full cursor-pointer transition-transform hover:scale-105 active:scale-95">
              <div className="absolute h-[3.594vw] left-0 rounded-[0.729vw] top-0 w-[25.833vw]" data-name="sign-up-button-background" data-node-id="3049:74">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[0.729vw]">
                  <Image fill alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[0.729vw] size-full" src={imgSignUpButtonBackground} />
                  <div className="absolute bg-[rgba(79,199,87,0.86)] inset-0 rounded-[0.729vw] group-hover:bg-[rgba(79,199,87,0.95)] transition-colors" />
                </div>
              </div>
              <div className="absolute flex flex-col font-arsenal h-[1.979vw] justify-center items-center leading-[0] left-[50%] not-italic text-[1.667vw] text-center text-white top-[50%] translate-x-[-50%] translate-y-[-50%] w-[23.646vw]" data-node-id="3049:75">
                <p className="leading-[normal] whitespace-pre-wrap">{`ЗАПИСАТЬСЯ НА КУРС `}</p>
              </div>
            </a>
          </div>
          <div className="absolute flex flex-col font-['Arsenal_SC:Bold','Noto_Sans:Regular',sans-serif] h-[40.260vw] justify-center leading-[0] left-0 text-[1.667vw] text-white top-[20.130vw] translate-y-[-50%] w-[48.490vw]" data-node-id="3049:76" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            <ul className="list-disc whitespace-pre-wrap">
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                <span>{`Учителям биологии: `}</span>
                <span className="font-['Arsenal_SC:Regular','Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  официальное повышение квалификации (≥36 ак. часов) и современные методики преподавания.
                </span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                <span>{`Школьникам: `}</span>
                <span className="font-['Arsenal_SC:Regular','Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  углублённая подготовка к ЕГЭ и олимпиадам выше уровня репетитора.
                </span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                <span>{`Студентам: `}</span>
                <span className="font-['Arsenal_SC:Regular','Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  современные научные методы по биологии, антропологии и экологии, выходящие за рамки вуза.
                </span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                <span>{`Желающим сменить профессию: `}</span>
                <span className="font-['Arsenal_SC:Regular','Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  полная профпереподготовка на преподавателя (≥1000 часов).
                </span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                <span>{`Ученым: `}</span>
                <span className="font-['Arsenal_SC:Regular','Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  обмен опытом с ведущим антропологом страны.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] ms-[2.500vw]">
                <span>{`Всем интересующимся: `}</span>
                <span className="font-['Arsenal_SC:Regular','Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  еженедельный интеллектуальный заряд и системные знания о мире.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute h-[42.031vw] left-0 top-[4.271vw] w-[100.000vw] z-50" data-name="top-content" data-node-id="3049:77">
          <div className="absolute flex flex-col font-arsenal font-bold h-[35.052vw] justify-center leading-[0] left-[52.448vw] not-italic text-[1.667vw] text-white top-[24.505vw] translate-y-[-50%] w-[46.927vw]" data-node-id="3049:78">
            <ul className="mb-0">
              <li className="leading-[normal] list-disc ms-[2.500vw] whitespace-pre-wrap">
                <span>{`Учителям: `}</span>
                <span className="font-arsenal not-italic">повышение квалификации и новые методики.</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
            <ul className="list-disc mb-0 whitespace-pre-wrap">
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                Школьникам:<span className="font-arsenal not-italic">подготовка к ЕГЭ и олимпиадам.</span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                Студентам:<span className="font-arsenal not-italic">актуальные научные методы.</span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                Для смены профессии:<span className="font-arsenal not-italic">профпереподготовка.</span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] mb-0 ms-[2.500vw]">
                Ученым:<span className="font-arsenal not-italic">обмен опытом с антропологом.</span>
                <span>
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="leading-[normal] ms-[2.500vw]">
                Всем:<span className="font-arsenal not-italic">еженедельный интеллектуальный заряд.</span>
              </li>
            </ul>
            <p className="leading-[normal] whitespace-pre-wrap">&nbsp;</p>
          </div>
          <div className="absolute h-[39.167vw] left-0 top-0 w-[45.365vw]" data-name="school-block" data-node-id="3049:79">
            <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSchoolBlock} />
          </div>
          <div className="absolute flex flex-col font-russo h-[5.833vw] justify-center leading-[0] left-[20.286vw] not-italic text-[2.500vw] text-center text-white top-[2.917vw] translate-x-[-50%] translate-y-[-50%] w-[23.594vw]" data-node-id="3049:80">
            <p className="leading-[normal] whitespace-pre-wrap">Этот курс создан для вас</p>
          </div>
        </div>
        <div className="absolute h-[48.281vw] left-[44.063vw] top-[-38.094vw] w-[55.937vw]" data-name="quote-block" data-node-id="3049:81">
          <div className="absolute h-[31.198vw] left-[-43.125vw] overflow-clip top-[8.333vw] w-[44.010vw] z-10" data-name="quote-block-image-background 1" data-node-id="3049:82">
            <Image fill alt="" className="block max-w-none size-full" src={imgQuoteBlockImageBackground1} />
          </div>
          <div className="absolute h-[48.281vw] left-[4.688vw] top-0 w-[51.250vw] z-0" data-name="quote-block-background 1" data-node-id="3049:84">
            <Image fill alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgQuoteBlockBackground1} />
          </div>
          <div className="absolute font-arsenal h-[23.698vw] leading-[normal] left-[4.219vw] not-italic text-[1.667vw] text-black top-[12.292vw] w-[43.750vw] whitespace-pre-wrap z-20" data-name="quote-block-text" data-node-id="3049:85">
            <p className="absolute h-[8.802vw] left-0 top-0 w-[43.750vw]" data-node-id="3049:86">{`"Биология — наука огромная... и вечная проблема... приходится рассказывать про какие-то маленькие кусочки... всего конечно не объять, но рассказать про многое можно, что и будет сделано на курсе`}</p>
            <p className="absolute h-[7.135vw] left-0 top-[9.427vw] w-[43.750vw]" data-node-id="3049:87">
              Курс большой, на год, и это не просто курс лекций, которых и так хватает, а это будет интерактивная вещь, где будет много обратной связи...
            </p>
            <p className="absolute h-[7.135vw] left-0 top-[16.563vw] w-[43.750vw]" data-node-id="3049:88">{`Биология — это одна наука, и разные её части взаимосвязаны... если пропустить что-то одно, что-то другое уже окажется менее понятным (как в математике)..."`}</p>
          </div>
          <div className="absolute flex h-[25.781vw] items-center justify-center left-[1.979vw] top-[11.042vw] w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[25.781vw]" data-name="quote-block-line" data-node-id="3049:89">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.521vw]">
                  <Image fill alt="" className="block max-w-none size-full" src={imgQuoteBlockLine} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-russo h-[4.948vw] justify-center leading-[0] left-[0.885vw] not-italic text-[2.500vw] text-black top-[6.224vw] translate-y-[-50%] w-[48.594vw]" data-node-id="3049:90">
            <p className="leading-[normal] whitespace-pre-wrap">{`Цитаты Станислава Дробышевского: `}</p>
          </div>
          <div className="absolute h-[3.594vw] left-[13.750vw] top-[38.802vw] w-[25.833vw]" data-name="sign-up-button" data-node-id="3049:91">
            <a href="#" className="group block relative h-full w-full cursor-pointer transition-transform hover:scale-105 active:scale-95">
              <div className="absolute h-[3.594vw] left-0 rounded-[0.729vw] top-0 w-[25.833vw]" data-name="sign-up-button-background" data-node-id="3049:92">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[0.729vw]">
                  <Image fill alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[0.729vw] size-full" src={imgSignUpButtonBackground} />
                  <div className="absolute bg-[rgba(79,199,87,0.86)] inset-0 rounded-[0.729vw] group-hover:bg-[rgba(79,199,87,0.95)] transition-colors" />
                </div>
              </div>
              <div className="absolute flex flex-col font-arsenal h-[1.979vw] justify-center items-center leading-[0] left-[50%] not-italic text-[1.667vw] text-center text-white top-[50%] translate-x-[-50%] translate-y-[-50%] w-[23.646vw]" data-node-id="3049:93">
                <p className="leading-[normal] whitespace-pre-wrap">{`ЗАПИСАТЬСЯ НА КУРС `}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}
