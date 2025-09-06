import CalendarCard from '@/components/Custom/CalendarCard';
import Header from '@/components/Custom/Header';
import NewsCard from '@/components/Custom/NewsCard';
import WeatherCard from '@/components/Custom/WeatherCard';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  const data = [
    { id: '1', title: 'Hello, Ritik!' },
    { id: '2', title: 'Hello, Ritik!' },
    { id: '3', title: 'Hello, Ritik!' },
    { id: '4', title: 'Hello, Ritik!' },
    { id: '5', title: 'Hello, Ritik!' },
  ];
  return (
    <ScrollView className='bg-white h-full'>
      <Header />
      <View className='h-[30vh]'>
        <ScrollView horizontal>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </ScrollView>
      </View>
      <View className='mt-[2.5vh] gap-4'>
        <Text className='text-2xl font-bold ml-6'>
            Weather News
          </Text>
        <View className='h-[30vh] w-full flex items-center justify-center '>
          <NewsCard />
        </View>
      </View>
      <View className='mt-[2.5vh] gap-4'>
        <Text className='text-2xl font-bold ml-6'>
            Calendar
          </Text>
        <View className='h-[25vh] mb-[5vh] w-full flex items-center justify-center '>
          <CalendarCard />
        </View>
      </View>
    </ScrollView>
  );
}
