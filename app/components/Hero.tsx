export default function Hero() {
  return (
    <div className="relative h-[105.208vw] w-full max-w-[100vw] mx-auto left-0 top-0" data-name="top-block">
      <div className="absolute h-[33.385vw] left-0 top-0 w-full" data-name="tittle-cloud">
        <div className="absolute h-[57.865vw] left-[11.771vw] top-[17.656vw] w-[88.229vw]" data-name="background (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/bg-11.png" />
        </div>
        <div className="absolute h-[32.188vw] left-0 top-0 w-[98.906vw]" data-name="tittle-background">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/title-bg.png" />
        </div>
        <div className="absolute font-russo h-[23.854vw] leading-[89.95500183105469%] left-[3.49vw] not-italic text-white top-[2.76vw] w-[89.167vw] whitespace-pre-wrap" data-name="tittle">
          <p className="absolute h-[13.073vw] left-[0.365vw] text-[3.333vw] top-[10.781vw] tracking-[-1.28px] w-[57.135vw]">
            с Станиславом Дробышевским
          </p>
          <p className="absolute h-[10.781vw] left-0 text-[4.688vw] top-0 tracking-[-1.8px] w-[89.167vw]">{`Станьте частью эволюции: курс "Общая биология"`}</p>
        </div>
      </div>
      <div className="absolute h-[60.417vw] left-0 top-[12.031vw] w-full" data-name="scientist">
        <div className="absolute h-[49.844vw] left-[24.896vw] top-[-8px] w-[75.104vw]" data-name="scientist-photo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/scientist-photo.png" />
        </div>
        <div className="absolute h-[35.833vw] left-0 top-[24.531vw] w-full" data-name="wave">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/wave.png" />
        </div>
        <div className="absolute h-[18.646vw] left-[47.135vw] top-[55.729vw] w-[49.531vw]" data-name="scientist-info">
          <div className="absolute bg-[#44385d] h-[18.646vw] left-0 rounded-[3.229vw] top-0 w-[49.688vw]" data-name="scientist-info-background" />
          <div className="absolute flex flex-col font-arsenal h-[11.927vw] justify-center leading-[normal] left-[3.333vw] not-italic text-[1.667vw] text-white top-[7.161vw] translate-y-[-50%] w-[44.792vw]">
            <p className="leading-[normal] whitespace-pre-wrap">Изучайте тайны ДНК и происхождение человека с антропологом Станиславом Дробышевским. Это не скучный урок, а увлекательное приключение в биологию, после которого мир кажется понятнее. Его лекции собирают тысячи зрителей на YouTube и в залах.</p>
          </div>
          <div className="absolute h-[3.594vw] left-[11.927vw] top-[13.542vw] w-[25.833vw]" data-name="sign-up-button">
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
      </div>
      <div className="absolute h-[23.594vw] left-0 top-[38.75vw] w-[29.688vw]" data-name="computer-youtube">
        <p className="absolute font-bold h-[5.365vw] leading-[normal] left-[0.365vw] not-italic text-[#211044] text-[1.875vw] top-0 w-[35.156vw] whitespace-pre-wrap" style={{ fontFamily: "var(--font-russo-one)" }}>
          Кто такой Станислав Дробышевский?
        </p>
        <div className="absolute left-0 size-[15.26vw] top-[8.333vw]" data-name="computer-youtube-image-button">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/computer-youtube-btn.png" />
        </div>
        <div className="absolute flex h-[5.741vw] items-center justify-center left-[17.656vw] top-[5.781vw] w-[4.966vw]">
          <div className="flex-none rotate-[126.804deg]">
            <div className="h-[1.902vw] relative w-[5.747vw]" data-name="computer-youtube-arrow">
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


