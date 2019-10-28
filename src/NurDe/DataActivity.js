import React from 'react';
import{
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

class DataActivity extends React.Component{
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
          baackgroundColor: '#73C6B6',
        },
      };
      render(){
          return(
              <View style={styles.container}>
                  <View style={styles.containerData}>
                  <Text>Nama: Nur De Afni Melani</Text>
                  <Text>Alamat: Buaran</Text>
                  <Text>Email: nurde@gmail.com</Text>
                  <Text>No.Hp: 0890890</Text>
                  </View>
                  <Text></Text>
                  <View style={styles.containerData}>
                  <Text>Nama: Desi Suci Ramadani</Text>
                  <Text>Alamat: Cisauk</Text>
                  <Text>Email: desi@gmail.com</Text>
                  <Text>No.Hp: 089087867</Text>
                  </View>
              </View>
          )
      }
}