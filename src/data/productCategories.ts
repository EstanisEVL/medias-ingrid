import { ProductCategory } from '../interfaces';

import adults1 from '../assets/images/categories/adults/women1-header.jpeg'
import adults2 from '../assets/images/categories/adults/women2.png'
import adults3 from '../assets/images/categories/adults/men1.jpg'
import adults4 from '../assets/images/categories/adults/unisex1.jpeg'
import adults5 from '../assets/images/categories/adults/unisex2.jpeg'

import children1 from '../assets/images/categories/children/babies1.jpeg'
import children2 from '../assets/images/categories/children/girls1.jpeg'
import children3 from '../assets/images/categories/children/boys2.png'
import children4 from '../assets/images/categories/children/boys3.jpg'

import school1 from '../assets/images/categories/school/uniform1-header.png'
import school2 from '../assets/images/categories/school/uniform2.png'
import school3 from '../assets/images/categories/school/uniform3.jpg'

import special1 from '../assets/images/categories/special/brands1.png'
import special2 from '../assets/images/categories/special/brands2.jpg'
import special3 from '../assets/images/categories/special/brands3.jpg'
import special4 from '../assets/images/categories/special/institutional1.jpg'
import special5 from '../assets/images/categories/special/institutional2.jpg'

export const productCategories: ProductCategory[] = [
    {
        id: 1,
        images: [adults1, adults2, adults3, adults4, adults5],
        title: 'Adultos',
        description: 'Dama - Hombre - Unisex',
    },
    {
        id: 2,
        images: [children1, children2, children3, children4],
        title: 'Infantil',
        description: 'Bebés - Niños',
    },
    {
        id: 3,
        images: [school1, school2, school3],
        title: 'Escolar',
        description: 'Uniformes',
    },
    {
        id: 4,
        images: [special1, special2, special3, special4, special5],
        title: 'Especial',
        description: 'Marcas - Instituciones',
    },
]