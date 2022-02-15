import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
    const message = {
        id: '1',
        text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime tempore veritatis quia perspiciatis aliquam quos nam.',
        user: {
            name: 'Nanda Santos',
            avatar_url: 'https://github.com/nanda-st.png'
        }
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </ScrollView>    
    )
}