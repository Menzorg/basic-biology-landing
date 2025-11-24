export default function Hero() {
  return (
    <div className="relative h-[2020px] w-full max-w-[1920px] mx-auto left-0 top-0" data-name="top-block">
      <div className="absolute h-[641px] left-0 top-0 w-full" data-name="tittle-cloud">
        <div className="absolute h-[1111px] left-[226px] top-[339px] w-[1694px]" data-name="background (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/bg-11.png" />
        </div>
        <div className="absolute h-[618px] left-0 top-0 w-[1899px]" data-name="tittle-background">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/title-bg.png" />
        </div>
        <div className="absolute font-russo h-[458px] leading-[89.95500183105469%] left-[67px] not-italic text-white top-[53px] w-[1712px] whitespace-pre-wrap" data-name="tittle">
          <p className="absolute h-[251px] left-[7px] text-[64px] top-[207px] tracking-[-1.28px] w-[1097px]">
            с Станиславом Дробышевским
          </p>
          <p className="absolute h-[207px] left-0 text-[90px] top-0 tracking-[-1.8px] w-[1712px]">{`Станьте частью эволюции: курс "Общая биология"`}</p>
        </div>
      </div>
      <div className="absolute h-[1160px] left-0 top-[231px] w-full" data-name="scientist">
        <div className="absolute h-[957px] left-[478px] top-[-8px] w-[1442px]" data-name="scientist-photo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/scientist-photo.png" />
        </div>
        <div className="absolute h-[688px] left-0 top-[471px] w-full" data-name="wave">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/wave.png" />
        </div>
        <div className="absolute h-[358px] left-[905px] top-[1070px] w-[951px]" data-name="scientist-info">
          <div className="absolute bg-[#44385d] h-[358px] left-0 rounded-[62px] top-0 w-[954px]" data-name="scientist-info-background" />
          <div className="absolute flex flex-col font-arsenal h-[229px] justify-center leading-[normal] left-[64px] not-italic text-[32px] text-white top-[137.5px] translate-y-[-50%] w-[860px]">
            <p className="leading-[normal] whitespace-pre-wrap">Изучайте тайны ДНК и происхождение человека с антропологом Станиславом Дробышевским. Это не скучный урок, а увлекательное приключение в биологию, после которого мир кажется понятнее. Его лекции собирают тысячи зрителей на YouTube и в залах.</p>
          </div>
          <div className="absolute h-[69px] left-[229px] top-[260px] w-[496px]" data-name="sign-up-button">
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
      </div>
      <div className="absolute h-[453px] left-0 top-[744px] w-[570px]" data-name="computer-youtube">
        <p className="absolute font-bold h-[103px] leading-[normal] left-[7px] not-italic text-[#211044] text-[36px] top-0 w-[675px] whitespace-pre-wrap" style={{ fontFamily: "var(--font-russo-one)" }}>
          Кто такой Станислав Дробышевский?
        </p>
        <div className="absolute left-0 size-[293px] top-[160px]" data-name="computer-youtube-image-button">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/computer-youtube-btn.png" />
        </div>
        <div className="absolute flex h-[110.231px] items-center justify-center left-[339px] top-[111px] w-[95.347px]">
          <div className="flex-none rotate-[126.804deg]">
            <div className="h-[36.521px] relative w-[110.345px]" data-name="computer-youtube-arrow">
              <div className="absolute inset-[-10.95%_-4.28%_-10.95%_-3.63%]">
                <img alt="" className="block max-w-none size-full" src="/images/computer-arrow.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


