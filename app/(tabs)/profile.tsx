import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '@/components/CustomButton';
import { signOut } from '@/actions/userAction';
import { router } from 'expo-router';

const Profile = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/sign-in');
    } catch (error) {
      console.error('Error during sign-out:', (error as Error).message);
    }
  };
  return (
    <View>
      <Text>Profile</Text>
      <CustomButton
        containerStyle='bg-red-500'
        textStyle='text-white text-2xl'
        title='Log Out'
        handlePress={handleSignOut}
      />
    </View>
  );
};

export default Profile;
