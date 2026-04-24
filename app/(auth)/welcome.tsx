import { View, Pressable, } from "react-native";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView, Text } from "react-native";
import { PrimaryButton } from "@/components/primary-button";
import { StyleSheet } from "react-native";
// import { useRouter } from "expo-router";


export default function Welcome() {

    return (
        <ScrollView>
            <View style={{
                padding: 20,
                marginTop: 10,
                // alignItems: 'center',i
            }}>
                <Pressable style={{
                    position: 'relative',
                    backgroundColor: 'white',
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 25,
                    marginTop: -8,
                    left: '90%',

                }}>
                    <Ionicons name='chatbubble-outline' size={27} color='black' />
                </Pressable>


                <Image
                    source={require('@/assets/images/profile.png')}
                    style={styles.profile}
                />

                <Text style={styles.heading}> Welcome to the </Text>
                <Text style={styles.heading2}> Future of finance </Text>

                <Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}> To get started create an account, if you already have an account we will log you in  </Text>

                <PrimaryButton title='Continue with Email' icon={<Ionicons name="mail-outline" size={20} color='white' />} onPress={() => { }} />

                <PrimaryButton title='Continue with Google' icon={<AntDesign name="google" size={20} color='white' />} onPress={() => { }} />

                <PrimaryButton title='Continue with Apple' icon={<AntDesign name="apple" size={20} color='white' />} onPress={() => { }} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>
                    <Text style={{ color: 'white', }} >{<Ionicons name="shield-checkmark" size={20} color='green' />} Deposits insured by |</Text>

                    <View style={styles.tidal}><Text style={{ color: 'white', fontWeight: 'bold' }}>---tidal</Text></View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 20, }}>
                    <Text style={{ color: 'grey' }}>Backed by </Text>
                    <Text style={{ color: 'grey', marginTop: 6, }}>Google FOR STARTUPS   <MaterialCommunityIcons name='rhombus' size={13} color='grey' />BINANCE</Text>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    profile: {
        position: 'relative',
        width: 110,
        height: 110,
        borderRadius: 55,
        marginTop: 10,
        left: '32%',

    },
    heading: {
        marginTop: 13,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    heading2: {
        // marginTop: 13,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    end: {
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
    },

    tidal: {
        backgroundColor: '#1e4e82',
        width: '14%',
        marginLeft: 5,
        marginTop: 5,
    },
    // end1: {
    //   backgroundColor: '#007AFF',
    //   width: 50,
    //   marginLeft: '75%',

    //   alignItems: 'center',
});

