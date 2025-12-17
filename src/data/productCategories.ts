import { ProductCategory } from '../interfaces';

import adults1 from '../assets/images/categories/adults/men1.jpg'
import adults2 from '../assets/images/categories/adults/men2.jpeg'
import adults3 from '../assets/images/categories/adults/unisex1.jpeg'
import adults4 from '../assets/images/categories/adults/unisex2.jpeg'
import adults5 from '../assets/images/categories/adults/women1.png'
import adults6 from '../assets/images/categories/adults/women2.jpeg'

import children1 from '../assets/images/categories/children/babies1.jpeg'
import children2 from '../assets/images/categories/children/babies2.jpeg'
import children3 from '../assets/images/categories/children/babies3.jpeg'
import children4 from '../assets/images/categories/children/kids1.jpeg'
import children5 from '../assets/images/categories/children/kids2.jpeg'
import children6 from '../assets/images/categories/children/kids3.jpeg'

import institutional1 from '../assets/images/categories/institutional/brands1.jpg'
import institutional2 from '../assets/images/categories/institutional/uniforms1.jpg'
import institutional3 from '../assets/images/categories/institutional/uniforms2.png'
import institutional4 from '../assets/images/categories/institutional/uniforms3.png'

import sports1 from '../assets/images/categories/sports/sports1.jpg'
import sports2 from '../assets/images/categories/sports/sports2.jpg'
import sports3 from '../assets/images/categories/sports/sports3.jpg'

export const productCategories: ProductCategory[] = [
    {
        id: 1,
        images: [adults1, adults2, adults3, adults4, adults5, adults6],
        title: 'Adultos',
        description: 'Hombre - Mujer - Unisex',
    },
    {
        id: 2,
        images: [children1, children2, children3, children4, children5, children6],
        title: 'Infantil',
        description: 'Bebés - Niños',
    },
    {
        id: 3,
        images: [institutional1, institutional2, institutional3, institutional4],
        title: 'Institucional',
        description: 'Uniformes - Marcas',
    },
    {
        id: 4,
        images: [sports1, sports2, sports3],
        title: 'Deportivo',
        description: 'Fútbol - Running - Alto rendimiento',
    },
]