// import
import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

// create
const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;

    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainterStyle,
        headerTextStyle,
        imageStyle,
        albumImageContainterStyle

    } = styles;

    return (
        <Card>

            <CardSection>
                <View style = {thumbnailContainterStyle}>
                    <Image
                        style = {thumbnailStyle}
                        source ={{ uri: thumbnail_image}}
                    />
                </View>
                <View style = {headerContentStyle}>
                    <Text style = {headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>


            <CardSection>
                <Image
                    style = {imageStyle}
                    source = {{ uri: image}}
                />
            </CardSection>

            <CardSection>
                <Button onPress= {() => Linking.openURL(url)}>
                    Buy on Amazon
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainterStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

// export
export default AlbumDetail;