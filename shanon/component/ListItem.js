import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text>{props.adaAngka}</Text>
        <Text>{props.adaStatus}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'red',
  },
});

export default ListItem;
