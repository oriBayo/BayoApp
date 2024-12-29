import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '@/actions/userAction';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    try {
      if (form.email === '' || form.password === '') {
        Alert.alert('שגיאה', 'אנא מלא את כל השדות');
        return;
      }
      setIsLoading(true);
      await signIn(form.email, form.password);
      router.replace('/home');
    } catch (error) {
      Alert.alert('שגיאה', 'שם משתמש או סיסמה שגויים');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 '>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[230px] h-[150px] m-auto '
          />
          <Text className='text-4xl text-white font-PoppinsBlack text-center mt-5'>
            התחבר
          </Text>
          <FormField
            title='אימייל'
            value={form.email}
            placeholder='אימייל'
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
          />

          <FormField
            title='סיסמה'
            value={form.password}
            placeholder='סיסמה'
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />

          <CustomButton
            title='התחבר'
            containerStyle='mt-8'
            textStyle='font-bold'
            handlePress={submit}
            isLoading={isLoading}
          />

          <Text className='text-center text-white mt-4 text-xl'>
            עדיין אין לך חשבון?
            <Link href='/sign-up' className='text-secondary text-center'>
              {'  '}
              הירשם עכשיו
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
