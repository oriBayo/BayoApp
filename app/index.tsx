import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-6xl p-3 font-PoppinsBlack'>BayoApp</Text>
      <Link href='/projects' className='text-blue-900  '>
        Go To Projects
      </Link>
    </View>
  );
}
