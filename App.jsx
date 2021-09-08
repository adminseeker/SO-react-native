import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AppCard from './Card';

export default function App() {
  const [text, setText] = useState('CDEF');
  const [res, setResult] = useState(null);

  const getRes = async () => {
    const fetchres = await fetch(
      `https://api.stackexchange.com/2.3/search?site=stackoverflow&order=desc&sort=activity&intitle=${text}&filter=withbody&pagesize=10`
    );
    const jsonres = await fetchres.json();

    setResult(jsonres);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder='Scam'
        value={text}
        onChangeText={newtext => {
          setText(newtext);
          // debouncedFunction();
          // console.log(debouncedFunction)
        }}
        />
      <Button title='Search' onPress={getRes} />
      
      {res?.items.map((item, id) => {
        return (
          <AppCard
            key={item.question_id}
            q_display_name={item.owner.display_name}
            q_score={item.score}
            q_id={item.question_id}
            q_title={item.title}
            q_body={item.body}
            q_answer_count={item.answer_count}
          ></AppCard>
        );
      }) ?? <Text></Text>}

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
