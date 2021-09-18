import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("Good Morning");
        }
        else if (currentHour > 18) {
            setGreeting("Good Evening");
        }
        else {
            setGreeting("Good Afternoon");
        }
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello, React Native
            </Text>
            <Text style={styles.greeting}>
                {greeting}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <Button onPress={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>
            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard key={item} skill={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121015",
        paddingVertical: 60,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greeting: {
        color: '#FFF'
    }
})