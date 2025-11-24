export default function QuoteBlock() {
  return (
    <div className="relative h-[48.281vw] w-[55.937vw] mx-auto left-[calc(50%-537px)]" data-name="quote-block">
      <div className="absolute h-[48.281vw] left-[4.688vw] top-0 w-[51.25vw]" data-name="quote-block-background 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/quote-block-bg-1.png" />
      </div>
      <div className="absolute font-arsenal h-[23.698vw] leading-[normal] left-[4.219vw] not-italic text-[1.667vw] text-black top-[12.292vw] w-[43.75vw] whitespace-pre-wrap" data-name="quote-block-text">
        <p className="absolute h-[8.802vw] left-0 top-0 w-[43.75vw]">{`"Биология — наука огромная... и вечная проблема... приходится рассказывать про какие-то маленькие кусочки... всего конечно не объять, но рассказать про многое можно, что и будет сделано на курсе`}</p>
        <p className="absolute h-[7.135vw] left-0 top-[9.427vw] w-[43.75vw]">
          Курс большой, на год, и это не просто курс лекций, которых и так хватает, а это будет интерактивная вещь, где будет много обратной связи...
        </p>
        <p className="absolute h-[7.135vw] left-0 top-[16.563vw] w-[43.75vw]">{`Биология — это одна наука, и разные её части взаимосвязаны... если пропустить что-то одно, что-то другое уже окажется менее понятным (как в математике)..."`}</p>
      </div>
      <div className="absolute flex h-[25.781vw] items-center justify-center left-[1.979vw] top-[11.042vw] w-0">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[25.781vw]" data-name="quote-block-line">
            <div className="absolute bottom-0 left-0 right-0 top-[-10px]">
              <img alt="" className="block max-w-none size-full" src="/images/quote-block-line.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-russo h-[4.948vw] justify-center leading-[0] left-[0.885vw] not-italic text-[2.5vw] text-black top-[6.224vw] translate-y-[-50%] w-[48.594vw]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Цитаты Станислава Дробышевского: `}</p>
      </div>
      <div className="absolute h-[3.594vw] left-[13.75vw] top-[38.802vw] w-[25.833vw]" data-name="sign-up-button">
        <div className="absolute h-[3.594vw] left-0 rounded-[0.729vw] top-0 w-[25.833vw]" data-name="sign-up-button-background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[0.729vw]">
            <img alt="" className="absolute max-w-none object-cover rounded-[0.729vw] size-full" src="/images/sign-up-bg.png" />
            <div className="absolute bg-[rgba(79,199,87,0.86)] inset-0 rounded-[0.729vw]" />
          </div>
        </div>
        <div className="absolute flex flex-col font-arsenal h-[1.979vw] justify-center leading-[0] left-[12.917vw] not-italic text-[1.667vw] text-center text-white top-[2.083vw] translate-x-[-50%] translate-y-[-50%] w-[23.646vw]">
          <p className="leading-[normal] whitespace-pre-wrap">{`ЗАПИСАТЬСЯ НА КУРС `}</p>
        </div>
      </div>
    </div>
  );
}


