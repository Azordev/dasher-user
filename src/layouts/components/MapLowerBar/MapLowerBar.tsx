import { MapLowerBarStyle } from './MapLowerBar.styled';
import { CenterContainer, EvenlyContainer, ColumnContainer, Paragraph, SubTitle } from '../../../components';

import { colors } from '../../../styles';

import AssistantIcon from '../../../assets/assistant.png';
import GpsIcon from '../../../assets/gps-icon.png';

export const MapLowerBar = () => {
  return (
    <div style={{ width: '100%' }}>
      <MapLowerBarStyle>
        <CenterContainer>
          <CenterContainer style={{ padding: '1rem' }}>
            <div>
              <img src={GpsIcon} alt="" />
            </div>
            <div style={{ height: '100%' }}>
              <Paragraph color={colors.colors.yellow05}>Av. Apurímac 1020, Santiago de chile</Paragraph>
            </div>
          </CenterContainer>
          <EvenlyContainer>
            <ColumnContainer>
              <SubTitle color={colors.colors.yellow05}>15 MIN</SubTitle>
              <Paragraph>Tiempo estimado de llegada</Paragraph>
            </ColumnContainer>
            <div>
              <div>
                <img src={AssistantIcon} alt="" />
              </div>
              <Paragraph style={{ lineHeight: '0.5rem' }}>Central Dasher</Paragraph>
            </div>
          </EvenlyContainer>
        </CenterContainer>
      </MapLowerBarStyle>
    </div>
  );
};
