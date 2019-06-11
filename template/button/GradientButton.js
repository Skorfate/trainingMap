import GradientButton from 'react-native-gradient-buttons';
import React,{Component} from 'react';
import {Dimensions} from 'react-native';


export default class GradientButtonApp extends Component{

    render (){
        const{action,title,colorBegin,colorEnd,direccion,disabled} = this.props;
        const {width} = Dimensions.get ('window');
        return (

            <GradientButton
                style={{                       
                        height : 45,                
                        marginBottom:5,
                        alignItems: 'center', 
                        justifyContent: 'center',
                        borderRadius: 20,
                }}
                text={title}
                textSyle={{ fontSize: 14 }}      
                gradientBegin={colorBegin}
                gradientEnd={colorEnd}
                gradientDirection={direccion}
                height={45}
                width={'auto'}
                radius={20}
                impact
                impactStyle='Light'
                onPressAction={action}
                disabled = {disabled == 'true' ? true : false}
            />
        )
    }
}