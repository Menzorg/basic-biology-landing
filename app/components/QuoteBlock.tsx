export default function QuoteBlock() {
  return (
    <div className="relative h-[927px] w-[1074px] mx-auto left-[calc(50%-537px)]" data-name="quote-block">
      <div className="absolute h-[927px] left-[90px] top-0 w-[984px]" data-name="quote-block-background 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/quote-block-bg-1.png" />
      </div>
      <div className="absolute font-arsenal h-[455px] leading-[normal] left-[81px] not-italic text-[32px] text-black top-[236px] w-[840px] whitespace-pre-wrap" data-name="quote-block-text">
        <p className="absolute h-[169px] left-0 top-0 w-[840px]">{`"Биология — наука огромная... и вечная проблема... приходится рассказывать про какие-то маленькие кусочки... всего конечно не объять, но рассказать про многое можно, что и будет сделано на курсе`}</p>
        <p className="absolute h-[137px] left-0 top-[181px] w-[840px]">
          Курс большой, на год, и это не просто курс лекций, которых и так хватает, а это будет интерактивная вещь, где будет много обратной связи...
        </p>
        <p className="absolute h-[137px] left-0 top-[318px] w-[840px]">{`Биология — это одна наука, и разные её части взаимосвязаны... если пропустить что-то одно, что-то другое уже окажется менее понятным (как в математике)..."`}</p>
      </div>
      <div className="absolute flex h-[495px] items-center justify-center left-[38px] top-[212px] w-0">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[495px]" data-name="quote-block-line">
            <div className="absolute bottom-0 left-0 right-0 top-[-10px]">
              <img alt="" className="block max-w-none size-full" src="/images/quote-block-line.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-russo h-[95px] justify-center leading-[0] left-[17px] not-italic text-[48px] text-black top-[119.5px] translate-y-[-50%] w-[933px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Цитаты Станислава Дробышевского: `}</p>
      </div>
      <div className="absolute h-[69px] left-[264px] top-[745px] w-[496px]" data-name="sign-up-button">
        <div className="absolute h-[69px] left-0 rounded-[14px] top-0 w-[496px]" data-name="sign-up-button-background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src="/images/sign-up-bg.png" />
            <div className="absolute bg-[rgba(79,199,87,0.86)] inset-0 rounded-[14px]" />
          </div>
        </div>
        <div className="absolute flex flex-col font-arsenal h-[38px] justify-center leading-[0] left-[248px] not-italic text-[32px] text-center text-white top-[40px] translate-x-[-50%] translate-y-[-50%] w-[454px]">
          <p className="leading-[normal] whitespace-pre-wrap">{`ЗАПИСАТЬСЯ НА КУРС `}</p>
        </div>
      </div>
    </div>
  );
}


