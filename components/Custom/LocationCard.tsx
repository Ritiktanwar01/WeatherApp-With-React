import Sunny from "@/assets/images/sunny.png";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/mini';


interface data {
  boundingbox: [string, string, string, string]; // [south, north, west, east]
  class: 'boundary' | 'railway' | 'natural' | 'amenity'; // known categories
  display_name: string;
  importance: number;
  lat: string;
  lon: string;
  licence: string;
  osm_id: number;
  osm_type: 'node' | 'way' | 'relation';
  place_id: number;
  type: string; // e.g., 'administrative', 'halt', 'peak', 'school', etc.
}

const LocationCard = ({ data }: { data: data }) => {
  return (
    <TouchableOpacity className='w-[90%] mx-[5%] bg-[#EAF1FF] h-[8vh] rounded-2xl flex-row items-center px-4 my-2'>
      <View className='w-[15%] h-full flex items-center justify-center'>
        <MapPinIcon />
      </View>
      <View className='w-[65%] items-center'>
        <Text className='font-black text-sm'>{data.display_name}</Text>
      </View>
      <View className='w-[20%] items-end'>
        <Image source={Sunny} className="w-[48px] h-[48px]" />
      </View>
    </TouchableOpacity>
  )
}

export default LocationCard