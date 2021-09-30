import { MapLowerBarStyle } from './MapLowerBar.styled';
import { CenterContainer, Paragraph, SubTitle } from '../../../components';

import { colors } from '../../../styles';

import AssistantIcon from '../../../assets/assistant.png';
import GpsIcon from '../../../assets/gps-icon.png';

export const MapLowerBar = () => {
  return (
    <>
      <MapLowerBarStyle>
        <CenterContainer>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <div>
              <img src={GpsIcon} alt="" />
            </div>
            <div style={{ height: '100%' }}>
              <Paragraph color={colors.colors.yellow05}>Av. Apurímac 1020, Santiago de chile</Paragraph>
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <SubTitle color={colors.colors.yellow05}>15 MIN</SubTitle>
              <Paragraph>Tiempo estimado de llegada</Paragraph>
            </div>
            <div>
              <div>
                <img src={AssistantIcon} alt="" />
              </div>
              <Paragraph style={{ lineHeight: '0.5rem' }}>Central Dasher</Paragraph>
            </div>
          </div>
        </CenterContainer>
      </MapLowerBarStyle>
    </>
  );
};
