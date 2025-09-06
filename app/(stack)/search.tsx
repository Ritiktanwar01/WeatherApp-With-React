import LocationCard from '@/components/Custom/LocationCard';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/mini';

interface Suggestion {
  boundingbox: [string, string, string, string];
  class: 'boundary' | 'railway' | 'natural' | 'amenity';
  display_name: string;
  importance: number;
  lat: string;
  lon: string;
  licence: string;
  osm_id: number;
  osm_type: 'node' | 'way' | 'relation';
  place_id: number;
  type: string;
}

const Search = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const Back = () => router.back();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (inputText.trim().length > 0) {
        fetch(`https://geocode.maps.co/search?q=${inputText}&api_key=68bba9bd26838558991707gzkda955d`)
          .then(res => res.json())
          .then(data => {
            console.log('Calling');
            setSuggestions(data);
          })
          .catch(err => console.error(err));
      }
    }, 500); // debounce delay

    return () => clearTimeout(delayDebounce); // cleanup
  }, [inputText]);

  return (
    <View className='h-full w-full bg-white'>
      <View className='w-full h-[10vh] flex-row items-center px-4'>
        <TouchableOpacity onPress={Back}>
          <ArrowLeftIcon size={30} />
        </TouchableOpacity>
      </View>
      <View className='w-[90%] mx-[5%] bg-[#F0F4FF] h-[6vh] rounded-2xl flex-row items-center px-4' id='searchBox'>
        <MagnifyingGlassIcon className='w-[10%]' />
        <TextInput
          className='w-[90%] px-4'
          value={inputText}
          onChangeText={setInputText}
          placeholder="Search location..."
        />
      </View>
      <ScrollView className='w-full h-[90vh] py-4'>
        {suggestions.map(item => (
          <LocationCard key={item.place_id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Search;
