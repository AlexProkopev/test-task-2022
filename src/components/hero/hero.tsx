const sectionClass =
  "pt-[40px] w-full h-[500px] bg-[url('/bg-hero-mobile.jpg')] bg-cover bg-center " +
  "md:bg-[url('/bg-hero-tablet.jpg')] md:pt-[89px] " +
  "lg:bg-[url('/bg-hero-desk.jpg')] lg:pt-[164px] lg:h-[650px] " +
  "xl:bg-[url('/bg-hero-deskXl.jpg')] xl:w-[1170px] xl:mx-auto";

const titleClass =
  "w-[317px] mx-auto text-center text-white text-4xl font-normal leading-10 " +
  "md:w-[380px]";

const paragraphClass =
  "mt-[21px] mx-auto w-[317px] text-center text-white text-base font-normal leading-relaxed " +
  "md:w-[380px]";

const buttonClass =
  "text-center block text-black-87 bg-primary text-base font-normal leading-relaxed " +
  "rounded-[80px] py-[4px] px-[22px] mx-auto mt-[32px]";

const Hero = () => {
  return (
    <section className={sectionClass}>
      <h1 className={titleClass}>
        Test assignment for front-end developer
      </h1>
      <p className={paragraphClass}>
        {`What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.`}
      </p>
      <button type="button" className={buttonClass}>
        Sign up
      </button>
    </section>
  );
};

export default Hero;
