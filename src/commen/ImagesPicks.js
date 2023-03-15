import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {icons} from '../helper/Icons/icons';
import {useSelector} from 'react-redux';

const ImagesPicks = ({item, index, datapass}) => {
  const dataredux = useSelector(state => state?.data);
  var prop2map = {};
  dataredux.map(vals => {
    if (vals.index == index) {
      prop2map = vals;
    }
  });

  const [isVisibal, setIsVisibal] = useState(false);

  const onOpencamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      datapass(image, item, index);
    });
  };
  const onOpengallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      datapass(image, item, index);
    });
  };
  const onCancel = () => {
    setIsVisibal(!isVisibal);
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => setIsVisibal(!isVisibal)}
        style={{flexDirection: 'row', marginHorizontal: 30}}>
        <Image style={styles.imageStyles} source={icons.addMore} />
        <Text
          style={{
            marginLeft: 10,
            color: '#DF7F00',
          }}>
          Add More Photo/File
        </Text>
      </TouchableOpacity>
      {isVisibal && (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={onOpencamera}
            style={styles.clicabalComponats}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginHorizontal: 15,
                tintColor: '#DF7F00',
              }}
              source={icons.cameraClick}
            />
            <Text style={{color: '#DF7F00', fontWeight: '600'}}>
              Take Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onOpengallary}
            style={styles.clicabalComponats}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginHorizontal: 15,
                tintColor: '#DF7F00',
              }}
              source={icons.gallary}
            />
            <Text style={{color: '#DF7F00', fontWeight: '600'}}>
              Choose from Gallary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancel}
            style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Image
              style={{
                height: 24,
                width: 24,
                marginHorizontal: 20,
                tintColor: '#DF7F00',
              }}
              source={icons.close}
            />
            <Text style={{color: '#DF7F00', fontWeight: '600'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImagesPicks;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 150,
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 15,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
  },
  imageStyles: {height: 24, width: 24, tintColor: '#DF7F00'},
  clicabalComponats: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
  },
});
