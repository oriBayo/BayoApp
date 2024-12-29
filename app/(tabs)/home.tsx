import { View, Text, Button } from 'react-native';
import React from 'react';
import { getCurrentUser } from '@/actions/userAction';
import CustomButton from '@/components/CustomButton';

const Home = () => {
  const submit = async () => {
    try {
      const user = await getCurrentUser();
    } catch (error) {
      console.error('Error during getting user:', (error as Error).message);
    }
  };
  return (
    <View>
      <Text>Home</Text>
      <CustomButton handlePress={submit} title='Get Current User' />
    </View>
  );
};

export default Home;
