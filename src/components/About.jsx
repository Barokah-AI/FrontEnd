import SectionTitle from "./SectionTittle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about">
      <div className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color-[0.15] pb-16 dark:border-white-[0.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Barokah-AI"
                  paragraph="BarokahAI adalah teman digital yang hadir untuk menjawab semua pertanyaan kamu dengan cepat dan tepat. Menggunakan kecerdasan buatan, BarokahAI menyediakan informasi yang kamu butuhkan. Dengan fitur canggih dan antarmuka yang ramah pengguna, BarokahAI hadir untuk memberikan dukungan yang aman dan dapat diandalkan. Mari jelajahi pengetahuan baru dan temukan kemudahan dalam setiap interaksi dengan BarokahAI!"
                  mb="44px"
                />

                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Pemrosesan Bahasa Alami (NLP)" />
                      <List text="Pembelajaran Mesin (Machine Learning)" />
                      <List text="Multi Bahasa" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Personalisasi" />
                      <List text="Integrasi yang Mudah" />
                      <List text="Keamanan dan Privasi" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-w-25 aspect-h-24 max-w-[500px] lg:mr-0">
                  <img
                    src="/images/about/about-image.svg"
                    alt="about-image"
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <img
                    src="/images/about/about-image-dark.svg"
                    alt="about-image"
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image"
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Langkah-langkah
                  </h2>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    1. Mengakses Website atau Aplikasi:
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    • Buka browser favorit lo dan kunjungi website resmi
                    Barokah-AI di https://barokah-ai.vercel.app{" "}
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    • Di halaman utama website atau aplikasi, kamu bakal liat
                    ikon atau kotak chat Barokah-AI. Klik aja buat mulai
                    ngobrol.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    2. Memulai Interaksi:
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    • Ketik pertanyaan atau perintah kamu di kotak chat.
                    Barokah-AI bakal langsung jawab dengan cepat dan tepat. Kamu
                    bisa nanya apa aja, mulai dari info produk, bantuan teknis,
                    saran personal, atau sekedar ngobrol santai.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Next.js
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    consectetur adipiscing elit setim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
