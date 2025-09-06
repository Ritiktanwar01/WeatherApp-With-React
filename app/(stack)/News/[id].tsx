import Weather from "@/assets/background/cloud.jpg"
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeftIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/mini'

const News = () => {
  const {id} = useLocalSearchParams()
  console.log(id)
  const router = useRouter()
  const Back = () => {
    router.back()
  }
  const SearchScreen = () => {
    router.push('/search')
  }
  return (
    <View className='h-full w-full bg-white'>
      <View className='bg-white h-[15vh] flex-row items-center px-4 justify-between gap-2'>
        <View className='w-[20%] flex justify-center'>
          <TouchableOpacity onPress={Back}>
            <ArrowLeftIcon size={25} />
          </TouchableOpacity>
        </View>
        <View className='w-[55%] flex-row items-center justify-center gap-2'>
          <MapPinIcon />
          <Text>Washington DC, USA</Text>
        </View>
        <View className='w-[25%] flex items-center justify-center'>
          <TouchableOpacity onPress={SearchScreen}>
            <MagnifyingGlassIcon size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={Weather} className="w-[90%] h-[20vh] mx-[5%] rounded-2xl" />
      <View className="flex-row items-center px-8 gap-2 py-2">
        <Text className="font-bold text-[#3C6FD1] text-xs">Accuweather</Text>
        <Text className="font-bold text-[#3e3f41] text-4xl mt-[-12px]">.</Text>
        <Text className="font-bold text-[#3e3f41b4] text-xs">14 minuets ago</Text>
      </View>
      <ScrollView className="w-[90%] mx-[5%] px-2 break-words">
        <Text className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sapiente neque, vitae provident deserunt quaerat doloremque ipsam nulla dolorum veritatis illo, dicta id quod modi ea, incidunt qui temporibus! Nostrum, earum voluptatem! Sint perferendis delectus consectetur maxime iste pariatur labore odio quasi. In, autem, sit at iusto hic id nulla distinctio tempore saepe quia expedita nemo officiis soluta eos aperiam cupiditate eaque sequi tempora explicabo aliquam temporibus dolorum quos? Cupiditate recusandae nisi impedit enim exercitationem magnam veritatis eum dolore ullam vitae minus ipsam, explicabo excepturi consectetur modi. Repudiandae molestiae rerum accusantium odit? Sapiente animi nam, adipisci numquam obcaecati atque. Illum et eveniet soluta fugit cupiditate, optio id. Culpa sit quisquam harum maxime error illo iure praesentium debitis repellendus unde, totam quidem ab assumenda vero voluptatem ipsa perferendis consectetur dicta molestias animi deserunt, vel ratione! Impedit expedita recusandae reprehenderit doloremque quasi cupiditate. Dignissimos, doloremque aspernatur. Accusantium voluptates doloremque nulla nemo possimus unde molestiae, sit animi qui, voluptate placeat iure cupiditate cum accusamus. Voluptate, eius eum laborum soluta ratione consectetur maiores, dicta cumque tempore ullam mollitia repellendus. Culpa non reiciendis rem aut delectus ipsa maiores voluptatibus omnis sed eveniet nesciunt inventore numquam enim, doloremque debitis! Voluptatibus ullam animi reprehenderit quae eligendi blanditiis magni ea optio illo, voluptatem aliquam, corrupti nostrum cum at provident reiciendis? Sunt ducimus non dolor! Corrupti, esse laudantium dicta labore nihil, sint ratione beatae saepe repellat nam necessitatibus quas officiis? Enim magni sapiente eum perferendis. Ullam ipsa temporibus omnis doloremque, iste eos dolor eum vel exercitationem fuga error earum unde laboriosam dolorem iusto ad, quaerat blanditiis, obcaecati atque. Facere ea nemo sint quis voluptatum! Explicabo maxime natus sequi placeat deserunt ducimus repellat quo quae fugit. Ad, pariatur. Eaque consectetur laudantium modi obcaecati aperiam facilis ipsa iusto porro? Architecto beatae perferendis asperiores assumenda, qui vero dolorem animi minus aperiam, natus et unde numquam nostrum velit laudantium nesciunt facilis expedita ipsa deserunt. Magni provident laudantium nam ut eos fuga perferendis ex quod architecto temporibus facere, placeat consequatur? Culpa, eligendi mollitia. Perferendis quidem dolore labore odio fugit, ex nostrum neque dolorem. Mollitia doloremque magni consectetur iusto sint enim iste! Maxime debitis commodi eligendi porro error eos. Culpa nulla officia facere reiciendis, alias autem hic quae architecto eaque magni deserunt? Unde et aliquam laborum quos, explicabo esse non magni incidunt corrupti ullam tempore cumque nesciunt quae est fugit commodi recusandae in. Debitis vero veniam dolorum ut, adipisci quasi dolores quas quibusdam ab, nam dignissimos nihil perferendis maiores odio inventore sapiente doloribus, libero eos sit itaque sunt nemo aut sed architecto. Voluptatem eveniet corporis, eaque aut praesentium culpa quidem odio doloremque, quod quam neque ducimus cum consequuntur illum cupiditate fugiat accusamus voluptas, ipsam ex commodi ipsa rerum nesciunt? Eos quis quam maxime! Quae cumque molestiae magnam quo consectetur, eos quos nobis dolor odio, nemo nisi, iste saepe laudantium laborum. Voluptatem illum maiores ratione necessitatibus deleniti deserunt distinctio sed! Sit numquam, molestiae dolor modi debitis enim a excepturi voluptates. Perferendis asperiores culpa quasi optio voluptates temporibus cupiditate eos, blanditiis saepe repellat, mollitia, aperiam ipsa. Repellendus.

        </Text>
      </ScrollView>
    </View>
  )
}

export default News