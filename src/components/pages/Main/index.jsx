import React from 'react';
import './index.module.scss';


const DrawUp = ({ xs, ys, w, h, }) => {
    return (
        <path
            stroke={"black"}
            id="lowerCurve"
            className="shapes"
            d={`
                M${xs}
                ${ys + h}
                
                C${xs + ( w * .5)}
                ${ys + h}
                
                ${xs + ( w * .5)}
                ${ys + ( h - ( h * .15 ))}
                
                ${xs + (w / 2)}
                ${ys + ( h - (h / 5))}
                
                L${xs + ( w * .5 )}
                ${ys + ( h * .2 )}
                
                C${xs + ( w * .5 )}
                ${ys + ( h * .15 )}
                
                ${xs + ( w / 2 )}
                ${ys}
                
                ${xs + w}
                ${ys}
            `}
        />
    )
}
const DrawDown = ({ xs, ys, w, h, }) => {
    return (
        <path
            id="lowerCurve"
            className="shapes"
            d={`
                M${xs}
                ${ys}
                
                C${xs + ( w * .5)}
                ${ys}
                
                ${xs + ( w * .5)}
                ${ys + ( h * .15 )}
                
                ${xs + ( w * .5 )}
                ${ys + (h * .2)}
                
                L${xs + ( w * .5 )}
                ${ys + ( h - ( h * .2 ))}
                
                C${xs + ( w * .5 )}
                ${ys + ( h - ( h * .15 ) )}
                
                ${xs + ( w * .5 )}
                ${ys + h}
                
                ${xs + w}
                ${ys + h}
            `}
        />
    )
}

const Main = ()=> {
    const width = 20
    const height = 50
    const points = [
        {xs:100, ys:50},
        {xs:120, ys:100},
        {xs:140, ys:50},
        {xs:140, ys:50},
    ]
    return (
        <div className="MasterContainer">
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 200 200"
                 xmlSpace="preserve">

                <path
                    stroke={"black"}
                    id="box"
                    className="shapes"
                    d={`
                        M${10} ${10}
                        L${100} ${10}
                        L${100} ${200}
                        L${10} ${200}
                        L${10} ${10}
                    `}

                    />
                {
                    points.map(item=> {
                        return (
                            <>
                                <DrawUp xs={item.xs}
                                        ys={item.ys}
                                        w={width}
                                        h={height}
                                />
                                <DrawDown xs={item.xs}
                                        ys={item.ys + height}
                                        w={width}
                                        h={height}
                                />
                            </>
                        )
                    })
                }

            </svg>
        </div>
    )
}

export default Main