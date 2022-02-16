import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../../theme';

import { Button } from '../Button';

import { styles } from './styles';


export function SendMessageForm() {
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)

    return (
        <View style={styles.container}>
            <TextInput
                keyboardAppearance='dark'
                placeholder='Qual sua expectativa para o evento?'
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                value={message}
                onChangeText={setMessage}
                style={styles.input}
                editable={!sendingMessage}
            />
            
            <Button
                title='ENVIAR MENSAGEM'
                color={COLORS.WHITE}
                backgroundColor={COLORS.PINK}
            />
        </View>    
    )
}