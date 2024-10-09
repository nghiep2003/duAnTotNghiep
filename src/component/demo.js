import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const phoneData = {
  Apple: ['iPhone 13', 'iPhone 12', 'iPhone SE'],
  Samsung: ['Galaxy S21', 'Galaxy A52', 'Galaxy Note 20'],
  Xiaomi: ['Mi 11', 'Redmi Note 10', 'Poco X3'],
};

const PhoneList = ({ brand }) => {
  return (
    <View>
      {brand ? (
        phoneData[brand].map((phone) => (
          <Text key={phone} style={styles.phone}>
            {phone}
          </Text>
        ))
      ) : (
        <Text>Vui lòng chọn một hãng điện thoại.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  phone: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default PhoneList;
