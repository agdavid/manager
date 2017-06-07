import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible} // this.props.visible will be true/false
      transparent
      animationType="slide"
      onRequestClose={() => {}} // android requires this prop, even if empty
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center' //everything in section center
  },
  textStyle: {
    flex: 1, // fill screen
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75', // black w/ slight opacity
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
