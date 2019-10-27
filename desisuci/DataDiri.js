import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


class DataDiri extends Component {
    static navigationOptions = {
        title: "Profile",
        headerStyle: {
            backgroundColor: "#E49072"
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Bangkitlah, Berjuang!</Text>
                <View style={styles.puisiContainer}>
                    <Text>"Keberhasilan dan kegagalan itu saling melengkapi.
                            Itulah bumbu-bumbu kehidupan.
                            Tapi ingat, jangan berlarut-larut dalam kegagalan.
                            Karena keberhasilan sudah menunggu di depan.

                            Jika terjatuh, bangkitlah.
                            Bergerak, melangkah, dan teruslah berjuang.
                            Tak masalah jika tertatih-tatih.
                            Tak apa berhenti seketika.
                            Tapi jangan terlena.
                            Apalagi sampai menjatuhkan diri kembali.

                            Aku Bisa.
                            Aku tak lelah.
                            Aku hanya butuh dorongan.
                            Aku tak menyerah.
                            Aku yakin Aku bisa.
                            Ini bukan sebuah beban.
                            Tapi tantangan.
                            Pengalaman membuatku berani.
                            Berani hadapi tantangan.
                            Tak boleh takut gagal.

                            Karena setelah kegagalan aka nada kesuksesan.
                            Kegagalan adalah pembelajaran menuju sukses.
                            Aku yakin.
                            Aku pasti bisa".
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Redux" onPress={() => this.props.navigation.navigate("Redux")} />
                    <Button title="Data Diri" onPress={() => this.props.navigation.navigate("DataDiri")} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FFEAE2"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    puisiContainer: {
        width: '60%',
        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    }
});

export default DataDiri; 