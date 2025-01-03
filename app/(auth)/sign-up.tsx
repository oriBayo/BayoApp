import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { signUp } from '@/actions/userAction';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
  });

  const submit = async () => {
    if (form.email === '' || form.password === '' || form.name === '') {
      Alert.alert('שגיאה', 'אנא מלא את כל השדות');
      return;
    }
    try {
      const user = await signUp(form.email, form.password, form.name);
      router.replace('/home');
    } catch (error) {
      Alert.alert('שגיאה', (error as Error).message);
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
            הרשם
          </Text>

          <FormField
            title='שם'
            value={form.name}
            placeholder='שם'
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles='mt-7'
          />

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
            title='הרשם'
            containerStyle='mt-8'
            textStyle='font-bold'
            handlePress={submit}
            isLoading={false}
          />
          <Text className='text-center text-white mt-4 text-xl'>
            יש כבר חשבון?
            <Link href='/sign-in' className='text-secondary text-center'>
              {'  '}
              התחבר עכשיו
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
