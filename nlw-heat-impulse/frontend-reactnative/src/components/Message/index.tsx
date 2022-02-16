import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import { UserAvatar } from '../UserAvatar';

import { styles } from './styles';

export type MessageProps = {
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string
    }
}

type MessageDataProps = {
    data: MessageProps
}

export function Message({ data }: MessageDataProps) {
    return (
        <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition= {{ type: 'timing', duration: 700 }}
            style={styles.container}
        >
            <Text style={styles.message}>
                {data.text}
            </Text>
            
            <View style={styles.footer}>
                <UserAvatar
                    imageUri={data.user.avatar_url}
                    sizes='SMALL'
                />

                <Text style={styles.userName}>
                    {data.user.name}
                </Text>
            </View>
        </MotiView>    
    )
}