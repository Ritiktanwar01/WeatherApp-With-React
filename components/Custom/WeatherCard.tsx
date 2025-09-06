import Rain from "@/assets/icons/rain.png"
import Sun from "@/assets/icons/sun.png"
import Wind from "@/assets/icons/wind.png"
import Sunny from "@/assets/images/sunny.png"
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MapPinIcon } from "react-native-heroicons/mini"

const WeatherCard = () => {
  return (
    <TouchableOpacity className='bg-[#24B0FF] h-[25vh] w-[90vw] rounded-2xl py-4 mx-4'>
      <View className='topSideItems flex-row h-[50%] w-full'>
        <View className="w-[70%] items-start justify-center p-4">
            <Text className="text-white">Chance of rain 90%</Text>
            <Text className="text-white text-4xl font-semibold">Partly Cloudy</Text>
        </View>
            <Image source={Sunny} className="w-[28%] h-full"/>
      </View>
      <View className="bottomItems flex-row gap-2 px-4 h-[25%] items-center w-full">
            <MapPinIcon color={"white"} />
            <Text className="text-white">Washington DC, USA</Text>
      </View>
      <View className="bottomItems flex-row gap-2 px-4 h-[25%] items-center w-full">
            <View className="tempratureHolder flex-row w-[20%]">
                <Text className="text-2xl text-white font-bold">
                    70
                </Text>
                <Text className="mt-[-10px] text-white font-bold">
                    oF
                </Text>
            </View>
            <View className="flex-row gap-2 items-center justify-center w-[20%]">
                <Image source={Rain} className="w-[18px] h-[18px]"/>
                <Text className="text-white">10%</Text>
            </View>
            <View className="flex-row gap-2 items-center justify-center w-[25%]">
                <Image source={Sun} className="w-[18px] h-[18px]"/>
                <Text className="text-white">0.5</Text>
            </View>
            <View className="flex-row gap-2 items-center justify-center w-[30%]">
                <Image source={Wind} className="w-[18px] h-[18px]"/>
                <Text className="text-white">124 mp/h</Text>
            </View>
            
      </View>
    </TouchableOpacity>
  )
}

export default WeatherCard