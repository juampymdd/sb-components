/// <reference types="react" />
import './mylabel.css';
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
