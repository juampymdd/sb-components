import './mylabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar dentro de la etiqueta 
     */
    label: string;
    /**
     *  Este es el tamano de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  indica si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     *  Este es color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     *  Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     *  Color personalizado de la fuente
     */
    backgroundColor?: string;
}

export const MyLabel = ( {
    allCaps = false,
    color   = "primary",
    label   = "No Label",
    size    = "normal",
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps ) => {
    return (
        <span 
                className={ `label ${ size } text-${ color }` } 
                style={{ color:fontColor, backgroundColor }} >
                { allCaps ? label.toUpperCase() : label }
        </span>
    );
};


// CustomFontColor
// fontColor