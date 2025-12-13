import { CatalogItem } from '../interfaces';

import dama1 from '../assets/images/categories/women/dende-di-topo.png'
import dama2 from '../assets/images/categories/women/flores.png'
import dama3 from '../assets/images/categories/women/lurex.png'
import hombre1 from '../assets/images/categories/men/media-cana-toalla.png'
import hombre2 from '../assets/images/categories/men/soquete-rayado.jpg'
import ninos1 from '../assets/images/categories/kids/mix.png'
import ninos2 from '../assets/images/categories/kids/rayada.png'
import unisex1 from '../assets/images/categories/unisex/estamapas.png'
import unisex2 from '../assets/images/categories/unisex/rayas.png'
import unisex3 from '../assets/images/categories/unisex/soquetes-estampa.png'

export const catalogItems: CatalogItem[] = [
    {
        id: 1,
        images: [dama1, dama2, dama3],
        title: 'Dama',
        description: 'Diseños elegantes y contemporáneos con detalles exclusivos',
    },
    {
        id: 2,
        images: [hombre1, hombre2],
        title: 'Hombre',
        description: 'Modelos clásicos y deportivos con máxima comodidad',
    },
    {
        id: 3,
        images: [ninos1, ninos2],
        title: 'Niños',
        description: 'Estampados divertidos con personajes, colores vibrantes y alta durabilidad',
    },
    {
        id: 4,
        images: [unisex1, unisex2, unisex3],
        title: 'Unisex',
        description: 'Diseños versátiles para todos los estilos y ocasiones',
    },
]