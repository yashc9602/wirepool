import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    const newMessage = { text: inputText, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const renderMessage = ({ item }) => {
    const messageStyle = item.sender === 'user' ? styles.userMessage : styles.devMessage;

    return (
      <View style={[styles.messageContainer, messageStyle]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    marginRight: 4,
    backgroundColor: '#DCF8C6',
  },
  devMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFEFEF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
    padding: 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    marginLeft: 9,
    padding: 10,
  },
  sendButton: {
    marginLeft: 5,
    padding: 10,
  },
});

export default ChatComponent;
