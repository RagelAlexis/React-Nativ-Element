import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, SearchBar, ListItem, Avatar } from '@rneui/themed'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {
  const [search, setSearch] = useState('')
  const list = [
    {
      name: 'John Doe',
      avatar: 'JD',
      subtitle: 'POEC appli',
    },
    {
      name: 'Johnny Doet',
      avatar: 'JD',
      subtitle: 'Dev Web',
    },
    {
      name: 'Bonnie West',
      avatar: 'BW',
      subtitle: 'CDUI',
    },
    {
      name: 'Stevie Williams',
      avatar: 'SW',
      subtitle: 'POEC appli',
    },
    {
      name: 'Lynn Perrin',
      avatar: 'LP',
      subtitle: 'Dev',
    },
    {
      name: 'Vernon Gates',
      avatar: 'VG',
      subtitle: 'POEC appli',
    },
  ]
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        centerComponent={{
          text: 'Apprenants de La Manu',
          style: styles.header,
        }}
      />
      <View>
        <SearchBar lightTheme={true} onChangeText={setSearch} value={search} />
        {list.map((item, index) => {
          return (
            <ListItem key={index} bottomDivider>
              <Avatar
                size={50}
                containerStyle={{ backgroundColor: '#3d4db7' }}
                title={item.avatar}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )
        })}
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#FFF',
  },
})
