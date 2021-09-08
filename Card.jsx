import React, { useState } from 'react';
import { View, Text,StyleSheet, useWindowDimensions } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import RenderHtml from 'react-native-render-html';


const styles = StyleSheet.create({
    a: {
      fontWeight: '300',
      color: '#FF3366', // make links coloured pink
    },
    
  });
export default function AppCard(props) {
  const { q_id, q_score, q_title, q_display_name, q_body, q_answer_count } =
    props;
  const [clickedQuestion, setClickedQuestion] = useState(false);
  const { width } = useWindowDimensions(); //problematic 
//   whats the prob
//the window after clicking view question body is setting to the width of the entire screen. we want it to inherit it from the card
// oh boy !!!!!!!!!!!! still there no?
//THe left part is fed up
  return (
    <Card>
      <Card.Title>{q_title.length>30?(q_title.substring(0,30)+"..."):q_title}</Card.Title>
      <Text>Asked By: {q_display_name}</Text>
      <Text>Score: {q_score}</Text>
      <Text>Total Answers: {q_answer_count}</Text>
      
      {clickedQuestion && (
        <RenderHtml
        // contentWidth={width}
        source={{html:q_body}}
        
      />
      )}
      <Button
        title='View Question Body'
        onPress={() => setClickedQuestion(!clickedQuestion)}
      ></Button>
    </Card>
  );
}
