import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import avatarDefault from '../../assets/avatar.png';

import { styles } from './styles';
import { COLORS } from '../../theme';

const SIZES = {
  SMALL: {
    containerSize: 32,
    picSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    picSize: 42,
  },
};

type UserAvatarProps = {
  imageUri: string | undefined,
  sizes?: 'SMALL' | 'NORMAL'
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarDefault).uri;

export function UserAvatar({ imageUri, sizes = 'NORMAL' }: UserAvatarProps) {
  const { containerSize, picSize } = SIZES[sizes];
    
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          {
            width: picSize,
            height: picSize,
            borderRadius: picSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
