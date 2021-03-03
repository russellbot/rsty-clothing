import React, {useState, useEffect} from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        setCollections(SHOP_DATA);
        return () => {
            setCollections([]);
        }
    }, [])


    return (         
        <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionsProps }) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;