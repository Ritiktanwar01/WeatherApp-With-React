import Weather from "@/assets/background/cloud.jpg"
import Rain from "@/assets/icons/rain.png"
import Sun from "@/assets/icons/sun.png"
import Wind from "@/assets/icons/wind.png"
import Sunny from "@/assets/images/sunny.png"
import { Link } from "expo-router"
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MapPinIcon } from "react-native-heroicons/mini"

const NewsCard = () => {

    return (
        <View className="w-[96%] h-full drop-shadow-2xl shadow-xl bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <Image source={Weather} className="h-[50%] w-full rounded-tl-2xl rounded-tr-2xl fixed" />
            <View className="h-[50%] w-full rounded-bl-2xl rounded-br-2xl absolute gap-[5%] p-4">
                <View className="w-[90%] mx-[5%] flex-row h-[50%] items-center justify-between mb-4">
                    <Image source={Sunny} className="w-[40px] h-[40px] mr-[15%]" />
                    <View className="flex-row gap-2 items-center justify-center w-[20%]">
                        <Image source={Rain} className="w-[18px] h-[18px]" />
                        <Text className="text-white">10%</Text>
                    </View>
                    <View className="flex-row gap-2 items-center justify-center w-[25%]">
                        <Image source={Sun} className="w-[18px] h-[18px]" />
                        <Text className="text-white">0.5</Text>
                    </View>
                    <View className="flex-row gap-2 items-center justify-center w-[30%]">
                        <Image source={Wind} className="w-[18px] h-[18px]" />
                        <Text className="text-white">124 mp/h</Text>
                    </View>
                </View>
                <View className="w-[90%] flex-row h-[50%] items-center] mx-[5%] justify-between">
                    <View className="tempratureHolder flex-row w-[20%]">
                        <Text className="text-2xl text-white font-bold">
                            70
                        </Text>
                        <Text className="mt-[-10px] text-white font-bold">
                            oF
                        </Text>
                    </View>
                    <View className="bottomItems flex-row gap-2 px-4 h-[50%] items-center w-full">
                        <MapPinIcon color={"white"} />
                        <Text className="text-white">Washington DC, USA</Text>
                    </View>
                </View>
            </View>
            <View className="w-full justify-center items-center mt-4">
                <Text className="text-2xl font-light w-[95%]">Here's what to expect from tuesday weather forecast</Text>
                <View className="w-full flex-row justify-between px-6 items-center mt-4">
                    <Text className="font-extralight">14 minutes ago</Text>
                    <TouchableOpacity>
                        <Link href={{pathname:'/News/[id]',params:{id:'1'}}}><Text className="font-bold text-[#3C6FD1]">View</Text></Link>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NewsCard