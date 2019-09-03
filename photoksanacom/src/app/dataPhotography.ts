export interface Category {
    id: number;
    name: string;
}

export interface Photography {
    categoryId: number;
    name: string;
}

export const cats: Category[] = [
    { id: 1, name: 'Family'},
    { id: 2, name: 'Portrait'},
    { id: 3, name: 'Children'},
]

export const photos: Photography[] = [
    { categoryId: 1, name: '../assets/family/fam001.jpg' },
    { categoryId: 1, name: '../assets/family/fam002.jpg' },
    { categoryId: 1, name: '../assets/family/fam003.jpg' },
    { categoryId: 1, name: '../assets/family/fam005.jpg' },
    { categoryId: 2, name: '../assets/family/fam005.jpg' }
]; 