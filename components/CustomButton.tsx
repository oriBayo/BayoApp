import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <View className='flex-row justify-center items-center gap-4'>
        {isLoading && (
          <ActivityIndicator size='large' className='text-primary' />
        )}
        <Text className={`text-primary ${textStyle}`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
