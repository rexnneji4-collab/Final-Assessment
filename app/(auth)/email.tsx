
import { View, Text, Pressable } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Email() {
    const router = useRouter()

    return (

        <View style={{
            padding: 20,
            marginTop: 20,
        }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Welcome</Text>

            <Pressable style={{
                position: 'relative',
                backgroundColor: 'white',
                height: 40,
                width: 40,
                alignItems: 'center',
                padding: 5,
                borderRadius: 25,
                marginTop: -40,

                marginLeft: 275,

            }}>
                <Ionicons name='chatbubble-outline' size={27} color='black' />
            </Pressable>

            <Text style={{ color: 'white', marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Enter your email address</Text>

            <Text style={{ color: 'gray', marginTop: 10, fontWeight: '200' }}>Email</Text>

            {/* <Ionicons name='mail' size={20} color='gray' /> */}
            <TextInput style={styles.input} placeholder='Enter your email' />

            <Pressable style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#007AFF',
                borderWidth: 2,
                padding: 12,
                borderRadius: 25,
                height: 55,
                marginTop: 16,
            }}
                onPress={() => {
                    router.push(({ pathname: ('/login') }));
                }}>

                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Continue</Text>
            </Pressable>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>
                <Text style={{ color: 'white', }} >{<Ionicons name="shield-checkmark" size={20} color='green' />} Deposits insured by |</Text>

                <View style={styles.tidal}><Text style={{ color: 'white', fontWeight: 'bold' }}>---tidal</Text></View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20, }}>
                <Text style={{ color: 'grey' }}>Backed by </Text>
                <Text style={{ color: 'grey', marginTop: 6, }}>Google FOR STARTUPS   <MaterialCommunityIcons name='rhombus' size={13} color='grey' />BINANCE</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    input: {
        color: 'grey',
        marginTop: 10,
        height: 40,
        outlineStyle: 'solid',
        outlineColor: 'grey',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
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
})

