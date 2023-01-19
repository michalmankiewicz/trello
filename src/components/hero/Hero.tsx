import { HeroContainer, Description, Headline, Title, Button, Img } from './Hero.styled';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

function Hero() {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <Headline>
        <Title>
          <Trans i18nKey={'hero.title'}>
            Project <span>managment app</span>
          </Trans>
        </Title>
        <Description>{t('hero.description')}</Description>
        <Button>
          {/* TODO This will depend if user is logged and will be implemented later */}
          <Link to="/boards">{t('hero.getStarted')}</Link>{' '}
        </Button>
      </Headline>
      <Img src="assets/hero-section.svg" alt="People using kanban board" />
    </HeroContainer>
  );
}

export default Hero;
