import React from "react"
import "./FeatureAct.css"
import surf from "./surf.jpg"
import rafting from "./rafting.jpg"
import downhill from "./pexels-anastasia-shuraeva-8927282.jpg"


const FeatureAct = () => {
    return (
        <div className="FeatureActContainer">
            <h2 className="TitleFeaturesAct">Pack de actividades</h2>
            <h4 className="FeatureAct">Feature</h4>
            <div className="ContainerCardFeature">
                <a class="ui card">
                    <img className="ImgSurf" src={surf} alt="Surf" class="ui image" />
                    <div class="content">
                        <div class="header">Surf</div>
                        <div class="description">Explora y viaja a las mejores olas del continente  </div>
                    </div>
                </a>
                <a class="ui card">
                    <img src={rafting} alt="Rafting" class="ui image" />
                    <div class="content">
                        <div class="header">Rafting</div>
                        <div class="description">Senti la naturaleza como nunca la sentiste, recorre los rios mas picados del pais y comparti con amigos o familia</div>
                    </div>
                </a>
                <a class="ui card">
                    <img src={downhill} class="ui image" alt="Downhill" />
                    <div class="content">
                        <div class="header">Downhill</div>
                        <div class="description">Tirate desde la cumbre de las mejores montañas de todo Argentina</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default FeatureAct