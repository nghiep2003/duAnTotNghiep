import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const ProductItem = () => {
  return (
    <View style={styles.container}>

      <View style={styles.imageItem}>
        <Image
          resizeMode="cover"
          source={require('../asset/image/produt1.png')}
          style={styles.image}
        />
      </View>

      <View>
        <Text style={styles.nameProduct}>IPhone16</Text>
      </View>

      <View style={styles.itemCapacity}>

        <TouchableOpacity style={styles.capacity}>
          <Text>128GB</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.capacity}>
          <Text>256GB</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.capacity}>
          <Text>512GB</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.priceItem}>
        <Text style={{fontSize:16}}>
          25.000.000đ
        </Text>
        <TouchableOpacity>
          <Icon name='shopping-cart' color='black' size={24}/>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 240,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 7,
  },
  imageItem: {
    width: 150,
    height: 140,
    alignSelf: 'center',
  },
  image: {
    width: 90,
    height: 120,
    marginTop: 10,

    alignSelf: 'center',
  },
  nameProduct: {
    fontSize: 16,
    color: 'black',
    paddingStart: 10,
  },
  itemCapacity: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal:2,
    marginTop:10
  },
  capacity: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
    fontFamily: 15,
    padding:2,
    borderRadius:4
  },
  priceItem:{
    flexDirection:'row',
    margin:10,
    justifyContent:'space-between'
  }
});
