import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem() {
    return (
      <View style={styles.container}>
            <View style={styles.profile}>
              <Image 
                style={styles.avatar}
                source={{uri: 'https://avatars2.githubusercontent.com/u/13324183?s=460&u=45ee3aceca1a8a951db626bf42af7722268a8d6f&v=4'}}
              />
                <View style={styles.profileInfo}>
                  <Text style={styles.name}>Alex Sousa</Text>
                  <Text style={styles.subject}>Matemática</Text>

                </View>

            </View>

            <Text style={styles.bio}>
                    Sou formado em Análise e desenvolvimento de sistemas, atualmente estou como coordenador de TI em uma fábrica de refrigerantes.
            </Text>
        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'  '}
                <Text style={styles.priceValue}>R$ 85,00</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                   <Image source={unfavoriteIcon} /> 
                   {/* <Image source={heartOutlineIcon} />  */}
                </RectButton>
                <RectButton style={styles.contactButton}>
                   <Image source={whatsappIcon} /> 
                   <Text style={styles.contactButtonText}>Entrar em contato </Text>
                </RectButton>
            </View>
        </View>
        
      </View>    
    
    )
}

export default TeacherItem;