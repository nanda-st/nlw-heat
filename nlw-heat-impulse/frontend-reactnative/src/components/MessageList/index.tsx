import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

    useEffect(() => {
        async function fetchMessages() {
            const messagesResponse = await api.get<MessageProps[]>('/messages/recent');
            setCurrentMessages(messagesResponse.data);
        }

        fetchMessages();
    }, [])

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            {currentMessages.map(message => {
                return <Message key={message.id} data={message}/>
            })

            }
        </ScrollView>    
    )
}