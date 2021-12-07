import {createContext, useReducer, useContext} from 'react';
import {cartReducer} from './Reducers'
import useAxios from '../hooks/useAxios';

const Cart = createContext();

const Context = ({children}) => {

//Função para requisição de produtos de categoria especifica
/*   const allProducts = Object.values(useAxios("/products/buscartodos")); */
  const products = [
    {
        "id": 1,
        "title": "Soin Kérastase",
        "avaliacao": 4.5,
        "numaval": 245,
        "price": 141.0,
        "category": "Hair Care",
        "shortdescription": "Condicionador Kérastase Elixir Ultime Le Fondant.",
        "fulldescription": "Condicionador para tratamento dos fios composto por óleo de camélia, proporcionando um brilho radiante e duradouro. Combinação única de 5 óleos preciosos. Óleo de Marula: Enriquecido com vitaminas C e D, proporciona uma nutrição intensa, proteção antioxidante para proporcionar aos seus cabelos os nutrientes essenciais. Óleo de Camélia: Ajuda a suavizar a fibra capilar com um resultado de brilho incrível. Óleo de Gérmen de Milho: Um ingrediente ativo que tem função importante para nutrição e proteção. Óleo de Pracaxi: Fornece brilho, nutrição e maciez aos fios. Óleo de Argan: Ajuda a restaurar a força dos fios e protege das agressões externas.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/condicionador-kerastase.jpg"
    },
    {
        "id": 2,
        "title": "Bain Kerastase",
        "avaliacao": 4.0,
        "numaval": 120,
        "price": 99.0,
        "category": "Hair Care",
        "shortdescription": "Shampoo Kérastase Elixir Ultime Le Bain.",
        "fulldescription": "Shampoo de limpeza composto por óleo de camélia e óleo de Marula que remove impurezas e purifica o cabelo, proporcionando um brilho radiante e duradouro. Combinação única de 5 óleos preciosos. Óleo de Marula: Enriquecido com vitaminas C e D, proporciona uma nutrição intensa, proteção antioxidante para proporcionar aos seus cabelos os nutrientes essenciais. Óleo de Camélia: Ajuda a suavizar a fibra capilar com um resultado de brilho incrível. Óleo de Gérmen de Milho: Um ingrediente ativo que tem função importante para nutrição e proteção. Óleo de Pracaxi: Fornece brilho, nutrição e maciez aos fios. Óleo de Argan: Ajuda a restaurar a força dos fios e protege das agressões externas.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/shampoo-elixir.jpg"
    },
    {
        "id": 3,
        "title": "Masque Kérastase",
        "avaliacao": 5.0,
        "numaval": 35,
        "price": 249.0,
        "category": "Hair Care",
        "shortdescription": "Máscara de Tratamento Kérastase Elixir Ultime Le Masque.",
        "fulldescription": "Máscara para tratamento profundo dos fios composta por óleo de camélia e óleo de Marula, proporcionando um brilho radiante e duradouro. Combinação única de 5 óleos preciosos. Óleo de Marula: Enriquecido com vitaminas C e D, proporciona uma nutrição intensa, proteção antioxidante para proporcionar aos seus cabelos os nutrientes essenciais. Óleo de Camélia: Ajuda a suavizar a fibra capilar com um resultado de brilho incrível. Óleo de Gérmen de Milho: Um ingrediente ativo que tem função importante para nutrição e proteção. Óleo de Pracaxi: Fornece brilho, nutrição e maciez aos fios. Óleo de Argan: Ajuda a restaurar a força dos fios e protege das agressões externas.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/creme-elixir.jpg"
    },
    {
        "id": 4,
        "title": "Gel Modelador Keune",
        "avaliacao": 4.8,
        "numaval": 210,
        "price": 98.0,
        "category": "Hair Care",
        "shortdescription": "Gel Modelador Keune 1922 Classic Gel.",
        "fulldescription": "Gel modelador de alta fixação, 1922 Classic Gel é indicado para cabelos médios e curtos e penteados que necessitem de alta fixação e brilho. Sua fórmula contém creatina e óleo de rícino, um poderoso fortificante natural com propriedades hidratantes. Deixa qualquer penteado no lugar, com toque extra de brilho. Adequado para cabelos médios e curtos. Penteados que necessitem de alta fixação e brilho. ",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/gel-keune.jpg"
    },
    {
        "id": 5,
        "title": "Shampoo Keune",
        "avaliacao": 4.2,
        "numaval": 463,
        "price": 34.5,
        "category": "Hair Care",
        "shortdescription": "Shampoo Neutro Keune 1922 Refreshing Shampoo.",
        "fulldescription": "O 1922 Refreshing Shampoo é um shampoo neutro de uso diário recomendado para todos os tipos de cabelo que proporciona uma agradável sensação de frescor e é ideal para quem mora em regiões quentes ou pratica esportes. O frescor desse shampoo vem da fórmula, rica em extrato de hortelã, pimenta e mentol. Adequado para higienizar qualquer tipo de cabelo, promovendo uma agradável sensação de frescor. Suas propriedades mentoladas proporcionam ao couro cabeludo uma sensação de limpeza e frescor, estimulando a circulação sanguínea.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/shampoo-keune.jpg"
    },
    {
        "id": 6,
        "title": "Shampoo Redken",
        "avaliacao": 4.6,
        "numaval": 310,
        "price": 99.0,
        "category": "Hair Care",
        "shortdescription": "Redken Brews 3-In-1 - Shampoo Multifuncional.",
        "fulldescription": "O Shampoo Redken Brews 3 em 1 promove limpeza e deixa seus fios de seus cabelos macios e fáceis de pentear. É 3 em 1 pelo fato de poder ser aplicado tanto nos cabelos, na barba e no corpo. Resultado esperado: Pele e cabelos hidratados e relaxados. Indicado: Para todos os tipos de cabelo, barba e pele. Tecnologia: Possui uma fórmula antirressecamento à base de malte. Tem ação relaxante, promove hidratação e limpeza e tratamento profissional para os seus cabelos.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/shampoo-redken.jpg"
    },
    {
        "id": 7,
        "title": "Batom Clinique",
        "avaliacao": 4.8,
        "numaval": 145,
        "price": 54.0,
        "category": "Make Up",
        "shortdescription": "Batom Clinique Even Better Pop Bare Lip.",
        "fulldescription": "Uma paleta de tons de boca neutros que favorecem o tom e o subtom da pele. O QUE FAZ: Descubra sua individualidade usando o Clinique Shade-Match Science™. Com base em um algoritmo exclusivo, podemos fornecer tons que complementam o tom e o subtom da sua pele. Use a Roleta da Ciência do Clinique Shade-Match para descobrir seus tons perfeitos para três looks diferentes: Naked, Casual e Glam.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/make_up/batom-clinique.jpg"
    },
    {
        "id": 8,
        "title": "Batom MAC",
        "avaliacao": 4.6,
        "numaval": 221,
        "price": 99.0,
        "category": "Make Up",
        "shortdescription": "Batom de longa duração. O produto icônico que tornou a M·A·C famosa.",
        "fulldescription": "M·A·C Lipstick – o produto icônico que tornou a M·A·C famosa. Fórmula de longa duração que proporciona cor intensamente pigmentada e acabamento ultra matte aveludado.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/make_up/batom-mac.jpg"
    },
    {
        "id": 9,
        "title": "Corretivo Líquido Dior",
        "avaliacao": 4.9,
        "numaval": 15,
        "price": 255.0,
        "category": "Make Up",
        "shortdescription": "Dior Forever Skin Correct.Corretivo com duração 24h e Tratamento Extremo.",
        "fulldescription": "Dior cria Forever Skin Correct, corretivo com duração 24h e tratamento extremo. Numa só passagem este corretivo multiusos esconde olheiras, pequenas vermelhidões, manchas e imperfeições sem marcar os traços, para uma tez perfeita de manhã até à noite. Este concentrado de tratamento com duração 24H* é enriquecido com extrato de amor-perfeito silvestre para uma pele hidratada, suavizada com aparência refinada. A qualidade da tez é aperfeiçoada dia após dia.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/make_up/corretivo-dior.jpg"
    },
    {
        "id": 10,
        "title": "Paleta de sombra MAC",
        "avaliacao": 4.4,
        "numaval": 150,
        "price": 199.0,
        "category": "Make Up",
        "shortdescription": "Mac Eye Shadow X9 Dusky Rose Times Nine.",
        "fulldescription": "Tenha um olhar delicado e fashion com esta paleta. Seus tons de rosa escuro, perfeitamente combinados, duram horas. Com diversas texturas, de matte à acetinada ou cintilante, crie uma variedade de looks para o dia e para a noite. As sombras super pigmentadas vêm em uma compacta embalagem portátil.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/make_up/paleta-mac.jpg"
    },
    {
        "id": 11,
        "title": "Paleta de sombra Urban Decay",
        "avaliacao": 4.3,
        "numaval": 13,
        "price": 369.0,
        "category": "Make Up",
        "shortdescription": "Paleta de sombras Naked 3 Urban Decay.",
        "fulldescription": "O Estojo de Sombras Naked 3 é um item essencial para as amantes das sombras de cores neutras. Ele possui uma seleção especial de cores, para você criar infinitas possibilidades de makes para todas as ocasiões. Suas 12 cores são super pigmentadas com acabamento cintilante ao fosco, passando ainda pelos metálicos.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/make_up/paleta-naked.jpg"
    },
    {
        "id": 12,
        "title": "Paleta de Sombra NYX",
        "avaliacao": 4.9,
        "numaval": 210,
        "price": 149.0,
        "category": "Make Up",
        "shortdescription": "Paleta de sombras de dezesseis cores NYX Professional Ultimate – Phoenix.",
        "fulldescription": "Uma paleta de sombras de dezesseis cores. Obtenha todos os seus brilhos em um só lugar com a NYX Professional Makeup Ultimate Shadow Palette Phoenix. Esta paleta apresenta dezesseis sombras em tons quentes para você experimentar e criar novos looks. A paleta de nível profissional tem uma fórmula macia e finamente moída que desliza para a tampa e se mistura como nenhuma outra. Com uma mistura de acabamentos mate e cintilante, as possibilidades com esta paleta são infinitas. Cruelty-free.",
        "image": "https://amarecuidar.s3.sa-east-1.amazonaws.com/make_up/paleta-nyx.jpg"
    }
];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  /* console.log(allProducts); */

  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export const CartState = () => {
  return useContext(Cart);
}

export default Context;