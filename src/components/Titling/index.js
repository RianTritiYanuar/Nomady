import React from 'react';
import Container from '../Container';
import AppText from '../AppText';
import {Colors} from '../../utils/Colors';

const Titling = ({subtitle, style, title, titleSize}) => {
  /**
   * ---------------------------------------------------- *
   * @styles {AppText}
   * @summary return base style for component AppText
   * ---------------------------------------------------- *
   */
  let baseStyle = {
    paddingVertical: 25,
  };

  return (
    <Container style={[baseStyle, style]}>
      <AppText bold large={titleSize === 'large'} style={{marginBottom: 5}}>
        {title}
      </AppText>
      <AppText small color={Colors.GREY}>
        {subtitle}
      </AppText>
    </Container>
  );
};

export default Titling;
