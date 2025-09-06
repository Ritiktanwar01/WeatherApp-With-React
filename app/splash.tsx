import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const splash = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            router.replace("/(stack)")
        }, 300);
    },[])

  return (
    <View className='bg-[#24B0FF] h-full w-full flex-col items-center justify-center'>
      <View className='w-[30vw] h-[14vh] bg-white rounded-[40px] text-center flex-row items-center justify-center'>
            <Text className='font-bold text-[#24B0FF] text-4xl'>W</Text>
      </View>
      <View className='w-[50%] h-[10vh] items-center justify-center gap-[2vh]'>
            <Text className='font-semibold text-white text-3xl'>Wurly</Text>
            <Text className='font-semibold text-white'>We Track Weather</Text>
      </View>
      
    </View>
  )
}

export default splash