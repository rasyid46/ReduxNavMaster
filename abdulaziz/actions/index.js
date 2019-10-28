import{TYPE_GANJIL_GENAP} from './types';
export const actionGanjilGenap =inputUser =>{
    return{
        type : TYPE_GANJIL_GENAP,// Men set type untuk di panggil di redurs
        payload :inputUser//mengisi nilai payload dari inputan user
    }
}