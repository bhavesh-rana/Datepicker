import React, {useRef, useState} from 'react';
import {StyleSheet, View, Button, Text, Image} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';
import {useSelector} from 'react-redux';

const Sign = ({item, index, datapass}) => {
  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });
   const [signature, setSign] = useState(prop2map.val); 
  const ref = useRef();

  const handleOK = signature => {
     // onOK(signature);
    setSign(signature);
    datapass(signature, item, index);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
     ref.current.readSignature();
  };

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 180,
          width: '100%',
          backgroundColor: 'rgba(90,90,90,0.1)',
        }}>
        {signature ? (
          <Image
            resizeMode={'contain'}
            style={{width: '100%', height: '100%'}}
            source={{uri: signature}}
          />
        ) : null}
      </View>
      <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 450,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
