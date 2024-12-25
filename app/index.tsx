import { Image, ScrollView, Text, View } from 'react-native';
import { router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';

export default function Index() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full items-center justify-center min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[200px] h-[100px] mt-3'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[300px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              שדרגו את תהליך המדידה שלכם עם
              <Text className='text-secondary-200 font-PoppinsBlack text-3xl text-center '>
                {' '}
                BayoApp
              </Text>
            </Text>

            <Text className='text-3xl text-white font-bold text-center '>
              פשוט, חכם ומדויק.
            </Text>
          </View>
          <Text className=' text-white text-center mt-5'>
            הטכנולוגיה המתקדמת שמעצבת את הדרך בה אתם מודדים .
          </Text>
          <CustomButton
            title='המשך עם אימייל'
            handlePress={() => {
              router.push('/sign-in');
            }}
            containerStyle='w-full mt-9'
          />
        </View>
      </ScrollView>
      <StatusBar style='light' backgroundColor='#161622' />
    </SafeAreaView>
  );
}
