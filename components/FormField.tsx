import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: 'email-address' | 'default';
  [x: string]: any;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-gray-100 text-base text-right me-3 mb-1'>
        {title}
      </Text>
      <View
        className={`w-full border-black-200 border-2 h-16 px-4 bg-black-100 rounded-2xl  items-center flex-row-reverse ${
          isFocused ? 'border-secondary' : 'border-black-200'
        }`}
      >
        <TextInput
          className='flex-1 text-white text-base text-right '
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChange={(e) => handleChangeText(e.nativeEvent.text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={title === 'סיסמה' && !showPassword}
          {...props}
        />
        {title === 'סיסמה' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className='h-6 w-6 text-left'
              resizeMode='contain'
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
