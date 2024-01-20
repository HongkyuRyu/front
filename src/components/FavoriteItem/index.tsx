import React from 'react';
import { FavoriteListItem } from 'types/interface';
import defaultImage from 'assets/image/default-profile-image.png';
import './style.css';

interface Props {
    favortieListItem: FavoriteListItem;
}


export default function FavoriteItem({ favortieListItem }: Props) {

    const { profileImage, nickname } = favortieListItem;

    return (
        <div className='favorite-list-item'>
            <div className='favorite-list-item-profile-box'>
                <div className='favorite-list-item-profile-image' style={{ backgroundImage: `url(${profileImage ? profileImage : defaultImage})` }}></div>
            </div>
            <div className='favorite-list-item-nickname'>{nickname}</div>
        </div>
    )
}
