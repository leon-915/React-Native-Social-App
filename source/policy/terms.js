import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';

var { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import common from '../common/global';
import Header from '../common/back';
import styles from './styles'
import color from '../common/color';

export default class Terms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={common.overlay}
                >

                <Image source={require('../../assets/bottom-flag.png')} style={styles.background} />

                    <Header
                        title={'TERMS AND CONDITIONS'}
                        onMenu={() => navigation.goBack()}
                        titleStyle={{
                            paddingLeft: 10
                        }}
                    />

                    <ScrollView contentContainerStyle={{ paddingBottom: width * 0.05 }}>
                        <View style={[common.main]}>
                            <Text style={styles.subtitle}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>

                            <Text style={styles.subtitle}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Text>

                            <View style={{ marginVertical: width * 0.05 }}>
                                <Button
                                    title="ACCEPT"
                                    titleStyle={common.buttonTitle}
                                    buttonStyle={common.button}
                                    onPress={() => this.props.navigation.goBack()}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}
