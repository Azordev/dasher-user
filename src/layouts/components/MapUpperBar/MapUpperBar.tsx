import { MapUpperBarStyle } from './MapUpperBar.styled';
import { IMapUpperBarTypeInput } from './MapUpperBar.type';
import { Paragraph, ParagraphWithoutMobile, TitleLG, ImageControl } from '../../../components';

import ArrowLeft from '../../../assets/arrow-left.svg';
import ChatIcon from '../../../assets/chat.png';

export const MapUpperBar = ({ text, subtext }: IMapUpperBarTypeInput) => {
  return (
    <MapUpperBarStyle>
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <ImageControl src={ArrowLeft} alt="" />
        <ParagraphWithoutMobile>Atras</ParagraphWithoutMobile>
      </div>
      <div>
        <TitleLG>{text}</TitleLG>
        <Paragraph>{subtext}</Paragraph>
      </div>
      <div>
        <ImageControl style={{ marginRight: '25px' }} maxWidth="70" src={ChatIcon} alt="" />
      </div>
    </MapUpperBarStyle>
  );
};
