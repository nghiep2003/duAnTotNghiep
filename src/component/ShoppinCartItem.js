import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

const ShoppinCartItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../asset/image/produt1.png')}
        />
      </View>

      <View style={styles.itemContent}>
        <Text style={styles.name}>IPhone 1</Text>

        <View style={styles.configurationItem}>
          <View style={styles.configuration}>
            <Text>128GB</Text>
          </View>
        </View>
        <View style={styles.quantityItem}>
          <TouchableOpacity>
            <Icon name="minus" size={30} />
          </TouchableOpacity>

          <Text style={{color:'black',alignSelf:'center'}}>1</Text>
          <TouchableOpacity>
            <Icon name="plus" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.price}>15.000.000đ</Text>
          </View>

          <View style={{marginBottom:10}}>
            <TouchableOpacity>
              <Icon name="close-o" color="black" size={34} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShoppinCartItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 130,
    margin: 10,
    borderRadius: 6,
    flexDirection: 'row',
  },
  image: {
    height: 120,
    width: 90,
    margin: 5,
  },
  itemContent: {
    justifyContent: 'space-evenly',
    marginStart: 20,
  },
  name: {
    fontSize: 18,
    color: 'black',
  },
  configurationItem: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },
  configuration: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },

  price: {
    alignItems: 'flex-start',
    color: 'black',
    fontSize: 18,
  },
  quantityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    height: 30,
    width:90,
    borderRadius: 5,

  },
});
