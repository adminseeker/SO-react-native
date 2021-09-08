import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, useWindowDimensions } from 'react-native';

export default function Answers(props)  {
    const [res, setResult] = useState(null);
    useEffect(()=>{
        getAnswersApi();
    },[getAnswersApi])
    const getAnswersApi = async ()=>{
        const fetchres = await fetch(
          `https://api.stackexchange.com/2.3/questions/${props.route.params.q_id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&pagesize=10`
        );
        const jsonres = await fetchres.json();
    
        setResult(jsonres);
        // setClickedQuestion(true);
      }

      return (
      <View>
      <Text>{ JSON.stringify(res)}</Text>
      </View>
      )
}