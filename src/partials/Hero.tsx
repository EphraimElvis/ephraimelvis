import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Welcome !</GradientText> 👋
        </>
      }
      description={
        <div className="text-xl leading-8">
          I am a skilled Kent-based
          <a className="text-cyan-400 hover:underline" href="/">
            {' '}
            Frontend Developer
          </a>{' '}
          specializing in
          <a className="text-cyan-400 hover:underline" href="/">
            {' '}
            React, Redux, Typescript and JavaScript.{' '}
          </a>
          With a strong eye for design and attention to detail, I create
          visually stunning and intuitive user interfaces. Committed to
          excellence, Ephraim delivers exceptional web experiences that surpass
          expectations.
        </div>
      }
      avatar={
        <img
          className="h-[400px] w-full object-cover object-top"
          style={{
            borderRadius: '10px',
          }}
          src="/assets/profile/ephraim.jpg"
          alt="Joy Shaheb Profile Picture"
          loading="lazy"
        />
      }
      socialButtons={
        <div className="mb-3 flex w-full justify-center gap-4 md:justify-start">
          <a
            href="https://github.com/ephraimelvis"
            className="w-[32px]"
            target="_blank"
          >
            <HeroSocial src="/assets/icons/github.svg" alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ephraim-nyakpo-b7a67b212/"
            className="w-[32px]"
            target="_blank"
          >
            <HeroSocial src="/assets/icons/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a
            href="https://twitter.com/Ephraim70065681"
            className="w-[32px]"
            target="_blank"
          >
            <HeroSocial src="/assets/icons/twitter.svg" alt="Twitter icon" />
          </a>
        </div>
      }
    />
  </Section>
);

export { Hero };
