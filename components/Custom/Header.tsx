import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/mini'
const Header = () => {
  const router = useRouter()
  const SearchScreen = ()=>{
    router.push('/search')
  }
  return (
    <View className='bg-white h-[15vh] flex-row items-center px-2 justify-between gap-2'>
      <View className='w-[20%] flex items-center justify-center'>
        <TouchableOpacity>
          {/* <Bars2Icon size={25} /> */}
        </TouchableOpacity>
      </View>
      <View className='w-[55%] flex-row items-center justify-center gap-2'>
        <MapPinIcon />
        <Text >Washington DC, USA</Text>
      </View>
      <View className='w-[25%] flex items-center justify-center'>
        <TouchableOpacity onPress={SearchScreen}>
          <MagnifyingGlassIcon size={25} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header