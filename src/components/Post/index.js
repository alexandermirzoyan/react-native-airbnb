import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const {post} = props;
  const {
    id,
    image,
    type,
    bed,
    bedroom,
    description,
    oldPrice,
    newPrice,
    totalPrice,
  } = post;

  return (
    <View key={`index_${id}`} style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>

      {/* Type & Desc */}
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>

      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.price}> ${newPrice} </Text> / night
      </Text>

      {/* total price */}
      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  );
};

export default Post;
