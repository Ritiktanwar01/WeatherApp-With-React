import Sunny from "@/assets/images/sunny.png"
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CalendarCard = () => {
    const Card = ({ day }: { day: string }) => {
        return (
            <View className='h-[5vh] w-full flex-row items-center px-8 justify-between '>
                <Text className="font-light">{day}</Text>
                <Image source={Sunny} className="h-[48px] w-[48px]" />
            </View>
        )
    }
    return (
        <View className='bg-[#EAF1FF] w-[95%] h-full rounded-2xl py-4 drop-shadow-2xl'>
            <Card day={"Monday"} />
            <Card day={"Tuesday"} />
            <Card day={"Wednesday"} />
            <View className='h-[10vh] w-full flex-row items-center px-8 justify-between'>
                <TouchableOpacity>
                    <Text className="font-light text-lg text-[#3C6FD1]">See all</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CalendarCard