import React from "react"
import map from "../../Assets/Img/Home/six-map.jpg"
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useMedia } from 'react-media';

export const Ordering =()=>{
    const mapData = {
        center: [44.479870297668924,34.132649190528284],
        zoom: 15
    };

    const coordinates = [
        [44.479870297668924,34.132649190528284]
    ];

    const GLOBAL_MEDIA_QUERIES = {
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
    };
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
    // использование библиотеки react-media чтобы сделать адаптивность для карт

    // const mapWidth = (matches.medium || matches.large)? 600 : 300;
    let mapWidth = 300;
    if(matches.small){
         mapWidth = 300;
    }
    else if(matches.medium){
         mapWidth = 600;
    }
    else if(matches.large) {
         mapWidth = 800;
    }



    return(
        <div className="six">
            <h4>Наша <span>Доставка</span></h4>
            <div className="six__offer">
                <h4><span>Доставка бесплатна</span></h4>
                <p>по всему городу <span>Ялта</span> При заказе от 200р :</p>
            </div>
            <div className="six__nav">
                {/*<img src={map} alt=""/>*/}
                <div className="six__nav-maps">
                <YMaps >
                    <Map defaultState={mapData} width={mapWidth} height={400}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    </Map>
                </YMaps>
                </div>

            </div>
            <div className="six__offer">
                <h4><span>Самовывоз:</span></h4>
                <p>Адрес: г. Ялта Бахчисарайское шоссе 2 дом2 </p>
            </div>
        </div>
    )
}